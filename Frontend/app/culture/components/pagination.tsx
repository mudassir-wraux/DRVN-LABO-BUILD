"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ currentPage, totalPages, activeTag }) {
  const router = useRouter();
  const params = useSearchParams();

  const goToPage = (page) => {
    const query = new URLSearchParams(params.toString());
    query.set("page", String(page));

    if (activeTag) {
      query.set("tag", activeTag);
    }

    router.push(`/culture?${query.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-10 gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="px-3 py-2 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-2 border rounded ${
              page === currentPage ? "bg-black text-white" : ""
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="px-3 py-2 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
