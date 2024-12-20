
import {
    Input 
  } from "@/app/chesty/components/input";
  import LayoutWithCard from "../_components/LayoutWithCard";
  export default function Page() {
    return (
      <LayoutWithCard title="Input">
         <Input type="email" placeholder="Email" />
      </LayoutWithCard>
    );
  }
  