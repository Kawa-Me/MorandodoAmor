import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

export function Bonus() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl flex items-center gap-2">
                        <Gift className="h-7 w-7 text-accent" />
                        Dica Extra: iFood
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <p>Assim que começar a fazer as primeiras vendas, considere abrir sua loja no iFood.</p>
                   <p>Para isso, você precisa abrir um MEI, que é gratuito no site do governo. O único custo é a mensalidade do MEI (cerca de R$ 60), que já inclui INSS e tributos.</p>
                   <p>O iFood cobra taxas por venda, então inclua isso no seu preço final para não sair no prejuízo.</p>
                </CardContent>
            </Card>
             <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Oferta Exclusiva!</CardTitle>
                     <CardDescription className="text-primary-foreground/90">Se você leu até aqui, parabéns! Poucas pessoas têm esse nível de dedicação.</CardDescription>
                </CardHeader>
                <CardContent>
                   <p>Se quiser a planilha de precificação usada no vídeo, envie uma mensagem para nós e receba com 50% de desconto: de R$19,99 por apenas R$9,99!</p>
                </CardContent>
            </Card>
        </div>
    );
}
