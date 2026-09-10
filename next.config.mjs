import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empêche Next de remonter jusqu'à ~/ (où traînent un package.json et node_modules)
  // pour choisir la racine du workspace.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
