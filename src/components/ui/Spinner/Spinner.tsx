export const Spinner: React.FC = () => (
  <svg
    className="size-6 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M12.5 24.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm0-2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M23.282 10.102a1 1 0 0 1 1.12.864 12 12 0 0 1 .099 1.535 1 1 0 1 1-2 0c0-.428-.028-.855-.082-1.28a1 1 0 0 1 .863-1.119Z"
      clipRule="evenodd"
    />

    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(12 0 0 12 12.5 12.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" />
      </radialGradient>
    </defs>
  </svg>
);
