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
          "mx-auto w-full bg-background border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x flex justify-center items-center overflow-hidden relative py-2 pr-2"
        }
      >
        <SidebarProvider>
          <AppSidebar  />

          <main className="
          md:pl-6 lg:pl-10
          pr-4
          
          h-screen overflow-y-auto scrollbar-hidden h-full relative flex min-h-svh flex-1 flex-col peer-data-[variant=floating]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=floating]:mb-4 md:peer-data-[state=collapsed]:peer-data-[variant=floating]:ml-2 md:peer-data-[variant=floating]:ml-0  md:peer-data-[variant=floating]:rounded-xl 
           md:peer-data-[variant=floating]:shadow 
          border
          
           group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border
          ">
            {/* <SidebarTrigger /> */}
            <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            {children}
            <div className=" text-[6px]">
              <p className="  sticky ">

            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+========++++++
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@==========+++++
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+==========+++++
@@@@@@@@@@@@@@@@@@@%#*+++++++++*+**%===========++++++
#@@@@@@@@@@@@@%@%%#++++++++++++++*+====++=====+++++++
*@@@@@@@@%%%%##%*+++++++#%#*+++++*+##+=+=====+===++++
++#@@@@%%%%#***+*++++*%##%#*+++++++*%%%%%%#*++==+++++
++++++++#%%%##*++++#%#%**#+++++**++*%%#@@@@%%%#++++++
+++++++++%%@@@@@@%#++*%%#++*++++*++%%%%@@@@@@@%%%#+++
+++++++++*@@@@#*%@@*++=++**+++++*+++%@@@@@@@@@@@@@@%#
++++++++++#%%%%%%@%#++++*++++++*++++@@@@@@@@@@@@@@@@@
*++++++++*##%#*##%@%*++++**++++++++#@@@@@@@@@@@@@@@@@
*++++++*%@@##%%##%@@@#*++++**++++++%@@@@@@@@@@@@@@@@@
**++++%@@@@@%*####%#*#%#**###+++++%@@@@@@@@@@@@@@@@@@
**++#@@@@@@@@@*##%@@@@%##***+*+++#@@@@@@@@@@@@@@@@@@%
**+%@@@@@@@@@@@##+*%@@%##*+++*###@@@@@@@@@@@@@@@@@@@@
*+%@@@@@@@@@@@@@@@**#%*+*+++*##%@@@@@@@@@@@@@@@@@@@@@
*@@@@@@@@@@@@@@@@@@%###++++**#@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%*#@@@@@@@@@@@@@@@@@@@@@@@@@@
</p>

            </div>
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
