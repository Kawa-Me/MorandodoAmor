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
import { Calculator, Percent } from "lucide-react";

interface Costs {
  ingredientCost: number;
  packagingCost: number;
  productionTimeCost: number;
  profitMargin: number;
}

export function PricingCalculator() {
  const [costs, setCosts] = useState<Costs>({
    ingredientCost: 20,
    packagingCost: 5,
    productionTimeCost: 10,
    profitMargin: 300,
  });

  const handleCostChange =
    (field: keyof Costs) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Permitir campo vazio para que o usuário possa apagar
      if (value === "") {
        setCosts((prev) => ({ ...prev, [field]: "" as any }));
        return;
      }
      const numValue = parseFloat(value);
      if (!isNaN(numValue) && numValue >= 0) {
        setCosts((prev) => ({ ...prev, [field]: numValue }));
      }
    };

  const { totalCost, suggestedPrice, profit } = useMemo(() => {
    const { ingredientCost, packagingCost, productionTimeCost, profitMargin } = costs;
    
    const totalBaseCost = Number(ingredientCost) + Number(packagingCost) + Number(productionTimeCost);
    const suggestedPrice = totalBaseCost * (Number(profitMargin) / 100);
    const profit = suggestedPrice - totalBaseCost;

    return { totalCost: totalBaseCost, suggestedPrice, profit };
  }, [costs]);

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
            Precificação e Lucro
        </CardTitle>
        <CardDescription>
          Calcule o preço de venda ideal. A margem de lucro sugerida é de 300% sobre o custo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full rounded-lg overflow-hidden mb-4">
            <iframe
                src="https://www.tiktok.com/embed/v2/7529553584443215109"
                className="w-full h-[550px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
                data-ai-hint="pricing video"
            ></iframe>
        </div>
        <div className="space-y-2">
            <Label htmlFor="ingredientCost">Custo de Ingredientes (R$)</Label>
            <Input id="ingredientCost" type="number" placeholder="20.00" value={costs.ingredientCost} onChange={handleCostChange("ingredientCost")} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="packagingCost">Custo de Embalagens (R$)</Label>
            <Input id="packagingCost" type="number" placeholder="5.00" value={costs.packagingCost} onChange={handleCostChange("packagingCost")} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="productionTimeCost">Custo do Tempo de Produção (R$)</Label>
            <Input id="productionTimeCost" type="number" placeholder="10.00" value={costs.productionTimeCost} onChange={handleCostChange("productionTimeCost")} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="profitMargin">Margem de Lucro (%)</Label>
            <div className="relative">
              <Input id="profitMargin" type="number" placeholder="300" className="pr-8" value={costs.profitMargin} onChange={handleCostChange("profitMargin")} />
              <Percent className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4 rounded-b-lg mt-4 flex flex-col items-start gap-4">
        <div className="w-full space-y-2 text-sm">
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Custo Total por Unidade:</span>
                <span className="font-medium">{formatCurrency(totalCost)}</span>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Lucro por Unidade:</span>
                <span className="font-medium">{formatCurrency(profit)}</span>
            </div>
        </div>
        <div className="w-full flex justify-between items-center font-bold text-lg text-primary bg-primary/10 p-3 rounded-lg">
            <span className="font-headline">Venda Sugerida:</span>
            <span className="font-headline">{formatCurrency(suggestedPrice)}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
