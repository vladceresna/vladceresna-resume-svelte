



<script lang="ts">
    import { Card } from "../ui/card";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>
<Card
	class={cn("cursor-pointer hover:dark:bg-gray-900 hover:bg-gray-100 transition", className)}
	{...$$restProps}
>
	<slot />
</Card>
