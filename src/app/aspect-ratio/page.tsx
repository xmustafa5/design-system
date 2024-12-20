
import {
    AspectRatio 
  } from "@/app/chesty/components/aspect-ratio";
  import LayoutWithCard from "../_components/LayoutWithCard";
  import Image from "next/image"

  export default function Page() {
    return (
      <LayoutWithCard title="Aspect Ratio">
        <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="/images.jpg"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
      </LayoutWithCard>
    );
  }
  