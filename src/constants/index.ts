export const bloodGroups = [
    "A_POSITIVE",
    "A_NEGATIVE",
    "B_POSITIVE",
    "B_NEGATIVE",
    "AB_POSITIVE",
    "AB_NEGATIVE",
    "O_POSITIVE",
    "O_NEGATIVE"
];

export const bloodTypes = {
    A_POSITIVE: "A+",
    A_NEGATIVE: "A-",
    B_POSITIVE: "B+",
    B_NEGATIVE: "B-",
    AB_POSITIVE: "AB+",
    AB_NEGATIVE: "AB-",
    O_POSITIVE: "O+",
    O_NEGATIVE: "O-"
} as const;



export const availabilities = ["true", "false"];

export const authKey = "accessToken";

export const Role = {
    SUPER_ADMIN: "SUPER_ADMIN",
    ADMIN: "ADMIN",
    MODERATOR: "MODERATOR",
    USER: "USER"
}