"use client";

import { useEffect, useState } from "react";

export default function StatusLine() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={[
        "font-[family-name:var(--font-display)]",
        "text-[13px] sm:text-sm tracking-tight",
        "text-[color:var(--color-paper-dim)]",
        "transition-opacity duration-700 ease-out",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      aria-hidden="true"
    >
      <span className="text-[color:var(--color-brass-dim)]">$</span>{" "}
      git status --branch{" "}
      <span className="text-[color:var(--color-paper)]">danryuzaki/main</span>
      <br />
      <span className="select-none">{">"}</span> nothing to deploy yet, working tree{" "}
      <span className="text-[color:var(--color-brass)]">soon</span>
      <Cursor />
    </div>
  );
}

function Cursor() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 525);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-block w-[7px] h-[1em] -mb-[2px] ml-[2px] bg-[color:var(--color-brass)]"
      style={{ verticalAlign: "text-bottom", opacity: on ? 1 : 0 }}
    />
  );
}