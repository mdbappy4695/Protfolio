import React, { useCallback, useRef, useState } from "react";
import "./MagneticButton.css";

const STRENGTH = 0.28;
const MAX_OFFSET = 12;

const MagneticButton = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const canMagnetize = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = useCallback((event) => {
    if (!canMagnetize() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    setOffset({
      x: Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * STRENGTH)),
      y: Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * STRENGTH)),
    });
  }, []);

  const handleLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <span
      ref={ref}
      className={`magnetic-btn ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {children}
    </span>
  );
};

export default MagneticButton;
