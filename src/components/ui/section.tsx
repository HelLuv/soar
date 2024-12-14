import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  title?: string;
  extra?: ReactNode;
  className?: string;
};

export const Section: FC<Props> = ({ children, extra, title, className }) => {
  return (
    <section className={cn("flex flex-col gap-5 w-fit", className)}>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-22 font-semibold text-blue-800 max-md:text-16">{title}</h2>
        {extra}
      </div>

      {children}
    </section>
  );
};
