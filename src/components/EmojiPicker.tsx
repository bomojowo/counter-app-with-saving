import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  
  const [storedEmojifromPreviousRender, queueRenderWithNewStoredEmoji] =
    useState<string[]>([]);

  const handleEmojiChange = (emoji: string) => {
    queueRenderWithNewStoredEmoji([...storedEmojifromPreviousRender, emoji])
  }

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


      <p>James Emoji: {storedEmojifromPreviousRender[storedEmojifromPreviousRender.length - 1]}</p>

      <button onClick={() => handleEmojiChange("⏰")}>⏰</button>
      <button onClick={() => handleEmojiChange("🛌")}>🛌</button>
      <button onClick={() => handleEmojiChange("🍽️")}>🍽️</button>
      <button onClick={() => handleEmojiChange("🍳")}>🍳</button>
      <button onClick={() => handleEmojiChange("😋")}>😋</button>
   
    </>
  );
}
