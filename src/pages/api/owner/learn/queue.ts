import type { APIContext } from "astro";
import { buildSession, resolveTrack } from "../../../../lib/learning";

export const prerender = false;

export async function GET({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const track = resolveTrack(new URL(request.url).searchParams.get("track"));
	const session = await buildSession(DB, track);
	return Response.json(session);
}
