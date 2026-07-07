import type { APIContext } from "astro";
import { buildSession } from "../../../../lib/learning";

export const prerender = false;

export async function GET({ locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const session = await buildSession(DB);
	return Response.json(session);
}
