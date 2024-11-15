type TGridListProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

const GridList = <T,>({ data, renderItem }: TGridListProps<T>) => {
  return <>{data && data.map((item) => renderItem(item))}</>;
};

export default GridList;
