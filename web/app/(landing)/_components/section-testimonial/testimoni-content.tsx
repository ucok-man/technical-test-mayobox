"use client";

import AutoSwiper from "@/components/auto-swipper";
import { api } from "@/lib/api";
import { QueryKeys } from "@/lib/query-keys";
import { TestimoniItem } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";
import TestimoniCard from "./testimoni-card";
import TestimoniContentSkeleton from "./testimoni-content-skeleton";

export default function TestimoniContent() {
  const isMD = useMediaQuery("(max-width: 768px)");

  const { data, isPending, error } = useQuery({
    queryKey: [QueryKeys.TestimoniAll],
    queryFn: async () => {
      const { data } = await api.get("/testimonies");
      return data.data as TestimoniItem[];
    },
  });

  // show toast only when error happens
  useEffect(() => {
    if (error) {
      toast.error("Failed to load testimonies. Please try again.");
    }
  }, [error]);

  // loading OR error → show skeleton
  if (isPending || error) {
    return <TestimoniContentSkeleton />;
  }

  return (
    <AutoSwiper
      items={data}
      spaceBetween={isMD ? 0 : 32}
      className="overflow-visible!"
      renderItem={(item) => (
        <TestimoniCard
          userName={item.user.username}
          userAvatar={item.user.imageUrl}
          userCity={item.user.city}
          testimoni={item.testimoni}
          icon={item.iconUrl}
        />
      )}
    />
  );
}
