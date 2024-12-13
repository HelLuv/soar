import { FC, useState } from "react";
import { Section } from "@/components/ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { User as UserType } from "@/types";
import { User } from "@/components/User";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
    <Section title="Quick Transfer">
      <div className="p-8 bg-white rounded-[25px] w-[440px] h-[270px] flex flex-col justify-between">
        <Carousel className="w-full px-8 flex" opts={{ loop: true }}>
          <CarouselContent>
            {users.map((user) => (
              <CarouselItem className="md:basis-1/3 lg:basis-1/3" key={user.id}>
                <User user={user} active={selectedUser.id === user.id} onClick={handleUserClick} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 top-1/4 size-[40px]" title="Previous Users" />
          <CarouselNext className="-right-4 top-1/4 size-[40px]" title="Next Users" />
        </Carousel>

        <div className="flex items-center gap-7 text-[16px] relative">
          <span className="text-nowrap text-[#718EBF]">Write Amount</span>
          <Input
            className="h-[50px] rounded-[50px] bg-[#EDF1F7] pl-[20px]
           pr-[145px] py-[15px] text-[#718EBF]"
          />
          <Button
            className="w-[125px] h-[50px] rounded-[50px] absolute z-10 right-0
            bg-[#232323]  hover:bg-black text-white"
          >
            <span>Send</span> <SendIcon className="!size-6 ml-1" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
