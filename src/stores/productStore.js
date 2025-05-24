import { writable } from "svelte/store";

export const allProducts = writable([]);
export let searchTerm = writable("");
