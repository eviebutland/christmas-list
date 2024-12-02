interface Props {
  children: React.ReactNode;
}

export const MasonaryGrid = (props: Props) => {
  return <section className="masonry">{props.children}</section>;
};
