import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers/Providers";
import { ChildrenProps } from "@/types";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const metadata: Metadata = {
  title: "Blood & Connect",
  description: "Donate blood to save life",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>
          <AppRouterCacheProvider>
            <Toaster />
            {children}
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
