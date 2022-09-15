import { UseModalReturn } from '@bento-editor/core';
import type { Data } from 'emoji-mart';
import React, { useState, useCallback, useEffect } from 'react';
import { EmojiPicker, Emoji } from '..';

type Props = {
  insertText: (emojiNative: string) => void;
  onRequestClose: UseModalReturn['close'];
  children?: React.ReactNode;
};

const fetchEmojiData = async (): Promise<Data> => {
  const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

  return response.json();
};

export const EmojiPickerContainer: React.FC<Props> = ({
  insertText,
  onRequestClose,
  children,
}) => {
  const [emojiData, setEmojiData] = useState<Data | null>(null);

  useEffect(() => {
    fetchEmojiData().then((res) => {
      setEmojiData(res);
    });
  }, []);

  const handleEmojiSelect = useCallback(
    (emoji: Emoji) => {
      insertText(emoji.native);
    },
    [insertText]
  );

  const handleClickOutside = useCallback(() => {
    onRequestClose();
  }, [onRequestClose]);

  return (
    <div>
      {children}
      {emojiData !== null && (
        <EmojiPicker
          onEmojiSelect={handleEmojiSelect}
          data={emojiData}
          onClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
};
