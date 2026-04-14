export const runtime = "nodejs";

import { revalidateTag } from "next/cache";

export async function GET(request) {
  const secret = request.headers.get("x-revalidation-secret");
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }
  revalidateTag("cms");
  return Response.json({ revalidated: true });
}
