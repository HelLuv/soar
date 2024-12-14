import { Skeleton } from "@/components/ui/skeleton";
import { FC, Fragment } from "react";
import { cn } from "@/lib/utils";

type Props = {
  hasLines?: boolean;
  lines?: number;
  hasCards?: boolean;
  cards?: number;
  className?: string;
};

export const PageLoading: FC<Props> = ({
  className,
  hasCards = true,
  cards = 6,
  hasLines = true,
  lines = 2,
}) => {
  return (
    <div className={cn("flex flex-col space-y-8", className)}>
      <div className="space-y-2">
        {hasLines &&
          Array.from({ length: lines / 2 }).map((_line, index) => (
            <Fragment key={index}>
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-4/5" />
            </Fragment>
          ))}
      </div>

      {/* Card Skeletons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {hasCards &&
          Array.from({ length: cards }).map((_, index) => (
            <Skeleton key={index} className="h-52 w-full" />
          ))}
      </div>
    </div>
  );
};
