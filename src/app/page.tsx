import { SlowContent } from "@/app/content";
import {
  NuqsDrawer,
  NuqsDrawerContent,
  NuqsDrawerTrigger,
  NuqsDrawerTriggerShallow,
} from "@/app/drawer";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams: Promise<{ drawer: string }>;
}) {
  const { drawer } = await props.searchParams;
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <NuqsDrawerTrigger />
        <NuqsDrawerTriggerShallow />
        <NuqsDrawer>
          <NuqsDrawerContent>
            {drawer === "true" ? (
              <Suspense fallback={<div>Loading...</div>}>
                <SlowContent />
              </Suspense>
            ) : null}
          </NuqsDrawerContent>
        </NuqsDrawer>
      </main>
    </div>
  );
}
