export default function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[840px] px-5 md:px-10">{children}</div>
  );
}
