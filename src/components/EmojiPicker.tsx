import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiFromCurrentRender, queueRenderWithNewEmoji] = useState("");
  const [storedEmojifromPreviousRender, queueRenderWithNewStoredEmoji] =
    useState<string[]>([]);

  const handleClockEmoji = () => {
    queueRenderWithNewEmoji("⏰");
  };

  const handleBedEmoji = () => {
    queueRenderWithNewEmoji("🛌");
  };

  const handlePlateEmoji = () => {
    queueRenderWithNewEmoji("🍽️");
  };

  const handleEggEmoji = () => {
    queueRenderWithNewEmoji("🍳");
  };

  const handleFaceEmoji = () => {
    queueRenderWithNewEmoji("😋");
  };

  const handleStoreCurrentEmoji = () => {
    if (storedEmojifromPreviousRender.length < 5) {
      queueRenderWithNewStoredEmoji([
        ...storedEmojifromPreviousRender,
        emojiFromCurrentRender,
      ]);
    } else {
      queueRenderWithNewStoredEmoji([
        ...storedEmojifromPreviousRender.slice(1, 6),
        emojiFromCurrentRender,
      ]);
      console.log("Theres more than 5 emojis");
    }
  };

  const handleLogMessage = () => {
    if (storedEmojifromPreviousRender.length <= 5) {
      console.log("5 or less than 5 emojis");
    } else {
      console.log("there are more than 5 emojis");
    }
  };

  return (
    <>
      <h1>Emoji Picker</h1>
      <p>
        Your stored emojis:
        {storedEmojifromPreviousRender.map(
          (emoji: string, index): JSX.Element => {
            return <li key={index}>{emoji}</li>;
          }
        )}
      </p>

      <p>Emoji: {emojiFromCurrentRender}</p>
      <button onClick={handleClockEmoji}>⏰</button>
      <button onClick={handleBedEmoji}>🛌</button>
      <button onClick={handlePlateEmoji}>🍽️</button>
      <button onClick={handleEggEmoji}>🍳</button>
      <button onClick={handleFaceEmoji}>😋</button>
      <hr />
      <button onClick={handleStoreCurrentEmoji}>Store Emoji</button>
      <button onClick={handleLogMessage}>Log message</button>
    </>
  );
}
