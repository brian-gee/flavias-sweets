export default function Logo() {
  return (
    <div>
      <a
        href="/"
        aria-label="Flavia's Sweets"
        title="Flavia's Sweets"
        className="inline-flex items-center">
        <svg
          className="w-8 text-pink-400"
          viewBox="0 0 24 24"
          strokeLinejoin="round" // Change camelCase to kebab-case
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10" // Change camelCase to kebab-case
          stroke="currentColor"
          fill="none">
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide hover:text-pink-400">
          Flavia's Sweets
        </span>
      </a>
    </div>
  );
}
