// src/utils/use-copy-button.ts
import {
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";
function useCopyButton(onCopy) {
  const [checked, setChecked] = useState(false);
  const timeoutRef = useRef(null);
  const onClick = useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setChecked(false);
    }, 1500);
    onCopy();
    setChecked(true);
  }, [onCopy]);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return [checked, onClick];
}

export {
  useCopyButton
};
