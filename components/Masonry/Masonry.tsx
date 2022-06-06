import { memo, useMemo } from "react";

const divideArray = (array: [], length: number) => {
  const newArray = [...array];
  const divideRes = Math.floor(newArray.length / length);
  let results = [];

  for (let i = 0; i < length; i++) {
    results.push(newArray.splice(0, divideRes));
  }

  for (let i = 0; i < newArray.length; i++) {
    results[i].push(newArray[i]);
  }

  results = results.filter((itm) => itm.length);

  return results;
};

const masonryContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: '10px'
};

const Masonry = ({ dataArray, columnCount, ChildElement }: any) => {
  const results = useMemo(() => {
    return divideArray(dataArray, columnCount);
  }, [dataArray, columnCount]);

  return (
    <div style={masonryContainerStyle}>
      {results?.map((itm, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {itm?.map((elm: any, i) => (
            <ChildElement value={{...elm, index: i }} key={elm?.id ?? i} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(Masonry);
