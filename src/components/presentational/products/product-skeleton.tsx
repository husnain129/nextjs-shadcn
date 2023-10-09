import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="grid mx-auto mt-10 md:grid-cols-3 sm:grid-cols-1 gap-4">
      {Array(10)
        .fill({})
        .map((_, idx) => (
          <div
            key={idx}
            className="max-w-sm rounded overflow-hidden shadow-lg m-2"
          >
            <Skeleton className="h-[200px] w-full" />
            <div className="px-6 py-4 flex flex-col gap-1">
              <Skeleton className="h-5" />
              <Skeleton className="h-5" />
              <Skeleton className="h-5" />
              <Skeleton className="h-5" />
              <Skeleton className="h-5" />
            </div>
            <div className="px-6 pt-4 pb-2">
              <Skeleton className="w-80 h-20" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductSkeleton;
