"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function ShareModal({ post }) {
  const link = `https://drvn.app/drvn-culture/${post.slug}`;

  return (
    <Dialog.Root>
      <Dialog.Trigger className="mt-4 underline">Share</Dialog.Trigger>

      <Dialog.Content className="p-6 bg-neutral-900 rounded">
        <a href={`https://x.com/intent/tweet?url=${link}`}>X</a><br/>
        <a href={`https://facebook.com/sharer/sharer.php?u=${link}`}>Facebook</a><br/>
        <a href={`https://warpcast.com/~/compose?text=${link}`}>Farcaster</a>
      </Dialog.Content>
    </Dialog.Root>
  );
}
