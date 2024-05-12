import {
  ChangeEventHandler,
  FC,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { TextareaStyle } from './code.styles';

const VERTICAL_PADDING = 2;
const MIN_HEIGHT = 32;

interface CodeProps {
  code: string;
}

export const Code: FC<CodeProps> = ({ code }) => {
  const [value, setValue] = useState('');
  const [textareaHeight, setTextareaHeight] = useState(MIN_HEIGHT);
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    setValue(code);
  }, [code]);

  useLayoutEffect(() => {
    const field = ref.current;

    if (!field) {
      return;
    }
    const scrollHeight = field.scrollHeight;
    let height = scrollHeight + VERTICAL_PADDING * 2 - 2;

    setTextareaHeight(height);
  }, [value]);

  return (
    <TextareaStyle ref={ref} style={{ height: textareaHeight }} value={code} />
  );
};
