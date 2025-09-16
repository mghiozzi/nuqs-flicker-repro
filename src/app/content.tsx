import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export async function SlowContent() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <DrawerHeader>
        <DrawerTitle>Slow Content</DrawerTitle>
        <DrawerDescription>This is a slow content</DrawerDescription>
      </DrawerHeader>
      <div>This is a slow content</div>
    </>
  );
}
