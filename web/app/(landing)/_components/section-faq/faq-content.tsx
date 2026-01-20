"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { api } from "@/lib/api";
import { QueryKeys } from "@/lib/query-keys";
import { FaqItem } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner"; // shadcn default toast
import FaqContentSkeleton from "./faq-content-skeleton";

export default function FaqContent() {
  const { data, isPending, error } = useQuery({
    queryKey: [QueryKeys.FaqGetAll],
    queryFn: async () => {
      const { data } = await api.get("/faqs");
      return data.data as FaqItem[];
    },
  });

  // show toast only when error happens
  useEffect(() => {
    if (error) {
      toast.error("Failed to load FAQ. Please try again.");
    }
  }, [error]);

  // loading OR error → show skeleton
  if (isPending || error) {
    return <FaqContentSkeleton />;
  }

  const faqs = data.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <Accordion collapsible type="single" defaultValue="0">
      {faqs.map((item, idx) => (
        <AccordionItem key={idx} value={`${idx}`}>
          <AccordionTrigger className="text-base md:text-lg">
            {item.question}
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-6">
            {item.answers.map(({ short, long }, idx) => (
              <div key={idx} className="flex gap-2">
                <div className="font-chillax font-semibold text-brand-dark-500">
                  {idx + 1}.
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-chillax font-semibold text-brand-dark-500">
                    {short}
                  </p>
                  <p className="font-jakarta-sans text-brand-dark-400/90">
                    {long}
                  </p>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
