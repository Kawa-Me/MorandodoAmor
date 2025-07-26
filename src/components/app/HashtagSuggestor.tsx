"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getHashtagSuggestions } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  keywords: z
    .string()
    .min(3, { message: "Por favor, insira pelo menos 3 caracteres." })
    .max(100, { message: "Por favor, insira no máximo 100 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

export function HashtagSuggestor() {
  const [loading, setLoading] = useState(false);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: "morango do amor, doces artesanais",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    setHashtags([]);
    const result = await getHashtagSuggestions(data.keywords);
    setLoading(false);

    if (result.hashtags) {
      setHashtags(result.hashtags);
    } else if (result.error) {
      toast({
        variant: "destructive",
        title: "Ops! Algo deu errado.",
        description: result.error,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-3xl flex items-center gap-2">
          <Wand2 className="h-7 w-7 text-accent" />
          Sugestor de Hashtags com IA
        </CardTitle>
        <CardDescription>
          Maximize seu alcance nas redes sociais com hashtags em alta. Use #morangodoamor, #docesartesanais, #rendaextra.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Digite as palavras-chave</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: doces, confeitaria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Lightbulb className="mr-2 h-4 w-4" />
              )}
              Sugerir Hashtags
            </Button>
          </form>
        </Form>

        {(loading || hashtags.length > 0) && (
          <div className="mt-6">
            <h4 className="font-headline text-lg">Sugestões</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {loading ? (
                <>
                  <SkeletonBadge /> <SkeletonBadge /> <SkeletonBadge />
                  <SkeletonBadge /> <SkeletonBadge />
                </>
              ) : (
                  <>
                    {hashtags.map((tag, index) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Badge variant="secondary" className="text-base py-1 px-3 cursor-pointer hover:bg-accent/20" onClick={() => navigator.clipboard.writeText(`#${tag}`)}>
                          #{tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const SkeletonBadge = () => (
    <div className="h-8 w-24 animate-pulse rounded-full bg-muted" />
)
