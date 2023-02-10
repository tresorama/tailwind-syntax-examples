"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";

// =================================
// syntax highliher enabler
// render it once per app
// =================================

export const CodeSyntaxHighlighterEnabler = () => {
  let done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    Prism.highlightAll();
    done.current = true;
  }, []);

  return null;
};
