"use client";

import { useEffect } from "react";

export default function ClientUrlFix({ id }: { id: string }) {
  useEffect(() => {
    try {
      const current = window.location.pathname;
      // Only rewrite when the intercepted path is present to avoid clobbering other navigation
      if (current.includes("/tasks/tasks/")) {
        window.history.replaceState(null, "", `/tasks/${id}`);
      }
    } catch (e) {
      // noop
    }
  }, [id]);

  return null;
}
