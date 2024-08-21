import { LucideProps } from "lucide-react";

export const Icons = {
  user: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#FFFFFF"
      fill="none"
    >
      <path
        d="M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.67837 14.2307 10.1368 13.7719 12.5 14.1052C13.3575 14.2261 14.1926 14.4514 15 14.7809"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M18.5 22L18.5 15M15 18.5H22"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  ),
  home: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"></path>
    </svg>
  ),
  X: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z"></path>
    </svg>
  ),
  linkedin: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
    </svg>
  ),
  meta: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M244,149.31c0,16.84-3.37,31.33-9.75,41.91C226.06,204.81,213.33,212,197.44,212c-30.33,0-50.72-38.05-72.3-78.33C109.46,104.41,90,68,74,68c-7.71,0-17.16,9.37-24.66,24.45A133.82,133.82,0,0,0,36,149.31c0,12.3,2.24,22.78,6.3,29.52,3.77,6.26,8.94,9.17,16.26,9.17,13.75,0,30.63-29,36.18-38.49a12,12,0,0,1,20.74,12.09c-8.91,15.28-16.53,26-24,33.78C80.75,206.56,70,212,58.56,212c-15.89,0-28.62-7.19-36.81-20.78C15.37,180.64,12,166.15,12,149.31,12,105.34,35.58,44,74,44c30.33,0,50.72,38.05,72.3,78.33C162,151.59,181.47,188,197.44,188c7.32,0,12.49-2.91,16.26-9.17,4.06-6.74,6.3-17.22,6.3-29.52a133.82,133.82,0,0,0-13.33-56.86C199.17,77.37,189.72,68,182,68c-5.72,0-12.61,5-20.49,14.83a12,12,0,0,1-18.74-15C155.62,51.8,168.45,44,182,44c17.65,0,34,13.41,46.15,37.76A159,159,0,0,1,244,149.31Z"></path>
    </svg>
  ),
};
