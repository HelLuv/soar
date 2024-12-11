import React, { FC, useState } from "react";
import SearchIcon from "@/assets/icons/outlined/search.svg?react";
import { Input } from "@/components/ui/input";

type Props = {
  onSubmit?: (value: string) => void;
};

export const SearchBar: FC<Props> = ({ onSubmit }) => {
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
    <div className="relative">
      <SearchIcon className="absolute left-6 top-4" />
      <Input
        onKeyDown={handleKeyDown}
        value={searchValue}
        onChange={handleSearch}
        className="w-[255px] h-[50px] pl-16 rounded-[40px] bg-[#F5F7FA] placeholder:!text-[#8BA3CB] text-15"
        placeholder="Search for something"
      />
    </div>
  );
};
