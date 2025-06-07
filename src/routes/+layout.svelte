<script lang="ts">
	
	import '../app.css';
	let { children } = $props();
	
	import { ModeWatcher } from "mode-watcher";
	import { Toaster } from '@/components/ui/sonner';
  
</script>
  
<Toaster />
<ModeWatcher />
<div class="font-inter w-full h-screen">
  {@render children()}
</div>
  