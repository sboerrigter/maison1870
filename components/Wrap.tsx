export default function Wrap({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
