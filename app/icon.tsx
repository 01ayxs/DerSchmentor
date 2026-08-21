import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "#f5f5f7",
          color: "#080808",
          fontFamily: "Arial, sans-serif",
          fontSize: 27,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        DS
      </div>
    ),
    size,
  );
}
