import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const actionPlanData = [
  {
    day: 1,
    title: "Research & Planning",
    tasks: [
      "Define your target audience.",
      "Research local competitors and pricing.",
      "Source high-quality ingredients.",
    ],
  },
  {
    day: 2,
    title: "Recipe Perfection",
    tasks: [
      "Practice the calda and brigadeiro recipes.",
      "Experiment with different strawberry sizes.",
      "Get feedback from friends and family.",
    ],
  },
  {
    day: 3,
    title: "Branding & Packaging",
    tasks: [
      "Choose a name and logo for your business.",
      "Design and order packaging (boxes, ribbons).",
      "Create business cards or flyers.",
    ],
  },
  {
    day: 4,
    title: "Setup Social Media",
    tasks: [
      "Create Instagram and Facebook pages.",
      "Take high-quality photos of your product.",
      "Use the Hashtag Suggestor to plan your posts.",
    ],
  },
  {
    day: 5,
    title: "Pricing & Legality",
    tasks: [
      "Use the Pricing Calculator to set your prices.",
      "Research local food business regulations.",
      "Set up a payment system (e.g., Venmo, PayPal).",
    ],
  },
  {
    day: 6,
    title: "Launch Promotion",
    tasks: [
      "Announce your launch date on social media.",
      "Offer a special launch-day discount.",
      "Reach out to local influencers or food bloggers.",
    ],
  },
  {
    day: 7,
    title: "Launch Day!",
    tasks: [
      "Prepare your first batch for sale.",
      "Engage with customers on social media.",
      "Collect testimonials and reviews.",
    ],
  },
];

export function ActionPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-3xl">
          7-Day Business Action Plan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-0">
          {actionPlanData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.day}>
              <AccordionTrigger className="font-headline text-xl">
                Day {item.day}: {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pt-2">
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
