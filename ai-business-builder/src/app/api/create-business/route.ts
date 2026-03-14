export async function POST(req) {

  const body = await req.json()

  const idea = body.idea
  const industry = body.industry
  const audience = body.audience

  console.log("New business request:", idea)

  return Response.json({
    status: "success"
  })

}
