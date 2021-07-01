import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  
  const [storedEmojifromPreviousRender, queueRenderWithNewStoredEmoji] =
    useState<string[]>([]);

  const handleEmojiChange = (emoji: string) => {
    //queueRenderWithNewStoredEmoji([...storedEmojifromPreviousRender, emoji]) //returns function that passes the argument of the storedEmoji... and the new current emoji 
    if (storedEmojifromPreviousRender.length < 5) {
        queueRenderWithNewStoredEmoji([
          ...storedEmojifromPreviousRender,
          emoji,
        ]);
      } else {
        queueRenderWithNewStoredEmoji([
          ...storedEmojifromPreviousRender.slice(1, 6),
          emoji,
        ]);
        console.log("Theres more than 5 emojis");
      }
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

      {/*uses storedEmojiFromPreviousRender variable and accesses the last tored emoji through index[(storedEmoji....).length - 1] */}
      <p>Current Emoji: {storedEmojifromPreviousRender[storedEmojifromPreviousRender.length - 1]}</p>
      {/*used an anonymous arrow function to pass through string; removes duplication of writing function to print diff emoji each time */}
      <button onClick={() => handleEmojiChange("⏰")}>⏰</button>
      <button onClick={() => handleEmojiChange("🛌")}>🛌</button>
      <button onClick={() => handleEmojiChange("🍽️")}>🍽️</button>
      <button onClick={() => handleEmojiChange("🍳")}>🍳</button>
      <button onClick={() => handleEmojiChange("😋")}>😋</button>
   
    </>
  );
}
