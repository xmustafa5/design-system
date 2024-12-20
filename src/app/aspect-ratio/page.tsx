
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
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
      </LayoutWithCard>
    );
  }
  