import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await copyFile("node_modules/pdfjs-dist/build/pdf.min.mjs", "dist/pdf.min.mjs");
await copyFile("node_modules/pdfjs-dist/build/pdf.worker.min.mjs", "dist/pdf.worker.min.mjs");
try {
  const encoded = await readFile("assets/groceries-banner.png.base64", "utf8");
  await writeFile("dist/groceries-banner.png", Buffer.from(encoded.trim(), "base64"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
console.log("Browser dependencies and assets prepared.");
