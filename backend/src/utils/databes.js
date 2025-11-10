import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname,"..", "public", "data.json");
console.log("📄 Looking for file at:", filePath);


export const getJobDatatbase = () => {
  const data = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
};




