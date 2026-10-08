import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same system as the page: bone canvas, ink and ash text, the DM mark, nothing else.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#f4f3f1",
        color: "#333333",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 80,
          border: "4px solid #333333",
          borderRadius: 16,
          fontSize: 40,
        }}
      >
        DM
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 64, lineHeight: 1.1 }}>{site.name}</div>
        <div style={{ fontSize: 36, color: "#4d4d4d" }}>Full-Stack Developer</div>
      </div>
      <div style={{ fontSize: 28, color: "#aaaaaa" }}>dmitriimusikhin.dev</div>
    </div>,
    size,
  );
}
