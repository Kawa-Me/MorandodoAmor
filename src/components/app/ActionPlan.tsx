import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Rocket } from "lucide-react";

const actionPlanData = [
  {
    day: 1,
    title: "Compras e Treinamento",
    tasks: [
      "Compre ingredientes e embalagens.",
      "Treine as receitas de calda e brigadeiro.",
    ],
  },
  {
    day: 2,
    title: "Criação de Conteúdo e Contatos",
    tasks: [
      "Tire fotos e grave vídeos do processo.",
      "Monte sua lista de contatos (WhatsApp, vizinhos, amigos).",
    ],
  },
  {
    day: 3,
    title: "Divulgação Inicial",
    tasks: [
      "Poste nas redes sociais (Feed, Reels, Stories).",
      "Envie mensagens diretas apresentando o produto.",
    ],
  },
  {
    day: 4,
    title: "Expansão em Grupos",
    tasks: [
      "Entre em grupos de vendas do Facebook e WhatsApp da sua cidade.",
      "Publique também no Facebook Marketplace.",
    ],
  },
  {
    day: 5,
    title: "Vídeos Virais",
    tasks: [
      "Pesquise vídeos virais no TikTok e Instagram com a hashtag #morangodoamor.",
      "Modele os vídeos e crie o seu.",
      "Poste no seu TikTok e Instagram pessoal ou do negócio.",
    ],
  },
  {
    day: 6,
    title: "Primeiras Entregas e Feedback",
    tasks: [
      "Entregue os primeiros pedidos.",
      "Peça feedback.",
      "Incentive os clientes a postar e te marcar.",
      "Ofereça um brinde ou desconto para quem fizer isso.",
    ],
  },
  {
    day: 7,
    title: "Promoção e Planejamento",
    tasks: [
      "Faça uma promoção agressiva (ex: leve 4, pague 3).",
      "Reorganize estoque e se prepare para a nova semana.",
    ],
  },
];

export function ActionPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl md:text-3xl flex items-center gap-2">
          <Rocket className="h-7 w-7 text-primary" />
          Plano de Ação (7 Dias)
        </CardTitle>
        <CardDescription>Um guia passo a passo para lançar seu negócio em uma semana.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-0">
          {actionPlanData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.day}>
              <AccordionTrigger className="font-headline text-lg md:text-xl text-left">
                Dia {item.day}: {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pt-2">
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
