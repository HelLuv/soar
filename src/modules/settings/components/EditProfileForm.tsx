import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { FormInput, FormDatePicker } from "@/shared/components";
import { User } from "@/shared/types/user.types";
import { profileFormSchema, ProfileFormSchema } from "../schemas/profileFormSchema";

type Props = {
  userData: User;
};

export const EditProfileForm: FC<Props> = ({ userData }) => {
  const form = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: userData,
  });

  function onSubmit(values: ProfileFormSchema) {
    // TODO: make a request to save new profile settings
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={() => form.reset()}
        className="edit-profile-form"
      >
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="fullName"
          label="Name"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="username"
          label="Username"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="email"
          label="Email"
          type="email"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="password"
          label="Password"
          type="password"
          className="edit-profile-form_item"
          required
        />
        <FormDatePicker<ProfileFormSchema>
          control={form.control}
          name="dateOfBirth"
          label="Date of Birth"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="presentAddress"
          label="Present Address"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="permanentAddress"
          label="Permanent Address"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="city"
          label="City"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="postalCode"
          label="Postal Code"
          className="edit-profile-form_item"
          required
        />
        <FormInput<ProfileFormSchema>
          control={form.control}
          name="country"
          label="Country"
          className="edit-profile-form_item"
          required
        />

        <div className="flex-1 flex justify-end mt-5 gap-4 flex-wrap-reverse">
          <Button className="w-[190px] h-[50px] rounded-2xl hover:bg-gray-100 text-18 max-sm:w-full" type="reset">
            Reset
          </Button>
          <Button
            className="w-[190px] h-[50px] rounded-2xl bg-[#232323] hover:bg-black text-white text-[18px] max-sm:w-full"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};
