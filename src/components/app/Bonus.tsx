import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, ShoppingCart } from "lucide-react";

export function Bonus() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col md:col-span-2">
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
        </div>
    );
}
