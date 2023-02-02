import classNames from "classnames";

export default function Wrap({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={classNames(
        className,
        "mx-auto w-full max-w-[1200px] px-5 md:px-10"
      )}
    >
      {children}
    </div>
  );
}
