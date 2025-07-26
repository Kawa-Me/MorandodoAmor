"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const VideoPlaceholder = ({
  src,
  alt,
  hint,
}: {
  src: string;
  alt: string;
  hint: string;
}) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      data-ai-hint={hint}
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <PlayCircle className="h-16 w-16 text-white/80" />
    </div>
  </div>
);

const RecipeStep = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="font-headline text-xl font-bold mt-6 mb-2">{title}</h3>
    <div className="space-y-2 text-foreground/90">{children}</div>
  </div>
);

export function RecipeTabs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          The Perfect Candy Strawberry
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calda">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="calda">Calda Recipe</TabsTrigger>
            <TabsTrigger value="brigadeiro">Brigadeiro Recipe</TabsTrigger>
            <TabsTrigger value="assembly">Assembly</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
          </TabsList>

          <TabsContent value="calda" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
              Perfect Calda (Candy Coating)
            </h2>
            <p className="mt-2 text-muted-foreground">
              Follow these steps for a flawless, glossy candy coating every
              time.
            </p>
            <div className="mt-4 space-y-6">
              <VideoPlaceholder
                src="https://placehold.co/1280x720.png"
                alt="Video instructions for calda recipe"
                hint="candy making"
              />
              <RecipeStep title="Ingredients">
                <ul className="list-disc pl-5 space-y-1">
                  <li>2 cups granulated sugar</li>
                  <li>1/2 cup light corn syrup</li>
                  <li>1/2 cup water</li>
                  <li>Red food coloring (optional)</li>
                </ul>
              </RecipeStep>
              <RecipeStep title="Instructions">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>
                    In a saucepan, combine sugar, corn syrup, and water.
                  </li>
                  <li>
                    Cook over medium-high heat, stirring until sugar dissolves.
                  </li>
                  <li>
                    Bring to a boil and cook without stirring until a candy
                    thermometer reads 300°F (150°C).
                  </li>
                  <li>
                    Remove from heat, add food coloring if desired, and carefully
                    dip strawberries.
                  </li>
                </ol>
              </RecipeStep>
            </div>
          </TabsContent>

          <TabsContent value="brigadeiro" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
              Creamy Brigadeiro Filling
            </h2>
            <p className="mt-2 text-muted-foreground">
              The secret to a decadent strawberry filling.
            </p>
            <div className="mt-4 space-y-6">
              <RecipeStep title="Ingredients">
                <ul className="list-disc pl-5 space-y-1">
                  <li>1 can (14 oz) sweetened condensed milk</li>
                  <li>1 tablespoon unsalted butter</li>
                  <li>
                    1/2 cup white chocolate chips
                  </li>
                  <li>1 teaspoon vanilla extract</li>
                </ul>
              </RecipeStep>
              <RecipeStep title="Instructions">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>
                    Melt butter, condensed milk, and white chocolate in a non-stick pan over medium-low heat.
                  </li>
                  <li>
                    Stir constantly until the mixture thickens and pulls away from the bottom of the pan (about 10-15 minutes).
                  </li>
                  <li>
                    Remove from heat, stir in vanilla, and let it cool completely before using.
                  </li>
                </ol>
              </RecipeStep>
            </div>
          </TabsContent>

          <TabsContent value="assembly" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
              Assembly Guide
            </h2>
            <p className="mt-2 text-muted-foreground">
              Bring it all together for a beautiful result.
            </p>
            <div className="mt-4 space-y-6">
               <VideoPlaceholder
                src="https://placehold.co/1280x720.png"
                alt="Video instructions for assembling candy strawberries"
                hint="food preparation"
              />
              <RecipeStep title="Steps">
                <ol className="list-decimal pl-5 space-y-1">
                    <li>Wash and thoroughly dry your strawberries. The stem should be intact.</li>
                    <li>Hollow out the strawberries from the bottom.</li>
                    <li>Fill a piping bag with the cooled brigadeiro and fill each strawberry.</li>
                    <li>Prepare your calda as per the recipe.</li>
                    <li>Dip each filled strawberry into the hot calda, coating it completely.</li>
                    <li>Place on a parchment-lined tray to harden. Work quickly!</li>
                </ol>
              </RecipeStep>
            </div>
          </TabsContent>

          <TabsContent value="storage" className="mt-6">
            <h2 className="font-headline text-2xl font-bold">
              Storage & Maintenance
            </h2>
            <p className="mt-2 text-muted-foreground">
              Keep your creations fresh and delicious.
            </p>
            <div className="mt-4 space-y-6">
               <VideoPlaceholder
                src="https://placehold.co/1280x720.png"
                alt="Video guide for storing candy strawberries"
                hint="food storage"
              />
              <RecipeStep title="Tips">
                 <ul className="list-disc pl-5 space-y-1">
                    <li>Best enjoyed within 24 hours for optimal crunch.</li>
                    <li>Store in a cool, dry place. Do not refrigerate, as condensation will dissolve the candy shell.</li>
                    <li>If you must store them for longer, use an airtight container with silica gel packets to absorb moisture.</li>
                    <li>Keep them separated to prevent sticking.</li>
                 </ul>
              </RecipeStep>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
