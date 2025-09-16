"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useQueryState } from "nuqs";
import { createContext, useContext } from "react";

const NuqsDrawerContext = createContext<
  [string | null, (open: string | null) => void]
>(["", () => {}]);

export function NuqsDrawerProvider({
  children,
  shallow,
}: {
  children: React.ReactNode;
  shallow: boolean;
}) {
  const [open, setOpen] = useQueryState(shallow ? "drawer-shallow" : "drawer", {
    shallow,
  });
  return (
    <NuqsDrawerContext.Provider value={[open, setOpen] as const}>
      {children}
    </NuqsDrawerContext.Provider>
  );
}

export function NuqsDrawerTrigger() {
  const [, setOpen] = useContext(NuqsDrawerContext);
  return (
    <Button onClick={() => setOpen("true")}>Open Drawer (NOT SHALLOW)</Button>
  );
}

export function NuqsDrawerTriggerShallow() {
  const [, setOpen] = useContext(NuqsDrawerContext);
  return <Button onClick={() => setOpen("true")}>Open Drawer (SHALLOW)</Button>;
}

export function NuqsDrawer({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useContext(NuqsDrawerContext);
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
      <DrawerHeader>
        <DrawerTitle>Drawer</DrawerTitle>
        <DrawerDescription>This is a drawer</DrawerDescription>
      </DrawerHeader>
      {children}
    </DrawerContent>
  );
}
