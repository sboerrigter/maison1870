export default function Wrap({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[880px] px-10">{children}</div>;
}
