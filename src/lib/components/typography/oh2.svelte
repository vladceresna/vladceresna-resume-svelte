<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<h2
	class={cn("scroll-m-20 border-b pb-2 mt-10 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)}
	{...$$restProps}
>
	<slot />
</h2>
