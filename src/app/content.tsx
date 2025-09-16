export async function SlowContent() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <div>slow content</div>
    </>
  );
}
