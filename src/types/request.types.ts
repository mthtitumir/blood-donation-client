import { TUserProfile } from "./user.types"

export type TRequest = {
    id: string
    donorId: any
    requesterId: string
    requester: {
        userProfile: TUserProfile
    }
    bloodType: "A_POSITIVE" | "A_NEGATIVE" | "B_POSITIVE" | "B_NEGATIVE" | "AB_POSITIVE" | "AB_NEGATIVE" | "O_POSITIVE" | "O_NEGATIVE"
    quantity: number
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus: string
    createdAt: string
    updatedAt: string
    donor: any
};
