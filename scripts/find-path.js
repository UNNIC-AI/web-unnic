import { readdir } from "fs/promises"
import { join } from "path"

// Try common paths to find where the project lives
const candidates = [
  "/app",
  "/workspace",
  "/home/user/app",
  "/home/user/project",
  "/project",
  "/var/task",
  process.cwd(),
]

for (const p of candidates) {
  try {
    const entries = await readdir(p)
    if (entries.includes("public") || entries.includes("app") || entries.includes("package.json")) {
      console.log(`FOUND: ${p} → contents: ${entries.slice(0, 10).join(", ")}`)
    }
  } catch {
    // not accessible
  }
}

console.log("CWD:", process.cwd())
try {
  const cwd = await readdir(process.cwd())
  console.log("CWD contents:", cwd.join(", "))
} catch(e) {
  console.log("CWD error:", e.message)
}
