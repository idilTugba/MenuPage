import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { menuListTypo } from "../../data/menu";
import useThrottle from "../../hooks/Throttle";
import useDebounce from "../../hooks/Debounce";

interface InfiniteScrollTypo {
  data: menuListTypo[];
  children: (item: menuListTypo) => ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollTypo> = ({ children, data }) => {
  const [itemsToShow, setItemsToShow] = useState<menuListTypo[] | []>([]);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const loadLastItems = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const newIndex = lastIndex + 4;
      const newContent = data.slice(lastIndex, newIndex);
      setItemsToShow((prevItems) => [...prevItems, ...newContent]);
      setLastIndex(newIndex);
      setLoading(false);
    }, 1200);
  }, [lastIndex, itemsToShow]);

  const deboundeLoadItems = useDebounce(loadLastItems, 200);

  useEffect(() => {
    deboundeLoadItems();
  }, []);

  const handleScroll = useCallback(() => {
    if (lastIndex >= data.length || loading) return;
    console.log("handlescroll", lastIndex, itemsToShow);

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
      loadLastItems();
  }, [lastIndex, loading, data.length, itemsToShow]);

  // const throttleHandleScroll = useThrottle(handleScroll, 2000);
  const debounceHandleScroll = useDebounce(handleScroll, 200);

  useEffect(() => {
    window.addEventListener("scroll", debounceHandleScroll);
    return () => window.removeEventListener("scroll", debounceHandleScroll);
  }, [debounceHandleScroll]);

  const memoziedItemToShow = useMemo(() => itemsToShow, [itemsToShow]);

  return (
    <div>
      {memoziedItemToShow.map((item) => (
        <React.Fragment key={item.id}>{children(item)}</React.Fragment>
      ))}
      {loading && (
        <div
          style={{
            backgroundColor: "#0e968b",
            fontWeight: 500,
            color: "white",
            fontSize: "18px",
            padding: "20px",
          }}
        >
          ... İçerikler Yükleniyor
        </div>
      )}
    </div>
  );
};

export default React.memo(InfiniteScroll);
