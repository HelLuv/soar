import { EditProfile } from "./EditProfile";

export const SETTINGS_TABS = [
  {
    key: "edit profile",
    label: "Edit Profile",
    content: <EditProfile />,
  },
  {
    key: "preferences",
    label: "Preferences",
    content: <div>Preferences</div>,
  },
  {
    key: "security",
    label: "Security",
    content: <div>Security</div>,
  },
];
