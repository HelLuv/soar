import { AvatarImagePicker } from "@/shared/components";
import { CURRENT_USER } from "@/shared/mock/users";
import { EditProfileForm } from "./EditProfileForm";

export const EditProfile = () => {
  return (
    <section className="edit-profile">
      <AvatarImagePicker imageUrl={CURRENT_USER.imageUrl}/>

      <EditProfileForm userData={CURRENT_USER} />
    </section>
  );
};
