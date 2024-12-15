import { AvatarImagePicker } from "@/shared/components";
import { EditProfileForm } from "./EditProfileForm";
import { useAuthStore } from "@/shared/stores";

export const EditProfile = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <section className="edit-profile">
      <AvatarImagePicker imageUrl={user.imageUrl} />

      <EditProfileForm userData={user} />
    </section>
  );
};
