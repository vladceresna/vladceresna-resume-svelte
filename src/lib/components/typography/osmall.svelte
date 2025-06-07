
<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<small
	class={cn("text-sm font-medium leading-none", className)}
	{...$$restProps}
>
	<slot />
</small>
