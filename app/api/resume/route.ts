export function GET() {
  return Response.json(
    { message: "No hay un currículum descargable disponible." },
    { status: 410 },
  )
}
