import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function ExtraTips() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-3xl flex items-center gap-2">
                    <Lightbulb className="h-7 w-7 text-accent" />
                    Dicas Extras de Venda
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                    <li>Poste vídeos com o efeito cascata da calda brilhante.</li>
                    <li>Mostre o preparo nos stories.</li>
                    <li>Ofereça combos promocionais (ex: leve 3, pague 2).</li>
                    <li>Atenda rápido no WhatsApp com simpatia e personalize mensagens.</li>
                    <li>Incentive clientes a postar e marcar você nas redes sociais — isso vira prova social.</li>
                    <li>Envie um brinde simples ou desconto na próxima compra para quem fizer isso.</li>
                </ul>
            </CardContent>
        </Card>
    );
}
