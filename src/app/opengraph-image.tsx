import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VSJ Logistics Solution – Transport & Logistics Company in Naroda GIDC, Ahmedabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F2042",
          color: "#fff",
          padding: "64px 72px",
          borderBottom: "16px solid #F97316",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#FB923C", fontWeight: 700 }}>
          Naroda GIDC • Ahmedabad • Gujarat
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>VSJ Logistics Solution</div>
          <div style={{ fontSize: 40, marginTop: 20, color: "#CBD5E1" }}>
            Transport & Logistics Company in Ahmedabad
          </div>
          <div style={{ fontSize: 30, marginTop: 14, color: "#94A3B8" }}>
            FTL • PTL • ODC • Chemical Cargo • Warehousing • Pan-India
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <span>+91 8660567050</span>
          <span style={{ color: "#94A3B8" }}>GSTIN 24ATAPV9051F1ZM</span>
        </div>
      </div>
    ),
    size,
  );
}
