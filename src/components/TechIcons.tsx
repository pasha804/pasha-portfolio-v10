import React from "react";
import freebuffLogo from "@/assets/freebuff.png";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  size?: number;
};

// 1. React Official Logo
export function ReactIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 2. TypeScript Official Logo
export function TypeScriptIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path
        d="M71.7 85.9c3.2 5.1 8 8 14.5 8 5.4 0 9-2.7 9-6.8 0-4.3-3.6-6.1-11.8-9.7-12-5.1-17.5-11.5-17.5-22 0-11.7 9.1-20.7 23.3-20.7 8.7 0 15.5 2.7 20.3 7.8l-7.7 8.9c-3.6-3.8-7.8-5.6-12.7-5.6-5 0-7.8 2.6-7.8 5.7 0 3.7 3.2 5.3 11 8.8 13.5 5.9 18.5 12.3 18.5 23 0 13-9.9 21.6-25.2 21.6-11.2 0-19.8-3.9-25.3-10.7l8.7-8.3zM49.2 46.2H65v11.3H33.4V46.2h15.8V104H33.4v-11.3h15.8V46.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 3. JavaScript Official Logo
export function JavaScriptIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path
        d="M39.6 104c-3.7 0-6.9-.6-9.6-1.8l2.2-11.8c2.4 1 5 1.6 7.7 1.6 4.9 0 7.7-2.4 7.7-8.4V46.2h14.6v35.8c0 14.3-8 22-22.6 22zm51.4 0c-12.8 0-21.4-6.8-24.6-16.7l12.8-5.2c1.8 5.4 5.9 8.9 11.8 8.9 5.3 0 8.7-2.6 8.7-6.3 0-4.1-3.6-5.8-10.7-8.9-12.8-5.6-18.7-11.8-18.7-21.9 0-12 9.5-20.2 23.3-20.2 10.3 0 17.5 4.3 21.3 12.3l-11.7 6.4c-2-4.1-5-6.3-9.5-6.3-4.5 0-7.3 2.4-7.3 5.7 0 3.6 2.9 5 10 8 13.5 5.8 19.4 12.1 19.4 22.8 0 13.7-10.2 21.4-24.8 21.4z"
        fill="#000000"
      />
    </svg>
  );
}

// 4. Python Official Dual-Snake Logo
export function PythonIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 110 110"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.4 2C27.5 2 29.2 13.6 29.2 13.6l.03 12h25.7v3.6H17.8s-15.8-1.8-15.8 25.1c0 26.9 13.8 26 13.8 26h8.2v-11.5s-.4-13.8 13.6-13.8h25.5s13.2.2 13.2-12.8V15s1.9-13-21.9-13zm-14 8.2c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z"
        fill="#3776AB"
      />
      <path
        d="M55.6 108c26.9 0 25.2-11.6 25.2-11.6l-.03-12H55.1v-3.6h37.1s15.8 1.8 15.8-25.1c0-26.9-13.8-26-13.8-26h-8.2v11.5s.4 13.8-13.6 13.8H46.9s-13.2-.2-13.2 12.8V95s-1.9 13 21.9 13zm14-8.2c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z"
        fill="#FFD43B"
      />
    </svg>
  );
}

// 5. FastAPI Official Logo
export function FastAPIIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="60" fill="#059669" />
      <path
        d="M60.8 24.2L32 68.3h28.8L54.4 103.8 96 56.7H67.2l6.4-32.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 6. PostgreSQL Official Elephant Logo
export function PostgreSQLIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="60" fill="#336791" />
      <path
        d="M64 26c-18.4 0-33.3 14-34.7 32-.3 3.9-.2 7.7.3 11.5 2.1 15.6 14.8 27.8 30.5 29.3 4.1.4 8.2.2 12.1-.6 1.7-.4 3.4-.9 5-1.5 1.5-.6 3-1.3 4.4-2.1l-4.5-9.6c-2.3 1.2-4.8 2.2-7.4 2.8-2.6.6-5.3.9-8.1.7-10.8-.7-19.5-9.1-20.9-19.8-.3-2.6-.3-5.2 0-7.8.9-10.8 9.9-19.4 20.8-19.4 6 0 11.6 2.6 15.5 6.9 2.5 2.7 4.2 6.2 4.9 10H64v10.5h27.8c-.3 6.3-2.5 12.3-6.2 17.2l7.7 7.2c5.8-7.3 9.2-16.4 9.6-26.1.1-2.9-.2-5.7-.8-8.5C99.8 41.5 83.5 26 64 26z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 7. Tailwind CSS Official Logo
export function TailwindIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#0B1120" />
      <path
        d="M64 42.5c-11.2 0-18.2 5.6-21 16.8 4.2-4.2 9.1-5.6 14.7-4.2 3.2.8 5.5 3.1 8 5.7 4.2 4.2 9 9.2 19.5 9.2 11.2 0 18.2-5.6 21-16.8-4.2 4.2-9.1 5.6-14.7 4.2-3.2-.8-5.5-3.1-8-5.7-4.2-4.2-9.1-9.2-19.5-9.2zm-21 21c-11.2 0-18.2 5.6-21 16.8 4.2-4.2 9.1-5.6 14.7-4.2 3.2.8 5.5 3.1 8 5.7 4.2 4.2 9 9.2 19.5 9.2 11.2 0 18.2-5.6 21-16.8-4.2 4.2-9.1 5.6-14.7 4.2-3.2-.8-5.5-3.1-8-5.7-4.2-4.2-9-9.2-19.5-9.2z"
        fill="#38BDF8"
      />
    </svg>
  );
}

// 8. Docker Official Whale Logo
export function DockerIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#1D63ED" />
      <path
        d="M112.5 61.2c-2.3-1.6-7.3-2.3-12-.4-.8-4.8-4.4-8.8-9.4-10.4l-3.3-1-2 2.8c-4.4 6.2-4.7 13.9-1.2 20.3-4.5 2.6-11.2 3.8-19.7 3.8H18.2c-1.3 4.9-.7 13.2 4.1 19.4 6.4 8.2 17.5 12.3 32.8 12.3 26.6 0 46.8-13.8 53.6-36.9 7.6-.4 12.5-4.8 14-6.4l-10.2-3.5zm-59.8-7.7h10.9v10.9H52.7V53.5zm-14 0h10.9v10.9H38.7V53.5zm-14 0h10.9v10.9H24.7V53.5zm14-14h10.9v10.9H38.7V39.5zm14 0h10.9v10.9H52.7V39.5zm14 0h10.9v10.9H66.7V39.5zm14 14h10.9v10.9H80.7V53.5zm-14 0h10.9v10.9H66.7V53.5zm28-14h10.9v10.9H94.7V39.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 9. Redis Official Logo
export function RedisIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#DC382D" />
      <path
        d="M26 44l38-16 38 16-38 16-38-16zm0 24l38 16 38-16v16l-38 16-38-16V68zm0 24l38 16 38-16v16l-38 16-38-16V92z"
        fill="#FFFFFF"
        opacity="0.95"
      />
      <circle cx="64" cy="44" r="5" fill="#DC382D" />
    </svg>
  );
}

// 10. Vite Official Logo
export function ViteIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#18181B" />
      <path
        d="M103.5 25.5L66.7 93.6c-1.1 2-4 2-5.1 0L24.8 25.5c-1.3-2.4.7-5.3 3.4-4.8l35 6.4c.5.1 1 .1 1.5 0l35.4-6.4c2.7-.5 4.7 2.4 3.4 4.8z"
        fill="url(#vite-grad-1)"
      />
      <path
        d="M78.6 18.5l-32.8 6.4-3.5 35.8 19.3-3.2-3.8 28.9 29.4-48.4-15.5 2.5 6.9-22z"
        fill="url(#vite-grad-2)"
      />
      <defs>
        <linearGradient id="vite-grad-1" x1="25" y1="20" x2="100" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-grad-2" x1="42" y1="18" x2="78" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset=".08" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 11. OpenAI Official Logo
export function OpenAIIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#10A37F" />
      <path
        d="M100.8 54.4c-.8-6.4-5-11.8-11.1-14.2-1.7-.7-3.6-1.1-5.5-1.1-1.3 0-2.6.2-3.8.6-2.5-6.7-7.9-11.7-14.8-13.6-7.8-2.2-16.1.7-20.7 7.2-2.3 3.3-3.6 7.2-3.6 11.3v4.4c-4.4 1-8.2 3.6-10.8 7.3-4.3 6.1-4.7 14.2-1.2 20.7-.7 1.7-1.1 3.6-1.1 5.5 0 8.3 5.4 15.5 13.4 17.8 2.2 6.7 7.6 11.7 14.6 13.6 7.8 2.2 16.1-.7 20.7-7.2 2.3-3.3 3.6-7.2 3.6-11.3v-4.4c4.4-1 8.2-3.6 10.8-7.3 4.4-6.2 4.8-14.3 1.2-20.8 1.4-2.8 2.1-5.9 2.1-9 0-1.7-.2-3.3-.6-4.8zm-33.1 48.8c-4.4 0-8.5-2.4-10.7-6.2l-.8-1.4 17.5-10.1c1.3.8 2.8 1.2 4.4 1.2 4.6 0 8.4-3.8 8.4-8.4v-20.2l6.1 3.5c4.4 2.5 7.1 7.3 7.1 12.4 0 7.8-6.4 14.2-14.2 14.2h-17.8v15zm-28.5-17.7c-2.2-3.8-2.2-8.5 0-12.4l17.5-10.1v20.2c0 1.6.4 3.1 1.2 4.4l-17.5 10.1-.8-1.4c-1-1.9-1.5-4-1.5-6.2 0-1.6.4-3.1 1.1-4.6zm-4.7-32.9c1.6-4.1 5.4-7 9.8-7.7v20.2c0 1.6.8 3.1 2.1 4l-17.5 10.1c-2.2-3.8-2.2-8.5 0-12.4l5.6-14.2zm52.4-3.5l-17.5 10.1V39c0-1.6-.4-3.1-1.2-4.4l17.5-10.1.8 1.4c2.2 3.8 2.2 8.5 0 12.4l.4.8zm9.5 21.6l-17.5-10.1c0-1.6-.8-3.1-2.1-4l17.5-10.1c2.2 3.8 2.2 8.5 0 12.4l-5.6 14.2c-1.6 4.1-5.4 7-9.8 7.7v-20.2c0 1.6.8 3.1 2.1 4zm-37.3 11.2l-11.8-6.8 11.8-6.8 11.8 6.8-11.8 6.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 12. Git Official Logo
export function GitIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#F05032" />
      <path
        d="M93.3 57.3L70.7 34.7a6.8 6.8 0 00-9.6 0l-5.2 5.2 12.2 12.2a8.2 8.2 0 0110.3 10.3l11.7 11.7a8.2 8.2 0 11-4.8 4.8L74 67.3v17.4a8.2 8.2 0 11-6.8 0V65.8a8.2 8.2 0 01-4.4-10.8L50.7 42.8l-16 16a6.8 6.8 0 000 9.6l22.6 22.6a6.8 6.8 0 009.6 0l26.4-26.4a6.8 6.8 0 000-9.6l-.8-.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 13. GitHub Official Octocat Logo
export function GitHubIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#24292F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 24C41.9 24 24 41.9 24 64c0 17.7 11.5 32.7 27.4 38 2 .4 2.7-.9 2.7-1.9v-6.8c-11.1 2.4-13.5-5.4-13.5-5.4-1.8-4.6-4.4-5.8-4.4-5.8-3.6-2.5.3-2.4.3-2.4 4 0.3 6.1 4.1 6.1 4.1 3.6 6.1 9.3 4.3 11.6 3.3.4-2.6 1.4-4.3 2.5-5.3-8.9-1-18.2-4.4-18.2-19.8 0-4.4 1.6-8 4.1-10.8-.4-1-.18-5.1.4-10.7 0 0 3.4-1.1 11.1 4.1a38.6 38.6 0 0120.2 0c7.7-5.2 11.1-4.1 11.1-4.1 2.2 5.6 0.8 9.7.4 10.7 2.6 2.8 4.1 6.4 4.1 10.8 0 15.4-9.4 18.7-18.3 19.7 1.4 1.2 2.7 3.7 2.7 7.4v11c0 1 .7 2.3 2.8 1.9C92.5 96.7 104 81.7 104 64c0-22.1-17.9-40-40-40z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 14. VS Code Official Ribbon Logo
export function VSCodeIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#1E1E1E" />
      <path
        d="M93.8 22.8a6.3 6.3 0 00-6.1 1.2L55.5 52.3 39.8 40.5a4.2 4.2 0 00-4.9-.1L24 47.7a4.2 4.2 0 00-.7 6.1l14.4 13.7L23.3 81.3a4.2 4.2 0 00.7 6.1l10.9 7.3a4.2 4.2 0 004.9-.1l15.7-11.8 32.2 28.3a6.3 6.3 0 0010.4-4.7V27.5a6.3 6.3 0 00-4.3-4.7zm-8.8 32.9L66.7 67.5l18.3 11.8V55.7z"
        fill="#007ACC"
      />
    </svg>
  );
}

// 15. Cursor AI Editor Icon
export function CursorIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#000000" />
      <path
        d="M64 26L26 88l38-16 38 16L64 26z"
        fill="#00E5FF"
      />
      <path
        d="M64 26v46l38 16L64 26z"
        fill="#00B0FF"
        opacity="0.8"
      />
    </svg>
  );
}

// 16. HTML5 Official Shield Logo
export function HTMLIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 113.8L15 2h98l-10 111.8L64 126l-39-12.2z" fill="#E44D26" />
      <path d="M64 117.8l31.5-9.8 8.4-94H64v103.8z" fill="#F16529" />
      <path
        d="M64 52.8H48.4l-1.1-12h16.7V29.7H34.4l3.3 35.2H64V52.8zm0 30.5l-.2.1-13.4-3.6-.9-9.8H38l1.7 19.3 24.3 6.7.2-.1v-12.6zm0-53.6v12.1h16.7l-1.1 12H64v12.1h26.4l-2.6 28.6L64 89.2V102l24.3-6.7 3.4-38.3 3.3-37.3H64z"
        fill="#EBEBEB"
      />
    </svg>
  );
}

// 17. CSS3 Official Shield Logo
export function CSSIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 113.8L15 2h98l-10 111.8L64 126l-39-12.2z" fill="#1572B6" />
      <path d="M64 117.8l31.5-9.8 8.4-94H64v103.8z" fill="#33A9DC" />
      <path
        d="M64 53.9h14.4l-1.4 15.2L64 72.8V86l24.4-6.8 3.5-39.6H64v14.3zm0-25.2h28.8l1.3-14.4H64v14.4zm0 60.1l-.2.1-13.4-3.6-.9-9.8H38l1.7 19.3 24.3 6.7v-12.7zm0-20.6H51.4l-1.1-12H64V33.8H34.4l3.3 35.2H64v-1.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 18. AI Agents / Neural Intelligence Logo
export function AIAgentsIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#7928CA" />
      <path
        d="M64 30c-18.8 0-34 15.2-34 34 0 14.8 9.5 27.4 22.8 32v12h22.4V96c13.3-4.6 22.8-17.2 22.8-32 0-18.8-15.2-34-34-34zm-14 44c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm28 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
        fill="#FFFFFF"
      />
      <circle cx="64" cy="46" r="4" fill="#00E5FF" />
    </svg>
  );
}

// 19. REST API Interconnected Cloud Logo
export function RESTIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="20" fill="#0F172A" />
      <path
        d="M40 76a16 16 0 110-32 16 16 0 010 32zm48 0a16 16 0 110-32 16 16 0 010 32zM48 60h32"
        stroke="#38BDF8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="64" cy="60" r="5" fill="#38BDF8" />
    </svg>
  );
}

// 20. Google Antigravity Agentic Platform Official Brand Logo
export function AntigravityIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 114 114"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="114" height="114" rx="22" fill="#0A0E1A" />
      <g transform="translate(1, 1)">
        {/* Official Google Antigravity Portal Core */}
        <path
          d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z"
          fill="#3186FF"
        />
        <mask
          id="agy-mask"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="13"
          y="18"
          width="85"
          height="78"
        >
          <path
            d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z"
            fill="black"
          />
        </mask>
        <g mask="url(#agy-mask)">
          <ellipse cx="66" cy="35" rx="30" ry="30" fill="#FC413D" />
          <ellipse cx="25" cy="35" rx="25" ry="25" fill="#FFE432" />
          <ellipse cx="25" cy="75" rx="28" ry="28" fill="#00B95C" />
          <ellipse cx="75" cy="75" rx="28" ry="28" fill="#3186FF" />
        </g>
      </g>
    </svg>
  );
}

// 21. Kiro AI Official Brand Mascot Logo (from kiro.dev)
export function KiroIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 1200 1200"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1200" height="1200" rx="260" fill="#9046FF" />
      <mask
        id="kiro_mask"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="272"
        y="202"
        width="655"
        height="796"
      >
        <path d="M926.578 202.793H272.637V997.857H926.578V202.793Z" fill="white" />
      </mask>
      <g mask="url(#kiro_mask)">
        <path
          d="M398.554 818.914C316.315 1001.03 491.477 1046.74 620.672 940.156C658.687 1059.66 801.052 970.473 852.234 877.795C964.787 673.567 919.318 465.357 907.64 422.374C827.637 129.443 427.623 128.946 358.8 423.865C342.651 475.544 342.402 534.18 333.458 595.051C328.986 625.86 325.507 645.488 313.83 677.785C306.873 696.424 297.68 712.819 282.773 740.645C259.915 783.881 269.604 867.113 387.87 823.883L399.051 818.914H398.554Z"
          fill="white"
        />
        <path
          d="M636.123 549.353C603.328 549.353 598.359 510.097 598.359 486.742C598.359 465.623 602.086 448.977 609.293 438.293C615.504 428.852 624.697 424.131 636.123 424.131C647.555 424.131 657.492 428.852 664.447 438.541C672.398 449.474 676.623 466.12 676.623 486.742C676.623 525.998 661.471 549.353 636.375 549.353H636.123Z"
          fill="black"
        />
        <path
          d="M771.24 549.353C738.445 549.353 733.477 510.097 733.477 486.742C733.477 465.623 737.203 448.977 744.41 438.293C750.621 428.852 759.814 424.131 771.24 424.131C782.672 424.131 792.609 428.852 799.564 438.541C807.516 449.474 811.74 466.12 811.74 486.742C811.74 525.998 796.588 549.353 771.492 549.353H771.24Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

// 22. Freebuff Official Platform Brand Logo
export function FreebuffIcon({ className = "size-8", size }: IconProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#091512] p-1.5 shadow-md ring-1 ring-emerald-500/30",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={freebuffLogo}
        alt="Freebuff"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

// 23. OpenCode Official Brand Square Logo (from sst/opencode)
export function OpenCodeIcon({ className = "size-8", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="300" height="300" rx="52" fill="#18181B" />
      <g transform="translate(30, 0)">
        <g clipPath="url(#clip_opencode)">
          <mask
            id="mask_opencode"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="240"
            height="300"
          >
            <path d="M240 0H0V300H240V0Z" fill="white" />
          </mask>
          <g mask="url(#mask_opencode)">
            <path d="M180 240H60V120H180V240Z" fill="#52525B" />
            <path d="M180 60H60V240H180V60ZM240 300H0V0H240V300Z" fill="#FFFFFF" />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip_opencode">
          <rect width="240" height="300" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// 24. Instagram Official Brand Vector
export function InstagramIcon({ className = "size-6", size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

// 25. Threads Official Brand Vector
export function ThreadsIcon({ className = "size-6", size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
    </svg>
  );
}

// 26. TikTok Official Brand Vector
export function TikTokIcon({ className = "size-6", size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// 27. LinkedIn Official Brand Vector
export function LinkedInIcon({ className = "size-6", size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
