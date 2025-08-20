import os
import csv
import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader

class ASLVideoDataset(Dataset):
    def __init__(self, processed_dir, labels_csv, sequence_length=30):
        self.processed_dir = processed_dir
        self.sequence_length = sequence_length
        self.samples = []
        self.label_map = {}
        # Read labels
        with open(labels_csv, 'r') as f:
            reader = csv.DictReader(f)
            for row in reader:
                video_name = row['video_name']
                label = row['label']
                self.samples.append((video_name, label))
                if label not in self.label_map:
                    self.label_map[label] = len(self.label_map)

    def __len__(self):
        return len(self.samples)

    def __getitem__(self, idx):
        video_name, label = self.samples[idx]
        video_folder = os.path.join(self.processed_dir, video_name)
        frame_files = sorted([f for f in os.listdir(video_folder) if f.endswith('.npy')])
        # Load frames
        frames = []
        for frame_file in frame_files[:self.sequence_length]:
            frame_path = os.path.join(video_folder, frame_file)
            frame = np.load(frame_path)
            frames.append(frame)
        # Pad if not enough frames
        if frames:
            while len(frames) < self.sequence_length:
                frames.append(np.zeros_like(frames[0]))
            frames = np.stack(frames)
            frames = torch.tensor(frames, dtype=torch.float32)
            frames = frames.permute(0, 3, 1, 2)  # (seq_len, channels, height, width)
        else:
            # If no frames found, create a zero tensor
            frames = torch.zeros(self.sequence_length, 3, 224, 224, dtype=torch.float32)
        label_idx = self.label_map[label]
        return frames, label_idx

# Example usage:
if __name__ == "__main__":
    dataset = ASLVideoDataset(
        processed_dir="data/processed",
        labels_csv="data/processed/labels.csv",
        sequence_length=30
    )
    dataloader = DataLoader(dataset, batch_size=4, shuffle=True)
    for batch in dataloader:
        frames, labels = batch
        print(frames.shape, labels)
        break
