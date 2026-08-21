import { ImageResponse } from "next/og";

export function createFeaturedPlaceholder() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#101011",
          color: "#f4f4f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -120,
            display: "flex",
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.025) 38%, transparent 68%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 22, letterSpacing: 7, color: "rgba(255,255,255,0.42)" }}>PLATZHALTER</span>
          <span style={{ marginTop: 28, fontSize: 142, fontWeight: 700, lineHeight: 0.88, letterSpacing: -10 }}>
            NÄCHSTES VIDEO
          </span>
        </div>
      </div>
    ),
    { width: 1600, height: 900 },
  );
}
