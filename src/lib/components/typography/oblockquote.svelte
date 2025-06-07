<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<blockquote
	class={cn("mt-6 border-l-2 pl-6 italic", className)}
	{...$$restProps}
>
	<slot />
</blockquote>
