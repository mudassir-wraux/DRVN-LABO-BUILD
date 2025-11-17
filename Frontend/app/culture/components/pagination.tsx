"use client";

import Link from "next/link";

export default function Pagination({ page, totalPages, activeTag }) {
  const generateUrl = (p) =>
    activeTag ? `/culture/page/${p}?tag=${activeTag}` : `/culture/page/${p}`;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      {page > 1 && (
        <Link
          href={generateUrl(page - 1)}
          className="px-3 py-1 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition"
        >
          Previous
        </Link>
      )}

      {pages.map((p) => (
        <Link
          key={p}
          href={generateUrl(p)}
          className={`px-3 py-1 rounded-lg text-sm transition ${
            p === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {p}
        </Link>
      ))}

      {page < totalPages && (
        <Link
          href={generateUrl(page + 1)}
          className="px-3 py-1 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition"
        >
          Next
        </Link>
      )}
    </div>
  );
}
