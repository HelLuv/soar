import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  extra?: ReactNode;
};

export const Section: FC<Props> = ({ children, extra, title }) => {
  return (
    <section className="flex flex-col gap-5 w-fit">
      <div className="flex justify-between items-center">
        <h2 className="text-22 font-semibold text-blue-800">{title}</h2>
        {extra}
      </div>

      {children}
    </section>
  );
};
