import { EditProfileForm } from "@/modules/settings/EditProfileForm";
import { CURRENT_USER } from "@/mock/users";

export const EditProfile = () => {
  return (
    <section className="p-[30px] w-full flex">
      <span className="">here is image</span>

      <EditProfileForm userData={CURRENT_USER} />
    </section>
  );
};
