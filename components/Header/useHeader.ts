import { RefObject, useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";

const MIN_SCROLL_HIDE = 15;
const THROTTLE_VALUE = 50;

const useHeader = () => {
  const prevScrollPosition = useRef<number>(0);
  const [show, setShow] = useState<boolean>(true);
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );

      if (scrollTop < 0) {
        scrollTop = 0;
      } else if (scrollTop > maxScroll) {
        scrollTop = maxScroll;
      }

      setIsOnTop(scrollTop <= 0);

      const isScrollingDown = prevScrollPosition.current < scrollTop;
      const isHidden = isScrollingDown && scrollTop > MIN_SCROLL_HIDE;

      setShow(!isHidden);

      prevScrollPosition.current = scrollTop;
    };

    const throttledOnScroll = throttle(onScroll, THROTTLE_VALUE);
    window.addEventListener("scroll", throttledOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledOnScroll);
  }, []);

  return {
    show,
    isOnTop
  };
};

export default useHeader;
