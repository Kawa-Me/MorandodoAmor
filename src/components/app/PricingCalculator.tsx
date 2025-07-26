
"use client";

import { useState, useMemo, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Package, Percent, Soup, WholeWord } from "lucide-react";

interface Costs {
  ingredientCost: number | "";
  packagingCost: number | "";
  profitMargin: number | "";
  recipeYield: number | "";
}

export function PricingCalculator() {
  const [costs, setCosts] = useState<Costs>({
    ingredientCost: "",
    packagingCost: "",
    profitMargin: "",
    recipeYield: "",
  });

  const handleCostChange =
    (field: keyof Costs) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "") {
        setCosts((prev) => ({ ...prev, [field]: "" }));
        return;
      }
      const numValue = parseFloat(value);
      if (!isNaN(numValue) && numValue >= 0) {
        setCosts((prev) => ({ ...prev, [field]: numValue }));
      }
    };

    const profitMarginValue = costs.profitMargin === "" ? 300 : Number(costs.profitMargin);

  const { totalRecipeCost, costPerUnit, suggestedPrice, profitPerUnit } = useMemo(() => {
    const { ingredientCost, packagingCost, recipeYield } = costs;
    
    const validYield = Number(recipeYield) > 0 ? Number(recipeYield) : 1;
    const totalRecipeCost = Number(ingredientCost) + Number(packagingCost);
    const costPerUnit = totalRecipeCost / validYield;
    const suggestedPrice = costPerUnit * (1 + profitMarginValue / 100);
    const profitPerUnit = suggestedPrice - costPerUnit;

    return { totalRecipeCost, costPerUnit, suggestedPrice, profitPerUnit };
  }, [costs, profitMarginValue]);

  const formatCurrency = (value: number) => {
    return isNaN(value) || !isFinite(value) ? "R$0,00" : value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Calculadora de Preços
        </CardTitle>
        <CardDescription>
          Calcule o preço de venda ideal. A margem de lucro padrão é 300%, mas você pode alterar.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <video
                className="w-full h-full object-cover"
                src="https://pjuifgyrftpnjpurmzzn.supabase.co/storage/v1/object/public/tribo//ssstik.io_@deboradelus_1753536983624.mp4"
                autoPlay
                loop
                playsInline
                controls
                controlsList="nodownload"
                data-ai-hint="candy business"
                >
                Seu navegador não suporta a tag de vídeo.
                </video>
            </div>
            <p className="text-xs text-muted-foreground text-center">Precificação e Lucro. Créditos: @deboradelus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="ingredientCost" className="flex items-center gap-2"><Soup className="h-4 w-4" /> Custo total dos ingredientes (R$)</Label>
                    <Input id="ingredientCost" type="number" placeholder="Digite aqui" value={costs.ingredientCost} onChange={handleCostChange("ingredientCost")} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="packagingCost" className="flex items-center gap-2"><Package className="h-4 w-4" /> Custo total das embalagens (R$)</Label>
                    <Input id="packagingCost" type="number" placeholder="Digite aqui" value={costs.packagingCost} onChange={handleCostChange("packagingCost")} />
                </div>
            </div>
            <div className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="recipeYield" className="flex items-center gap-2"><WholeWord className="h-4 w-4" /> Quantos morangos rendeu?</Label>
                    <Input id="recipeYield" type="number" placeholder="Digite aqui" value={costs.recipeYield} onChange={handleCostChange("recipeYield")} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="profitMargin" className="flex items-center gap-2"><Percent className="h-4 w-4" /> Margem de Lucro (%)</Label>
                    <div className="relative">
                    <Input id="profitMargin" type="number" placeholder="Padrão: 300" className="pr-8" value={costs.profitMargin} onChange={handleCostChange("profitMargin")} />
                    </div>
                </div>
            </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4 rounded-b-lg mt-4 flex flex-col items-start gap-4">
        <div className="w-full space-y-2 text-sm">
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Custo total da receita:</span>
                <span className="font-medium">{formatCurrency(totalRecipeCost)}</span>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Custo por unidade:</span>
                <span className="font-medium">{formatCurrency(costPerUnit)}</span>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Lucro por unidade:</span>
                <span className="font-medium text-green-600">{formatCurrency(profitPerUnit)}</span>
            </div>
        </div>
        <div className="w-full flex justify-between items-center font-bold text-lg text-primary bg-primary/10 p-3 rounded-lg">
            <span className="font-headline">Preço de Venda Sugerido (por unidade):</span>
            <span className="font-headline">{formatCurrency(suggestedPrice)}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
