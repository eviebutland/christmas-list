interface Props<T> {
  item: T;
}
export function MasonaryItem<T>(props: Props<T>) {
  return (
    <figure className="item" key={props.item?.id}>
      <img
        className=" w-auto h-auto"
        src={props.item.urls?.full}
        alt={String(props.item?.alt_description)}
      />
      {/* {props.item.color} */}
    </figure>
  );
}
