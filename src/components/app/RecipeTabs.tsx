"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Apple, Cookie, Package, Refrigerator } from "lucide-react";

const RecipeStep = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="font-headline text-xl font-bold mt-6 mb-2 text-primary/90">{title}</h3>
    <div className="space-y-2 text-foreground/90">{children}</div>
  </div>
);

export function RecipeTabs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          Receitas para o Morango Perfeito
        </CardTitle>
        <CardDescription>Siga os passos e prepare-se para encantar seus clientes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calda">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="calda" className="flex items-center gap-2"><Cookie className="h-4 w-4" /> Calda</TabsTrigger>
            <TabsTrigger value="brigadeiro" className="flex items-center gap-2"><Apple className="h-4 w-4" />Recheio</TabsTrigger>
            <TabsTrigger value="assembly" className="flex items-center gap-2"><Package className="h-4 w-4" />Montagem</TabsTrigger>
            <TabsTrigger value="storage" className="flex items-center gap-2"><Refrigerator className="h-4 w-4" />Conservação</TabsTrigger>
          </TabsList>

          <TabsContent value="calda" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
              Receita da Calda Perfeita
            </h2>
             <RecipeStep title="Ingredientes">
                <ul className="list-disc pl-5 space-y-1">
                  <li>1 xícara de açúcar cristal</li>
                  <li>½ xícara de água</li>
                  <li>1 colher (sopa) de glucose de milho (opcional – ajuda a não cristalizar)</li>
                  <li>1 colher (chá) de suco de limão (dá brilho)</li>
                </ul>
              </RecipeStep>
              <RecipeStep title="Modo de Preparo">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Misture todos os ingredientes (menos o limão) em uma panela.</li>
                  <li>Leve ao fogo médio até começar a ferver.</li>
                  <li>Sem mexer, cozinhe até atingir o ponto de bala dura (use termômetro ou teste do copo com água gelada).</li>
                  <li>Retire do fogo, adicione o suco de limão e mexa delicadamente.</li>
                   <li>Deixe esfriar levemente antes de mergulhar os morangos.</li>
                </ol>
              </RecipeStep>
               <RecipeStep title="Dicas Pro">
                <ul className="list-disc pl-5 space-y-1">
                    <li>Nunca mexa após começar a ferver (evita cristalização).</li>
                    <li>Use papel manteiga para secar os morangos.</li>
                    <li>A calda deve cobrir completamente o morango.</li>
                 </ul>
              </RecipeStep>
          </TabsContent>

          <TabsContent value="brigadeiro" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
              Brigadeiro para Recheio Cremoso
            </h2>
            <div className="mt-4 space-y-6">
              <RecipeStep title="Ingredientes">
                <ul className="list-disc pl-5 space-y-1">
                  <li>1 lata de leite condensado</li>
                  <li>1 colher (sopa) de manteiga</li>
                  <li>4 colheres (sopa) de chocolate em pó</li>
                  <li>½ caixinha de creme de leite (opcional – deixa mais cremoso)</li>
                </ul>
              </RecipeStep>
              <RecipeStep title="Modo de preparo">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Misture todos os ingredientes (exceto o creme de leite) e leve ao fogo baixo.</li>
                  <li>Mexa até desgrudar do fundo da panela.</li>
                  <li>Adicione o creme de leite e misture bem.</li>
                  <li>Deixe esfriar antes de usar.</li>
                </ol>
              </RecipeStep>
              <RecipeStep title="Dica Pro">
                <p>Use um saco de confeitar para aplicar o recheio com precisão e higiene.</p>
              </RecipeStep>
            </div>
          </TabsContent>

          <TabsContent value="assembly" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
             Montagem e Finalização Rápida
            </h2>
            <div className="mt-4 space-y-6">
              <RecipeStep title="Passo a passo">
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Lave e seque bem os morangos.</li>
                    <li>Mergulhe um por um na calda.</li>
                    <li>Deixe secar em papel manteiga.</li>
                    <li>Recheie com brigadeiro.</li>
                    <li>Decore com granulado, chocolate derretido ou confeitos.</li>
                    <li>Embale em caixinhas bonitas e higiênicas.</li>
                </ol>
              </RecipeStep>
            </div>
          </TabsContent>

          <TabsContent value="storage" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
              Conservação e Validade
            </h2>
            <div className="mt-4 space-y-6">
                 <div className="w-full aspect-video rounded-lg overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        src="https://pjuifgyrftpnjpurmzzn.supabase.co/storage/v1/object/public/tribo//Como%20armazenar%20Morango%20do%20Amor.mp4"
                        controls
                        controlsList="nodownload"
                        data-ai-hint="strawberry storage"
                    >
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-right">Créditos do vídeo: @FlakesBrasil</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Conserve na geladeira por até 48 horas.</li>
                  <li>Use embalagens bem vedadas.</li>
                  <li>Evite locais quentes para manter a crocância da calda.</li>
                </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
