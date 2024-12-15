import { EditProfileForm } from "@/modules/settings/EditProfileForm";
import { AvatarImagePicker } from "@/components/AvatarImagePicker";
import { CURRENT_USER } from "@/mock/users";

export const EditProfile = () => {
  return (
    <section className="edit-profile">
      <AvatarImagePicker imageUrl={CURRENT_USER.imageUrl}/>

      <EditProfileForm userData={CURRENT_USER} />
    </section>
  );
};
