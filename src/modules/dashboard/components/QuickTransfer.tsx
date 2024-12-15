import { FC, useState } from "react";
import { Section } from "@/shared/ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { User as UserType } from "@/shared/types/user.types";
import { User } from "@/shared/components";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import SendIcon from "@/assets/icons/outlined/send.svg?react";

type Props = {
  users: UserType[];
};

export const QuickTransfer: FC<Props> = ({ users = [] }) => {
  const [selectedUser, setSelectedUser] = useState<UserType>(users[0]);

  const handleUserClick = (user: UserType) => {
    setSelectedUser(user);
  };

  return (
    <Section title="Quick Transfer" className="max-md:w-full">
      <div className="quick-transfer">
        <Carousel className="w-full px-8 flex" opts={{ loop: true }}>
          <CarouselContent>
            {users.map((user) => (
              <CarouselItem className="basis-1/3 max-md:basis-1/4 max-sm:basis-1/3" key={user.id}>
                <User user={user} active={selectedUser.id === user.id} onClick={handleUserClick} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 top-1/3 size-[40px] max-md:-left-0 max-sm:-left-2 max-md:top-1/2" title="Previous Users" />
          <CarouselNext className="-right-4 top-1/3 size-[40px] max-md:right-0 max-sm:-right-2  max-md:top-1/2" title="Next Users" />
        </Carousel>

        <div className="flex items-center gap-7 text-[16px] justify-end relative max-sm:gap-4">
          <span className="text-nowrap text-[#718EBF] max-sm:text-12">Write Amount</span>
          <Input
            className="h-[50px] rounded-[50px] bg-[#EDF1F7] pl-[20px]
           pr-[145px] py-[15px] text-[#718EBF] max-w-[265px] max-sm:pr-[110px] max-sm:h-10 max-sm:text-12"
          />
          <Button
            className="w-[125px] h-[50px] rounded-[50px] absolute z-10 right-0
            bg-[#232323] hover:bg-black text-white max-sm:h-10  max-sm:w-[100px]"
          >
            <span>Send</span> <SendIcon className="!size-6 ml-1" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
