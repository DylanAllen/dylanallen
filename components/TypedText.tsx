import { MutableRefObject, useRef, useEffect, useState } from "react";

const TypedText: React.FunctionComponent<{text: string, className: string}> = ({ text, className }) => {
  
  let textArr = text.split(''); 

  function useInterval(callback: () => void , delay: number | null) {
    const savedCallback: MutableRefObject<any | null> = useRef<any | null>(null);
    
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        if (savedCallback) {
          savedCallback.current();
        }
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  const [content, setContent] = useState('');
  const [count, setCount] = useState(0)
  const [interval, updateInterval] = useState<number | null>(50);

  useInterval(() => {
    if (count >= textArr.length - 1) {
      updateInterval(null);
    } else {
      updateInterval(20 + (Math.random() * 200) );
    }
    setContent(content + textArr[count])
    setCount(count + 1);
  }, interval);


  return (
    <span className={className}>{content}</span>
  )
}

export default TypedText;