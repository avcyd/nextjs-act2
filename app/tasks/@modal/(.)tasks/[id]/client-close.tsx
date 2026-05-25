"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function ModalClose() {
  const router = useRouter();
  const handleClose = () => {
    try {
      // Prefer going back in history to return to the previous UI state
      if (typeof window !== 'undefined' && window.history.length > 1) {
        window.history.back();
        // if back didn't change path after a short delay, ensure we land on /tasks
        setTimeout(() => {
          if (window.location.pathname !== '/tasks') {
            router.replace('/tasks');
          }
        }, 120);
        return;
      }
    } catch (e) {
      // ignore
    }

    // Fallback navigation
    router.replace('/tasks');
  };

  return (
    <button
      onClick={handleClose}
      className="w-full inline-block text-center bg-white text-black px-4 py-2 rounded font-semibold hover:bg-zinc-200 transition"
    >
      Close Modal
    </button>
  );
}
