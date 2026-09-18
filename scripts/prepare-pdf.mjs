import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await copyFile("node_modules/pdfjs-dist/build/pdf.min.mjs", "dist/pdf.min.mjs");
await copyFile("node_modules/pdfjs-dist/build/pdf.worker.min.mjs", "dist/pdf.worker.min.mjs");
console.log("PDF.js browser files prepared.");
