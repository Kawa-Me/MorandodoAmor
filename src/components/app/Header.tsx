import { StrawberryIcon } from "@/components/icons/StrawberryIcon";

export function Header() {
  return (
    <header className="bg-card/95 backdrop-blur-sm sticky top-0 z-50 border-b shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-primary">
          <StrawberryIcon className="h-8 w-8 sm:h-9 sm:w-9" />
          <h1 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight">
            Morango do Amor
          </h1>
        </div>
        <div className="font-body text-sm text-muted-foreground hidden md:block">
            Sua Próxima Renda Extra
        </div>
      </div>
    </header>
  );
}
