import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./colors/index.css";
import { SidebarProvider, SidebarTrigger } from "./chesty/components/sidebar";
import { AppSidebar } from "./chesty/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "mx-auto w-full bg-background border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x flex justify-center items-center relative"
        }
      >
        <SidebarProvider>
          <AppSidebar />
          <main className=" relative flex min-h-svh flex-1 flex-col peer-data-[variant=floating]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=floating]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=floating]:ml-2 md:peer-data-[variant=floating]:ml-0 md:peer-data-[variant=floating]:rounded-xl md:peer-data-[variant=floating]:shadow">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
