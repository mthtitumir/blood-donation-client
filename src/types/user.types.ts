export type TUser = {
    id: string;
    email: string;
    role: Role;
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

enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    USER = "USER"
}

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