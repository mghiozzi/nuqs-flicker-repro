"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
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
  const [open, setOpen] = useQueryState("drawer", { shallow: false });
  return (
    <Drawer
      open={!!open}
      onOpenChange={(open) => {
        if (!open) {
          setOpen(null);
        }
      }}
    >
      {children}
    </Drawer>
  );
}

export function NuqsDrawerContent({ children }: { children: React.ReactNode }) {
  return (
    <DrawerContent>
      <div>Some static content</div>
      {children}
    </DrawerContent>
  );
}
