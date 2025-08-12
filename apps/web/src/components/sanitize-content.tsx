"use client";

import DOMPurfiy from "dompurify";

export function SanitizeContent({ children }: { children: string }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurfiy.sanitize(children) }} />
  );
}
