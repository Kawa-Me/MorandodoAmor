import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Gift, ShoppingCart } from "lucide-react";

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

            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <Download className="h-6 w-6 text-primary" />
                        Material de Apoio
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col justify-center items-center">
                   <p className="text-center">Baixe o PDF completo do curso para consultar quando quiser.</p>
                   <Button asChild className="mt-4">
                     <a href="https://pjuifgyrftpnjpurmzzn.supabase.co/storage/v1/object/public/morangodoamor//Morango-do-Amor-Sua-Proxima-Renda%20(2).pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Baixar PDF do Curso
                     </a>
                   </Button>
                </CardContent>
            </Card>
        </div>
    );
}
