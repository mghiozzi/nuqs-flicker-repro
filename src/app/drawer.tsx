"use client";
import { Button } from "@/components/ui/button";
import { useQueryState } from "nuqs";

export function NuqsDrawerTrigger() {
  const [, setOpen] = useQueryState("drawer", { shallow: false });
  return (
    <Button onClick={() => setOpen("true")}>Open Drawer (NOT SHALLOW)</Button>
  );
}

export function NuqsDrawerTriggerShallow() {
  const [, setOpen] = useQueryState("drawer", { shallow: true });
  return <Button onClick={() => setOpen("true")}>Open Drawer (SHALLOW)</Button>;
}

export function NuqsDrawer({ children }: { children: React.ReactNode }) {
  const [open] = useQueryState("drawer", { shallow: false });
  console.log("NuqsDrawer", open);
  return (
    <div>
      Drawer Open: {!!open ? "true" : "false"} {children}
    </div>
  );
}

export function NuqsDrawerContent({ children }: { children: React.ReactNode }) {
  const [, setOpen] = useQueryState("drawer", { shallow: false });
  return (
    <>
      Content:
      {children}
      <Button onClick={() => setOpen(null)}>Reset Drawer</Button>
    </>
  );
}
