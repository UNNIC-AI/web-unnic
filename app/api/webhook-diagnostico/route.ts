import { NextRequest, NextResponse } from "next/server"

const WEBHOOK_URL =
  "https://n8n.unnic.ai/webhook/2b001cd2-0a8c-4603-9233-6d282ed99680"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // n8n webhook-test is configured to accept GET requests.
    // Flatten the payload into individual query params so n8n shows each field
    // as a separate pill instead of one big JSON blob.
    const url = new URL(WEBHOOK_URL)
    const { cliente, respuestas, fecha } = body

    // Cliente fields — one param each
    if (cliente && typeof cliente === "object") {
      for (const [key, value] of Object.entries(cliente)) {
        url.searchParams.set(`cliente_${key}`, String(value))
      }
    }

    // Respuestas fields — one param each
    if (respuestas && typeof respuestas === "object") {
      for (const [key, value] of Object.entries(respuestas)) {
        url.searchParams.set(key, String(value))
      }
    }

    if (fecha) url.searchParams.set("fecha", String(fecha))

    const response = await fetch(url.toString(), {
      method: "GET",
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Webhook responded with status ${response.status}` },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("[webhook-diagnostico] Error forwarding to n8n:", error)
    return NextResponse.json(
      { error: "Failed to reach webhook" },
      { status: 500 }
    )
  }
}
