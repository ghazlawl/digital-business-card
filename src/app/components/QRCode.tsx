"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeProps {
  value: string;
}

export default function QRCodeComponent({ value }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, value, {
        width: 150,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });
    }
  }, [value]);

  return <canvas ref={canvasRef} className="m-auto rounded-lg shadow-md" />;
}
