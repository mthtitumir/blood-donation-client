"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/register`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: "no-store",
        }
    );

    const userData = await res.json();
    return userData;
};