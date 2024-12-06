import { PropsWithChildren } from "react";
import Nav from "./nav";

export const Page = (props: PropsWithChildren) => {
  return (
    <main className="p-4">
      <div className="flex justify-end mb-4">
        <Nav />
      </div>
      <section>{props.children}</section>
    </main>
  );
};
