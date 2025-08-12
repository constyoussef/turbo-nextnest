import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { calcPageNumbers } from "@/lib/helpers";
import Link from "next/link";

interface CostomPaginationProps {
  currentPage: number;
  totalPages: number;
  pageNeighbours?: number;
  className?: string;
}

export function CostomPagination({
  currentPage,
  totalPages,
  pageNeighbours = 1,
  className,
}: CostomPaginationProps) {
  const pageNumbers = calcPageNumbers({
    pageNeighbours,
    totalPages,
    currentPage,
  });

  return (
    <Pagination className="mt-2 mb-4 flex items-center gap-2">
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationItem>
            <Link href={`?page=${currentPage - 1}`}>
              <PaginationPrevious
                // onClick={() => router.push(`?page=${currentPage - 1}`)}
                className="cursor-pointer rounded-md bg-slate-200 p-2 transition-colors duration-300 hover:bg-sky-500 hover:text-white"
              />
            </Link>
          </PaginationItem>
        )}
        <div className="flex items-center gap-2">
          {pageNumbers.map((page, index) =>
            typeof page !== "string" ? (
              <Link
                key={index}
                href={`?page=${page}`}
                className="cursor-pointer"
              >
                <Button
                  variant={page === currentPage ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  {page}
                </Button>
              </Link>
            ) : (
              <button key={index}>{page}</button>
            ),
          )}
        </div>
        {currentPage !== totalPages && (
          <PaginationItem>
            <Link href={`?page=${currentPage + 1}`}>
              <PaginationNext
                // onClick={() => router.push(`?page=${currentPage + 1}`)}
                className="cursor-pointer rounded-md bg-slate-200 p-2 transition-colors duration-300 hover:bg-sky-500 hover:text-white"
              />
            </Link>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
