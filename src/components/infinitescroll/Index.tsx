import React, { ReactNode, useState, useEffect } from "react";
import { menuListTypo } from "./../../data/menu";

interface InfiniteScrollTypo {
  data: menuListTypo[];
  children: (item: menuListTypo) => ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollTypo> = ({ children, data }) => {
  const [itemsToShow, setItemsToShow] = useState<menuListTypo[] | []>(
    data.slice(0, 4)
  );
  const [lastIndex, setLastIndex] = useState<number>(4);
  const [loading, setLoading] = useState<boolean>(false);

  const loadLastItems = () => {
    setLoading(true);
    setTimeout(() => {
      const newIndex = lastIndex + 4;
      const newContent = data.slice(lastIndex, newIndex);
      setItemsToShow((itemsToShow) => [...itemsToShow, ...newContent]);
      setLastIndex(newIndex);
      setLoading(false);
    }, 1200);
  };

  const handleScroll = () => {
    if (lastIndex >= data.length || loading) return;
    console.log("handlescroll", lastIndex, itemsToShow);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
      loadLastItems();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {itemsToShow.map((item) => (
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

export default InfiniteScroll;
