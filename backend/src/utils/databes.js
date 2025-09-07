import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data.json");

export const getJobDatatbase = () => {
  const data = fs.readFileSync(dataPath, 'utf-8')
  return JSON.parse(data)
};