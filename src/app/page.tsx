import { LoginForm } from "@/components/app/LoginForm";
import { StrawberryIcon } from "@/components/icons/StrawberryIcon";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center text-center mb-8">
            <StrawberryIcon className="h-12 w-12 text-primary mb-4" />
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
                Morango do Amor
            </h1>
            <p className="text-muted-foreground mt-2">Área de membros exclusiva. Insira seus dados para acessar.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
