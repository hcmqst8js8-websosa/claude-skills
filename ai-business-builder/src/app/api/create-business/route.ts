import { createClient } from "@supabase/supabase-js"

export async function POST(req) {

  const body = await req.json()

  const idea = body.idea
  const industry = body.industry
  const audience = body.audience

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { error } = await supabase
    .from("business_requests")
    .insert([{ idea, industry, audience }])

  if (error) {
    return Response.json({ status: "error", message: error.message }, { status: 500 })
  }

  return Response.json({ status: "success" })

}
