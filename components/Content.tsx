import Wrap from "@/components/Wrap";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <main className="my-section text-center">
      <Wrap className="content max-w-[880px]">{children}</Wrap>
    </main>
  );
}
