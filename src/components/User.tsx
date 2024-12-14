import { FC, memo, useCallback } from "react";
import { cn } from "@/lib/utils";
import { User as UserType } from "@/types";

type Props = {
  user: UserType;
  active?: boolean;
  clickable?: boolean;
  onClick?: (user: UserType) => void;
};

export const User: FC<Props> = memo(({ user, active, onClick, clickable = true }) => {
  const { imageUrl, description, fullName } = user;

  const handleOnClick = useCallback(() => {
    if (clickable && onClick) {
      onClick(user);
    }
  }, [clickable, onClick, user]);

  return (
    <div
      className={cn("flex flex-col items-center w-fit min-w-[90px]", {
        "cursor-pointer": clickable,
      })}
      onClick={handleOnClick}
    >
      <div
        className={cn("size-[70px] rounded-full border-2 transition-all max-md:size-[50px]", {
          "border-[#718EBF]": active,
        })}
      >
        <img src={imageUrl} alt={`${fullName} avatar`} />
      </div>

      <h3 className={cn("text-16 text-[#232323] transition-all max-md:text-12", { "font-bold": active })}>
        {fullName}
      </h3>
      <span className={cn("text-15 text-[#718EBF] transition-all max-md:text-12", { "font-bold": active })}>
        {description}
      </span>
    </div>
  );
});
