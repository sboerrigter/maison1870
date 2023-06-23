export default function Email({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        className={`
          flex-none
          ${light ? "stroke-white" : "stroke-gray-800"}
        `}
        fill="none"
        height="20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      <a
        href="mailto:bonjour@maison1870.com"
        className={`
          py-2 pr-0 font-bold text-emerald-400 underline underline-offset-8 transition-colors duration-200
          ${light ? "hover:text-emerald-300" : "hover:text-emerald-500"}
        `}
      >
        bonjour@maison1870.com
      </a>
    </div>
  );
}
