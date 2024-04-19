export default function Logo({
  className = "",
  length = 32,
}: {
  className?: string;
  length?: number;
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={length}
        height={length}
        fill="none"
        className={className}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 0h14c2.122 0 4.157 1.054 5.657 2.929C21.157 4.804 22 7.348 22 10s-.843 5.196-2.343 7.071S16.122 20 14 20l2.667 4h4.668L19 19.997c1.227-.914 2.402-2.063 3.477-4.286L32 31.999h-6L23.668 28h-4.335L22 32h-6L8 20H6v12H0V0Zm12 14a4 4 0 0 0 0-8H6v8h6Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}
