"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityProvider() {
  useEffect(() => {
    Clarity.init("v9lpn2pedw");
  }, []);

  return null;
}
