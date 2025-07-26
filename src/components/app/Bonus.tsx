import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, ShoppingCart } from "lucide-react";

export function Bonus() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <ShoppingCart className="h-6 w-6 text-primary" />
                        Venda no iFood
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                   <p>Assim que começar a fazer as primeiras vendas, considere abrir sua loja no iFood.</p>
                   <p>Para isso, você precisa abrir um MEI, que é gratuito no site do governo. O único custo é a mensalidade do MEI (cerca de R$ 70), que já inclui INSS e tributos.</p>
                   <p>O iFood cobra taxas por venda, então lembre-se de incluir isso no seu preço final para não sair no prejuízo.</p>
                </CardContent>
            </Card>
             <Card className="bg-primary text-primary-foreground flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <Gift className="h-6 w-6" />
                        Oferta Exclusiva!
                    </CardTitle>
                     <CardDescription className="text-primary-foreground/90">Você chegou até aqui, parabéns pela dedicação!</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                   <p>Adquira a planilha de precificação completa usada no vídeo com 50% de desconto: de R$19,99 por apenas R$9,99!</p>
                </CardContent>
                <CardContent>
                    <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                        Quero a Planilha com Desconto
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
