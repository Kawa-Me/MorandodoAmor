import { Header } from "@/components/app/Header";
import { RecipeTabs } from "@/components/app/RecipeTabs";
import { ActionPlan } from "@/components/app/ActionPlan";
import { HashtagSuggestor } from "@/components/app/HashtagSuggestor";
import { PricingCalculator } from "@/components/app/PricingCalculator";
import { ExtraTips } from "@/components/app/ExtraTips";
import { Bonus } from "@/components/app/Bonus";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Coluna Principal (Esquerda) */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl md:text-4xl">Sua Jornada para o Sucesso Começa Aqui</CardTitle>
                    <CardDescription>Aprenda a fazer o Morango do Amor perfeito e transforme sua paixão em uma fonte de renda extra.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full aspect-video rounded-lg overflow-hidden">
                      <video
                          className="w-full h-full object-cover"
                          src="https://pjuifgyrftpnjpurmzzn.supabase.co/storage/v1/object/public/morangodoamor//RECEITA%20MORANGO%20DO%20AMOR.mp4"
                          controls
                          poster="https://placehold.co/1280x720/f8b0c4/e53935?text=Morango+do+Amor"
                          data-ai-hint="strawberry chocolate"
                      >
                          Seu navegador não suporta a tag de vídeo.
                      </video>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-right">Créditos do vídeo: @tabataromero</p>
                </CardContent>
            </Card>

            <RecipeTabs />
            <ActionPlan />
          </div>
          
          {/* Coluna Lateral (Direita) */}
          <div className="lg:col-span-2 space-y-8">
            <PricingCalculator />
            <HashtagSuggestor />
            <ExtraTips />
          </div>
        </div>
        
        {/* Seção Bônus */}
        <div className="mx-auto max-w-7xl mt-8">
            <Bonus />
        </div>
      </main>
    </div>
  );
}
