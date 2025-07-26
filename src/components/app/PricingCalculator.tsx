"use client";

import { useState, useMemo, ChangeEvent } from "react";
import Link from 'next/link';
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
import { DollarSign, Percent, PlayCircle } from "lucide-react";

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
      if (value === "") {
        setCosts((prev) => ({ ...prev, [field]: "" }));
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
        <CardTitle className="font-headline text-3xl">Precificação e Lucratividade</CardTitle>
        <CardDescription>
          Calcule o preço ideal para seus morangos do amor. A margem de lucro ideal é de 3 a 4 vezes o custo.
        </CardDescription>
         <Link href="https://www.tiktok.com/@deboradelus/video/7529553584443215109" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 pt-2">
            <PlayCircle className="h-5 w-5" />
            Vídeo explicativo: Assista aqui
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="ingredientCost">Custo de Ingredientes</Label>
            <div className="relative">
                <span className="absolute left-2.5 top-2.5 text-sm text-muted-foreground">R$</span>
                <Input id="ingredientCost" type="number" placeholder="20.00" className="pl-8" value={costs.ingredientCost} onChange={handleCostChange("ingredientCost")} />
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="packagingCost">Custo de Embalagens</Label>
            <div className="relative">
                <span className="absolute left-2.5 top-2.5 text-sm text-muted-foreground">R$</span>
                <Input id="packagingCost" type="number" placeholder="5.00" className="pl-8" value={costs.packagingCost} onChange={handleCostChange("packagingCost")} />
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="productionTimeCost">Custo do Tempo de Produção</Label>
            <div className="relative">
                <span className="absolute left-2.5 top-2.5 text-sm text-muted-foreground">R$</span>
                <Input id="productionTimeCost" type="number" placeholder="10.00" className="pl-8" value={costs.productionTimeCost} onChange={handleCostChange("productionTimeCost")} />
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="profitMargin">Margem de Lucro (%)</Label>
            <div className="relative">
              <Percent className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="profitMargin" type="number" placeholder="300" className="pr-8" value={costs.profitMargin} onChange={handleCostChange("profitMargin")} />
            </div>
          </div>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-4 rounded-b-lg mt-4">
        <div className="w-full space-y-2">
            <div className="flex justify-between items-center font-medium">
                <span>Custo Total por Unidade:</span>
                <span>{formatCurrency(totalCost)}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg text-primary">
                <span className="font-headline">Preço de Venda Sugerido:</span>
                <span className="font-headline">{formatCurrency(suggestedPrice)}</span>
            </div>
             <div className="flex justify-between items-center text-sm text-muted-foreground pt-2">
                <span>Lucro por Unidade:</span>
                <span>{formatCurrency(profit)}</span>
            </div>
            <p className="text-xs text-center pt-2 text-muted-foreground">Sugestão de preço por unidade: R$15 a R$20 (dependendo da região e apresentação).</p>
        </div>
      </CardFooter>
    </Card>
  );
}
