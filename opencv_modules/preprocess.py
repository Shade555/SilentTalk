# Preprocessing module for images/videos
import cv2
import os
import numpy as np

RAW_VIDEO_DIR = "data/raw/archive/videos"
PROCESSED_DIR = "data/processed"
FRAME_SIZE = (224, 224)  # For CNNs
FRAME_INTERVAL = 5       # Extract every 5th frame

def process_videos():
    if not os.path.exists(PROCESSED_DIR):
        os.makedirs(PROCESSED_DIR)
    for video_file in os.listdir(RAW_VIDEO_DIR):
        if not video_file.lower().endswith(('.mp4', '.avi', '.mov', '.mkv')):
            continue
        video_path = os.path.join(RAW_VIDEO_DIR, video_file)
        video_name = os.path.splitext(video_file)[0]
        output_folder = os.path.join(PROCESSED_DIR, video_name)
        os.makedirs(output_folder, exist_ok=True)

        cap = cv2.VideoCapture(video_path)
        frame_count = 0
        saved_count = 0
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break
            if frame_count % FRAME_INTERVAL == 0:
                frame = cv2.resize(frame, FRAME_SIZE)
                frame = frame.astype(np.float32) / 255.0  # Normalize
                frame_save_path = os.path.join(output_folder, f"frame_{saved_count:04d}.npy")
                np.save(frame_save_path, frame)
                saved_count += 1
            frame_count += 1
        cap.release()
        print(f"Processed {video_file}: {saved_count} frames saved.")

if __name__ == "__main__":
    process_videos()