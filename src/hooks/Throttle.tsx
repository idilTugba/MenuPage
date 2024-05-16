import React, { useEffect, useRef, useState } from "react";

function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastRan.current >= limit) {
          setThrottledValue(value);
          lastRan.current = Date.now();
        }
      },
      limit - (Date.now() - lastRan.current)
    );
    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);
  return throttledValue;
}

export default useThrottle;
