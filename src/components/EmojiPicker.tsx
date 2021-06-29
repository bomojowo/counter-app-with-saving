import { useState } from "react";

export default function EmojiPicker(): JSX.Element{
    const[emojiFromCurrentRender, queueRenderWithNewEmoji] = useState('');
    const [storedEmojifromPreviousRender, queueRenderWithOldEmoji] = useState<string[]>([])

    const handleClockEmoji = () => {
        queueRenderWithNewEmoji('⏰')
    };

    const handleBedEmoji = () => {
        queueRenderWithNewEmoji('🛌')
    }

    const handlePlateEmoji = () => {
        queueRenderWithNewEmoji('🍽️')
    };

    const handleEggEmoji = () => {
        queueRenderWithNewEmoji('🍳')
    };

    const handleFaceEmoji = () => {
        queueRenderWithNewEmoji('😋')
    };

    const handleStoreCurrentEmoji = () => {
        queueRenderWithOldEmoji([
          ...storedEmojifromPreviousRender,  
            emojiFromCurrentRender,
        ])
    }
    return(
        <>
        <h1>Emoji Picker</h1>
        <p>Your stored emojia: {storedEmojifromPreviousRender.join(", ")}</p>
        <p>Emoji: {emojiFromCurrentRender}</p>
        <button onClick={handleClockEmoji}>⏰</button>
        <button onClick={handleBedEmoji}>🛌</button>
        <button onClick={handlePlateEmoji}>🍽️</button>
        <button onClick={handleEggEmoji}>🍳</button>
        <button onClick={handleFaceEmoji}>😋</button>
        <hr />
        <button onClick={handleStoreCurrentEmoji}>Store Emoji</button>
        </>
    )
}