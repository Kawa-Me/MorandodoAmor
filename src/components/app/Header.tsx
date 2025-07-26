import { Heart } from "lucide-react";
import { StrawberryIcon } from "@/components/icons/StrawberryIcon";

export function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-primary">
          <Heart className="h-8 w-8" />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-center sm:text-5xl">
            Morango do Amor
          </h1>
          <StrawberryIcon className="h-10 w-10" />
        </div>
      </div>
    </header>
  );
}
