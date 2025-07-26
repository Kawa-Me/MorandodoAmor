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
import { DollarSign, Percent } from "lucide-react";

interface Costs {
  strawberryCost: number;
  fillingCost: number;
  packagingCost: number;
  quantity: number;
  profitMargin: number;
}

export function PricingCalculator() {
  const [costs, setCosts] = useState<Costs>({
    strawberryCost: 10,
    fillingCost: 8,
    packagingCost: 5,
    quantity: 12,
    profitMargin: 50,
  });

  const handleCostChange =
    (field: keyof Costs) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Allow empty input for better user experience
      if (value === "") {
        setCosts((prev) => ({ ...prev, [field]: "" }));
        return;
      }
      const numValue = parseFloat(value);
      if (!isNaN(numValue) && numValue >= 0) {
        setCosts((prev) => ({ ...prev, [field]: numValue }));
      }
    };

  const { totalCost, costPerUnit, suggestedPrice, totalProfit } = useMemo(() => {
    const { strawberryCost, fillingCost, packagingCost, quantity, profitMargin } = costs;
    if (quantity <= 0) return { totalCost: 0, costPerUnit: 0, suggestedPrice: 0, totalProfit: 0 };
    
    const totalMaterialCost = Number(strawberryCost) + Number(fillingCost) + Number(packagingCost);
    const costPerUnit = totalMaterialCost / quantity;
    const suggestedPrice = costPerUnit * (1 + Number(profitMargin) / 100);
    const totalProfit = (suggestedPrice * quantity) - totalMaterialCost;

    return { totalCost: totalMaterialCost, costPerUnit, suggestedPrice, totalProfit };
  }, [costs]);

  const formatCurrency = (value: number) => {
    return isNaN(value) || !isFinite(value) ? "$0.00" : value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Pricing Calculator</CardTitle>
        <CardDescription>
          Calculate the ideal price for your candy strawberries to ensure
          profitability.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="strawberryCost">Strawberry Cost</Label>
            <div className="relative">
              <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="strawberryCost" type="number" placeholder="10.00" className="pl-8" value={costs.strawberryCost} onChange={handleCostChange("strawberryCost")} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fillingCost">Filling Cost</Label>
             <div className="relative">
              <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="fillingCost" type="number" placeholder="8.00" className="pl-8" value={costs.fillingCost} onChange={handleCostChange("fillingCost")}/>
            </div>
          </div>
        </div>
         <div className="space-y-2">
            <Label htmlFor="packagingCost">Total Packaging Cost</Label>
            <div className="relative">
              <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="packagingCost" type="number" placeholder="5.00" className="pl-8" value={costs.packagingCost} onChange={handleCostChange("packagingCost")} />
            </div>
          </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" placeholder="12" value={costs.quantity} onChange={handleCostChange("quantity")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profitMargin">Profit Margin</Label>
            <div className="relative">
              <Percent className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="profitMargin" type="number" placeholder="50" className="pr-8" value={costs.profitMargin} onChange={handleCostChange("profitMargin")} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-4 rounded-b-lg mt-4">
        <div className="w-full space-y-2">
            <div className="flex justify-between items-center font-medium">
                <span>Cost Per Unit:</span>
                <span>{formatCurrency(costPerUnit)}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg text-primary">
                <span className="font-headline">Suggested Price Per Unit:</span>
                <span className="font-headline">{formatCurrency(suggestedPrice)}</span>
            </div>
             <div className="flex justify-between items-center text-sm text-muted-foreground pt-2">
                <span>Total Profit:</span>
                <span>{formatCurrency(totalProfit)}</span>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
}
