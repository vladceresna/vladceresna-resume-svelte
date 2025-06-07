<script>
	import Oh2 from "../typography/oh2.svelte";
	import Op from "../typography/op.svelte";
	import Progress from "../ui/progress/progress.svelte";
    import Logo from "./logo.svelte";

    import { onMount } from "svelte";

    let progressValue = 0;

    onMount(() => {
        let interval = setInterval(() => {
            progressValue += 5;
            if (progressValue >= 100) {
                progressValue = 100;
                clearInterval(interval);
            }
        }, 100); // Updates every 100ms for a total of 2 seconds
    });
</script>
<main class="flex w-screen h-screen justify-center items-center">
    <div class="flex flex-col items-center justify-center w-full h-full">
        <Logo />
        <Progress
            class="max-w-xs m-10"
            value={progressValue} />
    </div>
</main>