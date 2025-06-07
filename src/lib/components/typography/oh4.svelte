
<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<h4
	class={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}
	{...$$restProps}
>
	<slot />
</h4>
