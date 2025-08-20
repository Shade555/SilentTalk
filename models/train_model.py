import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from data_loader import ASLVideoDataset
from cnn_rnn_model import CNNRNNModel

# Config
PROCESSED_DIR = "data/processed"
LABELS_CSV = "data/processed/labels.csv"
SEQUENCE_LENGTH = 30
BATCH_SIZE = 4
NUM_CLASSES = 8693  # Update based on your dataset
EPOCHS = 10
LEARNING_RATE = 1e-3

# Dataset and DataLoader
train_dataset = ASLVideoDataset(PROCESSED_DIR, LABELS_CSV, sequence_length=SEQUENCE_LENGTH)
train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, shuffle=True)

# Model
model = CNNRNNModel(num_classes=NUM_CLASSES)
model = model.cuda() if torch.cuda.is_available() else model

# Loss and Optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=LEARNING_RATE)

# Training Loop
for epoch in range(EPOCHS):
	model.train()
	running_loss = 0.0
	for batch_idx, (frames, labels) in enumerate(train_loader):
		frames = frames.cuda() if torch.cuda.is_available() else frames
		labels = labels.cuda() if torch.cuda.is_available() else labels
		optimizer.zero_grad()
		outputs = model(frames)
		loss = criterion(outputs, labels)
		loss.backward()
		optimizer.step()
		running_loss += loss.item()
		if batch_idx % 10 == 0:
			print(f"Epoch [{epoch+1}/{EPOCHS}], Batch [{batch_idx}], Loss: {loss.item():.4f}")
	print(f"Epoch [{epoch+1}/{EPOCHS}] finished. Avg Loss: {running_loss/(batch_idx+1):.4f}")

# Save model
torch.save(model.state_dict(), "models/saved/cnn_rnn_model.pth")
print("Model saved to models/saved/cnn_rnn_model.pth")
