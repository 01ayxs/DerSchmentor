import { ImageResponse } from "next/og";

export const alt = "DerSchmentor – Gaming, Challenges & Entertainment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#070707",
          color: "#f5f5f7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 220,
            top: -300,
            display: "flex",
            width: 800,
            height: 800,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 66%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 44,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(255,255,255,0.16)",
            padding: 44,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 5, color: "rgba(255,255,255,0.48)" }}>
            <span>DER SCHMENTOR</span>
            <span>EST. 2026</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 104, fontWeight: 700, lineHeight: 0.88, letterSpacing: -7 }}>
              DerSchmentor.
            </div>
            <div style={{ display: "flex", marginTop: 25, fontSize: 31, color: "rgba(255,255,255,0.58)", letterSpacing: -1 }}>
              Gaming. Challenges. Entertainment.
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, letterSpacing: 4, color: "rgba(255,255,255,0.35)" }}>
            <span>CONTENT, DER NICHT GANZ NACH PLAN LÄUFT.</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
