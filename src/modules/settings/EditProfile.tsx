import { EditProfileForm } from "@/modules/settings/EditProfileForm";
import { AvatarImagePicker } from "@/components/AvatarImagePicker";
import { CURRENT_USER } from "@/mock/users";

export const EditProfile = () => {
  return (
    <section className="p-[30px] w-full flex gap-[60px]">
      <AvatarImagePicker imageUrl={CURRENT_USER.imageUrl}/>

      <EditProfileForm userData={CURRENT_USER} />
    </section>
  );
};
