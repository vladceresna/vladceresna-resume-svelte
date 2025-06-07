<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<h1
	class={cn("scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl", className)}
	{...$$restProps}
>
	<slot />
</h1>
