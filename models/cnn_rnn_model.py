import torch
import torch.nn as nn
import torchvision.models as models

class CNNRNNModel(nn.Module):
    def __init__(self, num_classes, cnn_out_dim=128, rnn_hidden_size=256, rnn_layers=1):
        super(CNNRNNModel, self).__init__()
        # Use a simple CNN (or pretrained backbone)
        self.cnn = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, stride=1, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(32, 64, kernel_size=3, stride=1, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(64, cnn_out_dim, kernel_size=3, stride=1, padding=1),
            nn.ReLU(),
            nn.AdaptiveAvgPool2d((1, 1))
        )
        self.rnn = nn.LSTM(
            input_size=cnn_out_dim,
            hidden_size=rnn_hidden_size,
            num_layers=rnn_layers,
            batch_first=True
        )
        self.fc = nn.Linear(rnn_hidden_size, num_classes)

    def forward(self, x):
        # x: (batch, seq_len, channels, height, width)
        batch_size, seq_len, C, H, W = x.size()
        # Flatten sequence for CNN
        x = x.view(batch_size * seq_len, C, H, W)
        cnn_features = self.cnn(x)  # (batch*seq_len, cnn_out_dim, 1, 1)
        cnn_features = cnn_features.view(batch_size, seq_len, -1)  # (batch, seq_len, cnn_out_dim)
        rnn_out, _ = self.rnn(cnn_features)  # (batch, seq_len, rnn_hidden_size)
        # Use last output of RNN
        out = rnn_out[:, -1, :]  # (batch, rnn_hidden_size)
        logits = self.fc(out)    # (batch, num_classes)
        return logits

# Example usage:
if __name__ == "__main__":
    model = CNNRNNModel(num_classes=10)
    dummy_input = torch.randn(4, 30, 3, 224, 224)  # (batch, seq_len, C, H, W)
    output = model(dummy_input)
    print(output.shape)  # Should be (4, 10)
