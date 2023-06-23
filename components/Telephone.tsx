export default function Telephone({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        className={`
          flex-none
          ${light ? "stroke-white" : "stroke-gray-800"}
        `}
        fill="none"
        height="20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>

      <a
        href="tel:+33632004114"
        className={`
          py-2 pr-0 font-bold text-emerald-400 underline underline-offset-8 transition-colors duration-200
          ${light ? "hover:text-emerald-300" : "hover:text-emerald-500"}
        `}
      >
        +33 6 32 00 41 14
      </a>
    </div>
  );
}
