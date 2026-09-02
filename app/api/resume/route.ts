import { readFile } from "node:fs/promises"
import path from "node:path"

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "CV_Jose_Eliecer_Rivera_2026.docx")
  const file = await readFile(filePath)

  return new Response(file, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": 'attachment; filename="CV_Jose_Rivera_Ejecutivo_v2.docx"',
      "Content-Length": String(file.byteLength),
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "Pragma": "no-cache",
      "Expires": "0",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
