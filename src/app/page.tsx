import { Header } from "@/components/app/Header";
import { RecipeTabs } from "@/components/app/RecipeTabs";
import { ActionPlan } from "@/components/app/ActionPlan";
import { HashtagSuggestor } from "@/components/app/HashtagSuggestor";
import { PricingCalculator } from "@/components/app/PricingCalculator";
import { ExtraTips } from "@/components/app/ExtraTips";
import { Bonus } from "@/components/app/Bonus";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Vídeo de Introdução</CardTitle>
                <CardDescription>Veja como é fácil começar sua jornada com o Morango do Amor.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-sm mx-auto">
                    <div className="relative pb-[177.77%] h-0">
                        <video
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://pjuifgyrftpnjpurmzzn.supabase.co/storage/v1/object/public/morangodoamor//RECEITA%20MORANGO%20DO%20AMOR.mp4"
                            controls
                        >
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-right">Créditos: @tabataromero</p>
              </CardContent>
            </Card>
            <RecipeTabs />
            <ActionPlan />
          </div>
          <div className="space-y-8">
            <PricingCalculator />
            <HashtagSuggestor />
            <ExtraTips />
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-8">
            <Bonus />
        </div>
      </main>
    </div>
  );
}
