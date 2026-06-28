<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { url } from "@utils/url-utils.ts";
import { onMount } from "svelte";
import type { SearchResult } from "@/global";

let keywordDesktop = "";
let keywordMobile = "";
let result: SearchResult[] = [];
let savedResults: Array<{id: string; title: string | null; url: string | null; summary: string | null; type: string; tags: string}> = [];
let isSearching = false;
let pagefindLoaded = false;
let initialized = false;

const fakeResult: SearchResult[] = [
	{
		url: url("/"),
		meta: {
			title: "This Is a Fake Search Result",
		},
		excerpt:
			"Because the search cannot work in the <mark>dev</mark> environment.",
	},
	{
		url: url("/"),
		meta: {
			title: "If You Want to Test the Search",
		},
		excerpt: "Try running <mark>npm build && npm preview</mark> instead.",
	},
];

const togglePanel = () => {
	const panel = document.getElementById("search-panel");
	panel?.classList.toggle("float-panel-closed");
};

const setPanelVisibility = (show: boolean, isDesktop: boolean): void => {
	const panel = document.getElementById("search-panel");
	if (!panel || !isDesktop) return;

	if (show) {
		panel.classList.remove("float-panel-closed");
	} else {
		panel.classList.add("float-panel-closed");
	}
};

const search = async (keyword: string, isDesktop: boolean): Promise<void> => {
	if (!keyword) {
		setPanelVisibility(false, isDesktop);
		result = [];
		savedResults = [];
		return;
	}

	if (!initialized) {
		return;
	}

	isSearching = true;

	try {
		let searchResults: SearchResult[] = [];
		let nlpResults: typeof savedResults = [];

		// Run Pagefind (blog posts) and NLP search (saved links) in parallel
		const [pagefindDone, nlpDone] = await Promise.allSettled([
			(async () => {
				if (import.meta.env.PROD && pagefindLoaded && window.pagefind) {
					const response = await window.pagefind.search(keyword);
					searchResults = await Promise.all(
						response.results.map((item) => item.data()),
					);
				} else if (import.meta.env.DEV) {
					searchResults = fakeResult;
				}
			})(),
			(async () => {
				const res = await fetch(`/api/search?q=${encodeURIComponent(keyword)}`);
				if (res.ok) {
					const data = await res.json();
					nlpResults = data.links ?? [];
				}
			})(),
		]);

		result = searchResults;
		savedResults = nlpResults;
		setPanelVisibility(result.length > 0 || savedResults.length > 0, isDesktop);
	} catch (error) {
		console.error("Search error:", error);
		result = [];
		savedResults = [];
		setPanelVisibility(false, isDesktop);
	} finally {
		isSearching = false;
	}
};

onMount(() => {
	const initializeSearch = () => {
		initialized = true;
		pagefindLoaded =
			typeof window !== "undefined" &&
			!!window.pagefind &&
			typeof window.pagefind.search === "function";
		console.log("Pagefind status on init:", pagefindLoaded);
		if (keywordDesktop) search(keywordDesktop, true);
		if (keywordMobile) search(keywordMobile, false);
	};

	if (import.meta.env.DEV) {
		console.log(
			"Pagefind is not available in development mode. Using mock data.",
		);
		initializeSearch();
	} else {
		document.addEventListener("pagefindready", () => {
			console.log("Pagefind ready event received.");
			initializeSearch();
		});
		document.addEventListener("pagefindloaderror", () => {
			console.warn(
				"Pagefind load error event received. Search functionality will be limited.",
			);
			initializeSearch(); // Initialize with pagefindLoaded as false
		});

		// Fallback in case events are not caught or pagefind is already loaded by the time this script runs
		setTimeout(() => {
			if (!initialized) {
				console.log("Fallback: Initializing search after timeout.");
				initializeSearch();
			}
		}, 2000); // Adjust timeout as needed
	}
});

$: if (initialized && keywordDesktop) {
	(async () => {
		await search(keywordDesktop, true);
	})();
}

$: if (initialized && keywordMobile) {
	(async () => {
		await search(keywordMobile, false);
	})();
}

function parseTags(json: string): string[] {
	try { return JSON.parse(json) ?? []; } catch { return []; }
}

const TYPE_HUE: Record<string, string> = {
	Article: "240", Repository: "150", WebPage: "300",
	Document: "60", Note: "350", Tweet: "200",
};
</script>

<!-- search bar for desktop view -->
<div id="search-bar" class="hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg
      bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10
">
    <Icon icon="material-symbols:search" class="absolute text-[1.25rem] pointer-events-none ml-3 transition my-auto text-black/30 dark:text-white/30"></Icon>
    <input placeholder="{i18n(I18nKey.search)}" bind:value={keywordDesktop} on:focus={() => search(keywordDesktop, true)}
           class="transition-all pl-10 text-sm bg-transparent outline-0
         h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50"
    >
</div>

<!-- toggle btn for phone/tablet view -->
<button on:click={togglePanel} aria-label="Search Panel" id="search-switch"
        class="btn-plain scale-animation lg:!hidden rounded-lg w-11 h-11 active:scale-90">
    <Icon icon="material-symbols:search" class="text-[1.25rem]"></Icon>
</button>

<!-- search panel -->
<div id="search-panel" class="float-panel float-panel-closed search-panel absolute md:w-[30rem]
top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2">

    <!-- search bar inside panel for phone/tablet -->
    <div id="search-bar-inside" class="flex relative lg:hidden transition-all items-center h-11 rounded-xl
      bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10
  ">
        <Icon icon="material-symbols:search" class="absolute text-[1.25rem] pointer-events-none ml-3 transition my-auto text-black/30 dark:text-white/30"></Icon>
        <input placeholder="Search" bind:value={keywordMobile}
               class="pl-10 absolute inset-0 text-sm bg-transparent outline-0
               focus:w-60 text-black/50 dark:text-white/50"
        >
    </div>

    <!-- blog post results -->
    {#if result.length > 0}
      {#if savedResults.length > 0}
        <div class="text-[10px] font-semibold uppercase tracking-wide text-black/30 dark:text-white/30 px-3 pt-2 pb-1">Blog posts</div>
      {/if}
      {#each result as item}
          <a href={item.url}
             class="transition first-of-type:mt-2 lg:first-of-type:mt-0 group block
         rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]">
              <div class="transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]">
                  {item.meta.title}<Icon icon="fa6-solid:chevron-right" class="transition text-[0.75rem] translate-x-1 my-auto text-[var(--primary)]"></Icon>
              </div>
              <div class="transition text-sm text-50">
                  {@html item.excerpt}
              </div>
          </a>
      {/each}
    {/if}

    <!-- saved links results (NLP/semantic) -->
    {#if savedResults.length > 0}
      <div class="text-[10px] font-semibold uppercase tracking-wide text-black/30 dark:text-white/30 px-3 pt-2 pb-1 flex items-center gap-1">
        <Icon icon="material-symbols:magic-button" class="text-[0.9rem]"></Icon>
        Saved links
      </div>
      {#each savedResults as link}
        {@const hue = TYPE_HUE[link.type] ?? "250"}
        {@const tags = parseTags(link.tags).slice(0, 3)}
        <a href={link.url ?? "#"} target="_blank" rel="noopener noreferrer"
           class="transition group block rounded-xl px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0"
              style="background:oklch(0.92 0.05 {hue});color:oklch(0.45 0.12 {hue})">
              {link.type}
            </span>
            <span class="transition text-sm font-medium text-90 group-hover:text-[var(--primary)] line-clamp-1">
              {link.title ?? link.url ?? "Untitled"}
            </span>
          </div>
          {#if link.summary}
            <div class="transition text-xs text-50 line-clamp-1 pl-0.5">{link.summary}</div>
          {/if}
          {#if tags.length > 0}
            <div class="flex gap-1 mt-1 flex-wrap">
              {#each tags as t}
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-[var(--btn-regular-bg)] text-[var(--btn-content)]">{t}</span>
              {/each}
            </div>
          {/if}
        </a>
      {/each}
      <div class="px-3 py-2 border-t border-[var(--line-color)] mt-1">
        <a href="/saves/" class="text-xs text-[var(--primary)] hover:underline">Browse all saves →</a>
      </div>
    {/if}

    {#if isSearching}
      <div class="px-3 py-4 text-sm text-50 text-center">Searching…</div>
    {/if}
</div>

<style>
  input:focus {
    outline: 0;
  }
  .search-panel {
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
</style>
