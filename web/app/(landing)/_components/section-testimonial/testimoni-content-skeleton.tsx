import { Skeleton } from "@/components/skeleton";

export default function TestimoniContentSkeleton() {
  return (
    <div className="flex gap-8 overflow-hidden">
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="md:w-lg w-screen shrink-0">
          <div className="relative p-6 border border-gray-200 rounded-4xl bg-brand-white-100 shadow w-[90%] md:w-full mx-auto md:mx-0">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar skeleton */}
              <Skeleton className="rounded-full size-16 shrink-0" />

              <div className="flex flex-col gap-3 flex-1 w-full">
                {/* Username and city skeleton */}
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 md:h-7 w-32" />
                  <Skeleton className="h-6 md:h-7 w-4" />
                  <Skeleton className="h-5 md:h-6 w-24" />
                </div>

                {/* Testimoni text skeleton - multiple lines */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </div>

            {/* Icon skeleton */}
            <div className="absolute -top-12 -right-4">
              <Skeleton className="size-32 rounded-2xl rotate-9" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
