import React from "react";

// This is the dedicated layout for the (blueprint) route group.
// It ensures that the pages within this group do not inherit the root layout.
export default function BlueprintGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}