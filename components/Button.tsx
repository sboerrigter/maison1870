import Link from "next/link";

export default function Button({
  blackShadow,
  className,
}: {
  blackShadow?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`
        bg-emerald-400 hover:bg-emerald-500 text-white
        font-semibold
        inline-flex items-center justify-center
        px-8 py-3 rounded-full
        ${
          blackShadow
            ? "shadow-md shadow-black/10"
            : "shadow-lg shadow-emerald-500/50"
        }
        ${className}
      `}
      href="https://www.airbnb.com/rooms/781840949977429677"
      target="_blank"
      rel="nofollow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-3"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      Availability & bookings
    </Link>
  );
}
