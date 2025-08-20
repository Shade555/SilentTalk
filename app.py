
import cv2
import numpy as np
import tensorflow as tf

# Load trained ASL model
model = tf.keras.models.load_model("asl_cnn_model.keras")

# Set the input size as per your model
IMG_SIZE = 64  # Change if your model expects a different size

# Class labels (update if your model uses different labels)
CLASS_NAMES = [chr(i) for i in range(ord('A'), ord('Z')+1)] + ["del", "nothing", "space"]

def preprocess(frame):
    """Resize and normalize frame for model."""
    img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img.astype("float32") / 255.0
    img = np.expand_dims(img, axis=0)
    return img

def main():
    cap = cv2.VideoCapture(0)
    print("Starting camera. Press 'q' to quit.")
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame.")
            break
        frame = cv2.flip(frame, 1)
        img = preprocess(frame)
        preds = model.predict(img, verbose=0)
        pred_class = CLASS_NAMES[np.argmax(preds)]
        confidence = float(np.max(preds))
        # Print prediction in terminal
        print(f"Prediction: {pred_class} ({confidence:.2f})")
        # Overlay prediction on video
        cv2.putText(frame, f"{pred_class} ({confidence:.2f})", (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        cv2.imshow("ASL Recognition", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
