"use server";

import { authKey } from "@/constants";
import { getFromLocalStorage } from "@/utils/LocalStorage";
import { FieldValues } from "react-hook-form";

export const bloodRequest = async (data: FieldValues) => {
    const token = getFromLocalStorage(authKey);
    console.log(token);
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/request`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${token}`,
            },
            body: JSON.stringify(data),
            credentials: "include",
            cache: "no-store",
        }
    );

    const userData = await res.json();
    return userData;
};