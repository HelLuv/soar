import React, { FC, useState } from "react";
import SearchIcon from "@/assets/icons/outlined/search.svg?react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  onSubmit?: (value: string) => void;
  className?: string;
};

export const SearchBar: FC<Props> = ({ onSubmit, className }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    console.log(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = (event.target as HTMLInputElement).value;
      onSubmit?.(value);
      console.log(value);
    }
  };

  return (
    <div className={cn("search-bar", className)}>
      <SearchIcon className="absolute left-6 top-4" />
      <Input
        onKeyDown={handleKeyDown}
        value={searchValue}
        onChange={handleSearch}
        className="search-bar-input"
        placeholder="Search for something"
      />
    </div>
  );
};
