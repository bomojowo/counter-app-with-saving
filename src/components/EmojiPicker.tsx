import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  
  const [emojiArray, setEmojiArray] =
    useState<string[]>([]);

  const handleEmojiChange = (emoji: string) => {
    //setEmojiArray([...emojiArray, emoji]) //returns function that passes the argument of the storedEmoji... and the new current emoji 
    if (emojiArray.length < 5) {
        setEmojiArray([
          ...emojiArray,
          emoji,
        ]);
      } else {
        setEmojiArray([
          ...emojiArray.slice(1, 6),
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
        {emojiArray.map(
          (emoji: string, index): JSX.Element => {
            return <li key={index}>{emoji}</li>;
          }
        )}
      </p>

      {/*uses emojiArray variable and accesses the last tored emoji through index[(storedEmoji....).length - 1] */}
      <p>Current Emoji: {emojiArray[emojiArray.length - 1]}</p>
      {/*used an anonymous arrow function to pass through string; removes duplication of writing function to print diff emoji each time */}
      <button onClick={() => handleEmojiChange("⏰")}>⏰</button>
      <button onClick={() => handleEmojiChange("🛌")}>🛌</button>
      <button onClick={() => handleEmojiChange("🍽️")}>🍽️</button>
      <button onClick={() => handleEmojiChange("🍳")}>🍳</button>
      <button onClick={() => handleEmojiChange("😋")}>😋</button>
   
    </>
  );
}
