import React from "react";

export default function Footer() {
  return (
    <footer style={{ marginTop: "60px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <a
          href="https://www.instagram.com/alvarezalberto_/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: "8px 18px",
            color: "#fff",
            fontWeight: 500,
            fontSize: 18,
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s"
          }}
          aria-label="Instagram"
          onMouseOver={e => e.currentTarget.style.background = "#fff"}
          onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#fff" />
            <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2Z" stroke="#181818" strokeWidth="1.5"/>
            <circle cx="17.2" cy="6.8" r="1" fill="#181818"/>
            <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" stroke="#181818" strokeWidth="1.5"/>
          </svg>
          <span style={{ color: "#181818", fontWeight: 600 }}>@alvarezalberto_</span>
        </a>
      </div>
      <div style={{ fontSize: 16, marginBottom: 6 }}>
        © {new Date().getFullYear()} Alberto Álvarez – Pintor argentino
      </div>
      <div style={{ fontSize: 14, opacity: 0.8 }}>
        Hecho por:{" "}
        <a
          href="https://mgproduccionesweb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#7ec9f5", textDecoration: "underline" }}
        >
          MG Soluciones Web
        </a>
      </div>
    </footer>
  );
}
