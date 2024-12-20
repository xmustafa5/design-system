
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  } from "@/app/chesty/components/avatar";
  import LayoutWithCard from "../_components/LayoutWithCard";
  export default function Page() {
    return (
      <LayoutWithCard title="Avatar">
         <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
      </LayoutWithCard>
    );
  }
  