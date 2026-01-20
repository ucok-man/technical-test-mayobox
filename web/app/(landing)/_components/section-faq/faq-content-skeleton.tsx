import { Skeleton } from "@/components/skeleton";
import { cn } from "@/lib/utils";

export default function FaqContentSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "py-3 px-4 rounded-2xl space-y-3",
            idx < 1 && "bg-brand-primary-50"
          )}
        >
          {/* Question skeleton */}
          <div className="flex items-start justify-between gap-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="size-6 shrink-0 rounded-full" />
          </div>

          {/* Answer skeleton - only show for first 2 items to simulate some open */}
          {idx < 1 && (
            <div className="flex flex-col gap-6 pt-3">
              {[...Array(2)].map((_, answerIdx) => (
                <div key={answerIdx} className="flex gap-2">
                  {/* Number */}
                  <Skeleton className="h-5 w-4 shrink-0" />

                  <div className="flex flex-col gap-2 flex-1">
                    {/* Short answer */}
                    <Skeleton className="h-5 w-2/3" />
                    {/* Long answer - multiple lines */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
