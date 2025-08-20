import os
import csv

PROCESSED_DIR = "data/processed"
LABELS_CSV = os.path.join(PROCESSED_DIR, "labels.csv")

def main():
    # Auto-detect labels from folder names
    # Assumes each folder in data/processed is named after its label/class
    label_rows = []
    for folder in os.listdir(PROCESSED_DIR):
        folder_path = os.path.join(PROCESSED_DIR, folder)
        if os.path.isdir(folder_path) and folder != "archieve":
            label = folder  # Folder name is the label
            label_rows.append([folder, label])

    # Write to CSV
    with open(LABELS_CSV, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["video_name", "label"])
        writer.writerows(label_rows)
    print(f"labels.csv created at {LABELS_CSV} with auto-detected labels.")

if __name__ == "__main__":
    main()
