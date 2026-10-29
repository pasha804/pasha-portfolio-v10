import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Cyber anime developer avatar
export const PROFILE_SRC = "/images/anime_dev.png";

type Status = "checking" | "ok" | "missing";

export function ProfileImage({
  className,
  imgClassName,
  alt = "Muhammad Mubashar — Pasha Dev",
  monogramClass = "text-lg",
  eager = false,
}: {
  className?: string;
  imgClassName?: string;
  alt?: string;
  monogramClass?: string;
  eager?: boolean;
}) {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => !cancelled && setStatus("ok");
    img.onerror = () => !cancelled && setStatus("missing");
    img.src = PROFILE_SRC;
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-surface-2", className)}>
      {status === "ok" ? (
        <img
          src={PROFILE_SRC}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover transition-opacity duration-300", imgClassName)}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          role="img"
          aria-label={alt}
        >
          <span
            className={cn("text-gradient font-display font-semibold tracking-tight", monogramClass)}
          >
            MM
          </span>
        </div>
      )}
    </div>
  );
}
