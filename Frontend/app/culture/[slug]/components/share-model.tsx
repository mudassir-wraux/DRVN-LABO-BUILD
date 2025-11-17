"use client";

import * as Dialog from "@radix-ui/react-dialog";

interface ShareModalProps {
  postId: string;
  link: string;
}

export default function ShareModal({ postId, link }: ShareModalProps) {
  async function handleShare(platformLink: string) {
    window.open(platformLink, "_blank", "noopener,noreferrer");

    try {
      await fetch("/api/shares", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
    } catch (err) {
      console.error("Failed to increment share count", err);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="mt-4 underline">Share</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c0c0c0] p-6 rounded max-w-sm w-full z-50">
          <Dialog.Title className="sr-only">Share this article</Dialog.Title>
          <div className="flex flex-col gap-3">
            <button
              className="underline text-left"
              onClick={() => handleShare(`https://x.com/intent/tweet?url=${link}`)}
            >
              X
            </button>
            <button
              className="underline text-left"
              onClick={() => handleShare(`https://facebook.com/sharer/sharer.php?u=${link}`)}
            >
              Facebook
            </button>
            <button
              className="underline text-left"
              onClick={() => handleShare(`https://warpcast.com/~/compose?text=${link}`)}
            >
              Farcaster
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
