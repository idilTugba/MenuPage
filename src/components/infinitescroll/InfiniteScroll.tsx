import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { menuListTypo } from "../../data/menu";
import { throttle } from "lodash";
import useDebounce from "../../hooks/Debounce";

interface InfiniteScrollTypo {
  data: menuListTypo[];
  children: (item: menuListTypo) => ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollTypo> = ({ children, data }) => {
  const [itemsToShow, setItemsToShow] = useState<menuListTypo[] | []>([]);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const loadLastItems = throttle(
    () => {
      setLoading(true);
      setTimeout(() => {
        const newIndex = lastIndex + 4;
        const newContent = data.slice(lastIndex, newIndex);
        setItemsToShow((prevItems) => [...prevItems, ...newContent]);
        setLastIndex(newIndex);
        setLoading(false);
      }, 1200);
    },
    2000,
    { trailing: false }
  );

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
      <div className="grid-2col">
        {memoziedItemToShow.map((item) => (
          <React.Fragment key={item.id}>{children(item)}</React.Fragment>
        ))}
      </div>
      {loading && (
        <div
          style={{
            backgroundColor: "#ffdd99",
            fontWeight: 500,
            color: "black",
            fontStyle: "bold",
            fontSize: "18px",
            marginTop: "20px",
            marginBottom: "20px",
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
