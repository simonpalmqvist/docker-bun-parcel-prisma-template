import { edenFetch } from "@elysiajs/eden";
import type { App } from "./generated/api";

export const client = edenFetch<App>("/api");
