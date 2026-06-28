/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

type D1Database = import("@cloudflare/workers-types").D1Database;
type Ai = import("@cloudflare/workers-types").Ai;
type VectorizeIndex = import("@cloudflare/workers-types").VectorizeIndex;
type R2Bucket = import("@cloudflare/workers-types").R2Bucket;
type Queue = import("@cloudflare/workers-types").Queue;

type CloudflareEnv = {
	DB: D1Database;
	AI: Ai;
	VECTORIZE: VectorizeIndex;
	R2: R2Bucket;
	ENRICHMENT_QUEUE: Queue;
	ENVIRONMENT: string;
};

declare namespace App {
	interface Locals {
		runtime: {
			env: CloudflareEnv;
		};
	}
}
