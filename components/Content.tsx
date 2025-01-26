import Wrap from "@/components/Wrap";

export default function Content({
  children,
  id = undefined,
}: {
  children: React.ReactNode;
  id: string | undefined;
}) {
  return (
    <main className="my-section text-center scroll-m-12 md:scroll-m-16" id={id}>
      <Wrap className="content max-w-[800px]">{children}</Wrap>
    </main>
  );
}
