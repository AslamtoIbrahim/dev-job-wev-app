import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "backend", "data.json");

export const getJobDatatbase = () => {
  console.log("🗂️ Current working directory:", process.cwd());
  console.log("📄 Looking for file at:", dataPath);
  console.log("📦 File exists:", fs.existsSync(dataPath));
  const data = fs.readFileSync(dataPath, 'utf-8')
  return JSON.parse(data)
};