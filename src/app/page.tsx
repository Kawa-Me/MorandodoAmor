import { Header } from "@/components/app/Header";
import { RecipeTabs } from "@/components/app/RecipeTabs";
import { ActionPlan } from "@/components/app/ActionPlan";
import { HashtagSuggestor } from "@/components/app/HashtagSuggestor";
import { PricingCalculator } from "@/components/app/PricingCalculator";
import { ExtraTips } from "@/components/app/ExtraTips";
import { Bonus } from "@/components/app/Bonus";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

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
                <Link href="https://www.youtube.com/shorts/EOOEUIMcwMA" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Acesse aqui
                </Link>
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
