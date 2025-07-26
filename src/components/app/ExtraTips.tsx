import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function ExtraTips() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    Dicas de Venda
                </CardTitle>
                <CardDescription>Estratégias para divulgar seu produto e conquistar clientes.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-3 text-foreground/90">
                    <li>Poste vídeos com o efeito cascata da calda brilhante.</li>
                    <li>Mostre o preparo nos stories para gerar desejo.</li>
                    <li>Ofereça combos promocionais (ex: leve 3, pague 2).</li>
                    <li>Atenda rápido no WhatsApp com simpatia e personalize mensagens.</li>
                    <li>Incentive clientes a postar e marcar você — isso gera prova social e confiança.</li>
                    <li>Envie um brinde simples ou desconto na próxima compra para quem te marcar.</li>
                </ul>
            </CardContent>
        </Card>
    );
}
