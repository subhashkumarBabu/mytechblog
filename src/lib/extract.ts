// Fetch a page and reduce it to readable text — best-effort content capture
// for saved links (feeds summaries now, flashcard extraction later).

const MAX_CONTENT = 20_000; // chars stored in D1
const FETCH_TIMEOUT = 10_000;

export async function fetchExtract(url: string): Promise<string | null> {
	try {
		const res = await fetch(url, {
			redirect: "follow",
			signal: AbortSignal.timeout(FETCH_TIMEOUT),
			headers: {
				"User-Agent": "Mozilla/5.0 (compatible; devopsmantra-save/1.0)",
				Accept: "text/html,application/xhtml+xml",
			},
		});
		if (!res.ok) return null;
		const ctype = res.headers.get("content-type") ?? "";
		if (!ctype.includes("text/html") && !ctype.includes("text/plain")) return null;
		const html = await res.text();
		return ctype.includes("text/plain") ? html.slice(0, MAX_CONTENT) : htmlToText(html);
	} catch {
		return null;
	}
}

export function htmlToText(html: string): string | null {
	let s = html
		// drop non-content blocks entirely
		.replace(/<script[\s\S]*?<\/script>/gi, " ")
		.replace(/<style[\s\S]*?<\/style>/gi, " ")
		.replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
		.replace(/<svg[\s\S]*?<\/svg>/gi, " ")
		.replace(/<(nav|header|footer|aside|form)[\s\S]*?<\/\1>/gi, " ")
		.replace(/<!--[\s\S]*?-->/g, " ");
	// prefer the <article>/<main> region when present
	const region = s.match(/<(article|main)[\s>][\s\S]*?<\/\1>/i);
	if (region) s = region[0];
	s = s
		.replace(/<\/(p|div|li|h[1-6]|tr|blockquote|pre)>/gi, "\n")
		.replace(/<br\s*\/?>/gi, "\n")
		.replace(/<[^>]+>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;|&apos;/g, "'")
		.replace(/[ \t]+/g, " ")
		.replace(/\s*\n\s*/g, "\n")
		.replace(/\n{3,}/g, "\n\n")
		.trim();
	// junk guard: pages that reduce to nothing useful
	if (s.length < 200) return null;
	return s.slice(0, MAX_CONTENT);
}
