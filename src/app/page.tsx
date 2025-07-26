import { Header } from "@/components/app/Header";
import { RecipeTabs } from "@/components/app/RecipeTabs";
import { ActionPlan } from "@/components/app/ActionPlan";
import { HashtagSuggestor } from "@/components/app/HashtagSuggestor";
import { PricingCalculator } from "@/components/app/PricingCalculator";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <RecipeTabs />
            <ActionPlan />
          </div>
          <div className="space-y-8">
            <HashtagSuggestor />
            <PricingCalculator />
          </div>
        </div>
      </main>
    </div>
  );
}
