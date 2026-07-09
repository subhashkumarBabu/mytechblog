import type { APIContext } from "astro";
import { buildSession, resolveTrack } from "../../../../lib/learning";

export const prerender = false;

export async function GET({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const url = new URL(request.url);
	const track = resolveTrack(url.searchParams.get("track"));
	const session = await buildSession(DB, track, { ahead: url.searchParams.get("mode") === "ahead" });
	return Response.json(session);
}
