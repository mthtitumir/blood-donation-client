import { Role } from "@/constants";
import { IconType } from "react-icons/lib";
// import { SvgIconTypeMap } from "@mui/material";
// import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TUser = {
    id: string;
    email: string;
    role: UserRole;
}

export type TUserProfile = {
    id: string;
    userId: string;
    name: string;
    bio: string;
    age: number;
    bloodType: BloodGroup;
    location: string;
    availability: boolean;
    lastDonationDate: string;
    createdAt: Date;
    updatedAt: Date;
    user: TUser;
}

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: IconType;
    child?: DrawerItem[];
  }

export type UserRole = keyof typeof Role;

enum BloodGroup {
    A_POSITIVE = "A_POSITIVE",
    A_NEGATIVE = "A_NEGATIVE",
    B_POSITIVE = "B_POSITIVE",
    B_NEGATIVE = "B_NEGATIVE",
    AB_POSITIVE = "AB_POSITIVE",
    AB_NEGATIVE = "AB_NEGATIVE",
    O_POSITIVE = "O_POSITIVE",
    O_NEGATIVE = "O_NEGATIVE"
}