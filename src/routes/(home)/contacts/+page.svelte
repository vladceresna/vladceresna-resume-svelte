<script lang="ts">
	import ClickableCard from "@/components/own/clickable-card.svelte";
import FirstHeroSection from "@/components/own/first-hero-section.svelte";
	import Main from "@/components/own/main.svelte";
	import Oh0 from "@/components/typography/oh0.svelte";
	import Oh1 from "@/components/typography/oh1.svelte";
	import Olead from "@/components/typography/olead.svelte";
	import Op from "@/components/typography/op.svelte";
	import { Button } from "@/components/ui/button";
	import { CardContent } from "@/components/ui/card";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { AirVent, Github, Linkedin, Mail, Send } from "lucide-svelte";


</script>
<Main>
    <FirstHeroSection>
        <Oh0 class="pb-10">Contact Me</Oh0>
        <Olead class="max-w-2xl mx-auto">Feel free to reach out to me via email or social media!</Olead>
    </FirstHeroSection>
    <hr />
    <section class="flex flex-col items-center justify-center gap-4 p-10">
        <div class="flex flex-col items-center gap-2">
            <Oh1 class="text-2xl font-bold">I`m right here.</Oh1>
            <Op class="mx-auto max-w-md mt-4">Write to me if you want to chat, discuss collaboration opportunities, 
                offer me a job, build a startup together, 
                get a lesson from a coding master or even play chess together!</Op>
            
            <ClickableCard>
                <CardContent class="flex flex-row flex-wrap items-center gap-2">
                    <Popover.Root>
                        <Popover.Trigger>
                            <Button href="mailto:vladceresna6@gmail.com" variant="link">
                                <Mail/> Email me
                            </Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <Button href="mailto:vladceresna6@gmail.com" variant="link">
                                <Mail/> vladceresna6@gmail.com
                            </Button>
                        </Popover.Content>
                    </Popover.Root>
                    
                    <Button href="https://github.com/vladceresna" variant="link">
                        <Github/> Github
                    </Button>
                    <Button href="https://www.linkedin.com/in/vlad-ceresna-24b259287/" variant="link">
                        <Linkedin/> LinkedIn
                    </Button>
                    <Button href="https://t.me/vladceresna" variant="link">
                        <Send/> Telegram
                    </Button>
                </CardContent>
            </ClickableCard>
        </div>
    </section>
</Main>
