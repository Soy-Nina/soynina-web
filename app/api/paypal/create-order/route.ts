import { NextRequest, NextResponse } from "next/server"
import { getPayPalToken } from "@/lib/paypal"

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json()

    if (typeof amount !== "number" || !Number.isFinite(amount) || amount < 1 || amount > 50000) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    const token = await getPayPalToken()

    const res = await fetch(`${process.env.PAYPAL_API_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount.toFixed(2),
            },
            description: "Donación — Fundación Soy Niña",
          },
        ],
        application_context: {
          brand_name: "Fundación Soy Niña",
          shipping_preference: "NO_SHIPPING",
        },
      }),
    })

    if (!res.ok) {
      console.error("[PayPal] create-order failed:", res.status, await res.text())
      return NextResponse.json({ error: "PayPal error" }, { status: 502 })
    }

    const order = await res.json()
    return NextResponse.json({ id: order.id })
  } catch (err) {
    console.error("[PayPal] create-order exception:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
