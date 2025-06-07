
<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<ul
	class={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
	{...$$restProps}
>
	<slot />
</ul>
