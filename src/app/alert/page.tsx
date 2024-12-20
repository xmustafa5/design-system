
import {
    Alert, AlertDescription, AlertTitle 
  } from "@/app/chesty/components/alert";
import LayoutWithCard from "../_components/LayoutWithCard";
import { Terminal } from "lucide-react";
  export default function Page() {
    return (
      <LayoutWithCard title="Alert">
        <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
      </LayoutWithCard>
    );
  }
  