import {
  useState,
  type CSSProperties,
  type ComponentPropsWithoutRef,
} from "react";

/* ---------------------------------------------------------------
   NoturnoLogo — copy this part into your project
   Requires the Bricolage Grotesque font. Add to your index.html:
   <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&display=swap" rel="stylesheet">
   --------------------------------------------------------------- */

/** CSSProperties widened to accept custom properties (--foo). */
type StyleWithVars = CSSProperties & Record<`--${string}`, string>;

export interface NoturnoLogoProps extends Omit<
  ComponentPropsWithoutRef<"span">,
  "color" | "children"
> {
  /** Word rendered in the accent color. */
  text?: string;
  /** Render the trailing period in `dotColor`, unlit. */
  dot?: boolean;
  /** Font size in px. The glow scales from this. */
  size?: number;
  /** Accent color as hex (#RGB or #RRGGBB). */
  color?: string;
  /** Color of the trailing period. */
  dotColor?: string;
  /** Glow strength. 0 disables it, 1 is default, >1 is brighter. */
  glow?: number;
  /** Play the flicker-on animation once when mounted. */
  ignite?: boolean;
}

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

const igniteCss = `
@keyframes noturno-ignite {
  0%   { opacity: .15; text-shadow: none }
  12%  { opacity: 1;   text-shadow: var(--noturno-glow) }
  18%  { opacity: .2;  text-shadow: none }
  26%  { opacity: 1;   text-shadow: var(--noturno-glow) }
  32%  { opacity: .35; text-shadow: none }
  40%, 100% { opacity: 1; text-shadow: var(--noturno-glow) }
}
.noturno-logo--ignite { animation: noturno-ignite 1.5s ease-out 1 both }
@media (prefers-reduced-motion: reduce) {
  .noturno-logo--ignite { animation: none }
}
`;

export function NoturnoLogo({
  text = "Noturno",
  dot = true,
  size = 28,
  color = "#FF2D8F",
  dotColor = "#EFECF4",
  glow = 1,
  ignite = true,
  className = "",
  style,
  ...rest
}: NoturnoLogoProps) {
  const rgb = hexToRgb(color);

  // Two layers: tight core + wide halo. Scaling with font size keeps
  // the glow proportional instead of washing out at large sizes.
  const shadow =
    glow <= 0
      ? "none"
      : `0 0 ${Math.round(size * 0.4 * glow)}px rgba(${rgb}, ${0.55 * glow}), ` +
        `0 0 ${Math.round(size * 1.3 * glow)}px rgba(${rgb}, ${0.26 * glow})`;

  const rootStyle: StyleWithVars = {
    "--noturno-glow": shadow,
    fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
    fontWeight: 800,
    fontSize: size,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color,
    textShadow: shadow,
    display: "inline-block",
    userSelect: "none",
    ...style,
  };

  return (
    <>
      <style>{igniteCss}</style>
      <span
        className={`noturno-logo ${ignite ? "noturno-logo--ignite" : ""} ${className}`}
        style={rootStyle}
        {...rest}
      >
        {text}
        {dot && <span style={{ color: dotColor, textShadow: "none" }}>.</span>}
      </span>
    </>
  );
}

/* ---------------------------------------------------------------
   Preview below — not needed in your project
   --------------------------------------------------------------- */

interface Swatch {
  label: string;
  color: string;
}

export default function Preview() {
  const [run, setRun] = useState<number>(0);

  const swatches: Swatch[] = [
    { label: "neon pink (default)", color: "#FF2D8F" },
    { label: "ice cyan", color: "#2DE2FF" },
    { label: "violet", color: "#A855F7" },
  ];

  const rule: CSSProperties = {
    height: 1,
    background: "#241F2E",
    margin: "40px 0",
  };
  const caption: CSSProperties = {
    fontSize: 12,
    color: "#635C70",
    marginTop: 8,
  };

  return (
    <div
      style={{
        background: "#08070B",
        color: "#9A93A8",
        fontFamily: "system-ui, sans-serif",
        padding: "48px 32px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div
          key={`sizes-${run}`}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <NoturnoLogo size={48} />
          <NoturnoLogo size={28} />
          <NoturnoLogo size={18} />
        </div>

        <div style={rule} />

        <div
          key={`colors-${run}`}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          {swatches.map((s) => (
            <div
              key={s.color}
              style={{ display: "flex", alignItems: "center", gap: 20 }}
            >
              <NoturnoLogo size={30} color={s.color} />
              <span style={{ fontSize: 13, color: "#635C70" }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div style={rule} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <NoturnoLogo size={26} glow={0} ignite={false} />
            <p style={caption}>glow={0}</p>
          </div>
          <div>
            <NoturnoLogo size={26} glow={0.5} ignite={false} />
            <p style={caption}>glow={0.5}</p>
          </div>
          <div>
            <NoturnoLogo size={26} glow={1.8} ignite={false} />
            <p style={caption}>glow={1.8}</p>
          </div>
        </div>

        <button
          onClick={() => setRun((r) => r + 1)}
          style={{
            marginTop: 44,
            background: "transparent",
            border: "1px solid #FF2D8F",
            color: "#FF2D8F",
            borderRadius: 10,
            padding: "10px 18px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Replay ignite
        </button>
      </div>
    </div>
  );
}
