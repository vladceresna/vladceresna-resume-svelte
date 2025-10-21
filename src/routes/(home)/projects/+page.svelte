<script lang="ts">
    import * as Popover from "$lib/components/ui/popover/index.js";
	import { page } from '$app/state';
	import ClickableCard from '@/components/own/clickable-card.svelte';
	import FirstHeroSection from '@/components/own/first-hero-section.svelte';
	import Main from '@/components/own/main.svelte';
	import Oh0 from '@/components/typography/oh0.svelte';
	import Olead from '@/components/typography/olead.svelte';
	import Op from '@/components/typography/op.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { Card } from '@/components/ui/card';
	import CardContent from '@/components/ui/card/card-content.svelte';
	import { ExternalLink, FolderOpen, Github, Lock, LockOpen, Radio, Wifi } from 'lucide-svelte';
	import { LockClosed, OpenInNewWindow } from 'svelte-radix';
	import Oh3 from "@/components/typography/oh3.svelte";
	import Oh4 from "@/components/typography/oh4.svelte";
	import Olarge from "@/components/typography/olarge.svelte";

	let projects = [
		{
			name: 'Virtel',
			description: 'A hybrid operating system/browser with very advanced functionality and its own programming language. The most awarded project',
			link: 'https://virtel.netlify.app/',
            github: [
                'https://github.com/vladceresna/virtel',
                'https://github.com/vladceresna/virtel-frontend',
                'https://github.com/vladceresna/virtel-backend'
            ]
		},
		{
			name: 'Netufos',
			description: 'The school`s newest online platform. Developed for a year in a cross-functional team of 30 people under my supervision. Startup environment',
			link: 'https://netufos.vercel.app/',
            link2: 'https://netufos.netlify.app/',
		},
		{
			name: 'Rula',
			description: 'A Google-like services ecosystem that had an email service, a forum and the upcoming introduction of chat rooms and cloud storage',
			link: 'https://retrula.netlify.app/',
            github:[
                'https://github.com/vladceresna/rula-site',
                'https://github.com/vladceresna/Welta',
                'https://github.com/vladceresna/Rosto',
                'https://github.com/vladceresna/Rendas',
                'https://github.com/vladceresna/CloudLib'
            ]
		},
        {
			name: 'STUI',
			description: 'The best way to create a shared schedule for your team. Displays the current event, rings a bell when a new event starts',
			link: 'https://stuione.vercel.app/',
		},
        {
			name: 'NetGet',
			description: 'Internet scanner with search running locally on Spring/Vaadin. You could say search engine',
			github: 'https://github.com/vladceresna/Netget'
		},
        {
			name: 'Parkur',
			description: 'Shared links and events between people displayed by category and time',
			link: 'https://parkur.vercel.app/'
		},
        {
			name: 'Wonrity',
			description: 'A service that helps you find things to do and, through that, meet new interesting people and do things together.',
			link: 'https://wonrity.netlify.app/'
		},
        {
			name: 'Wonrity Certification',
			description: 'Certification that is as trusted by employers as a university degree, but free of charge and without the need to wait for years. Ideal for self-taught individuals.,
			link: 'https://wonrity.netlify.app/certification'
		},
        {
			name: 'Neulity',
			description: 'Personalized news based on your interests. You can read only news you want to see. With topics excluding and timefilters',
			link: 'https://neulity.vercel.app/'
		}
	];
	function openProjectLink(link: string) {
		window.open(link, '_blank');
	}
</script>

<Main>
	<FirstHeroSection>
		<Oh0 class="pb-10">Developer Projects</Oh0>
		<div class="align-center flex w-full justify-center">
			<Olead class="max-w-2xl">
				Here, you can explore the various projects I have worked on.
                Each project has its own unique features and challenges that I have tackled.
			</Olead>
		</div>

		<div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
			<Button href="/contacts">Cooperate</Button>
			<Button variant="outline" href="/resume">See resume</Button>
		</div>
	</FirstHeroSection>
	<hr />
    <section class="p-6">
        <ul class="flex gap-6 flex-wrap justify-center">
            {#each projects as project}
                <ClickableCard>
                    <CardContent class="flex flex-col h-full">
                        <h3 class="text-xl font-semibold">{project.name}</h3>
                        <Op class="max-w-xs flex-1 mb-0">{project.description}</Op>
                        <div class="flex flex-col md:flex-row gap-4 mt-4">
                            {#if project.link}
                            <Button onclick={() => openProjectLink(project.link)}>
                                <Radio/> Live
                            </Button>
                            {:else}
                            <Button disabled variant="outline">
                                <LockClosed/> Not hosted
                            </Button>
                            {/if}
                            {#if project.link2}
                                <Button onclick={() => openProjectLink(project.link2)} variant="outline">
                                    <Radio/> Live 2
                                </Button>
                            {/if}
                            {#if project.github}
                                {#if Array.isArray(project.github)}
                                    <Popover.Root>
                                        <Popover.Trigger class="w-full">
                                            <Button variant="outline" class="w-full">
                                                <Github/> Github
                                            </Button>
                                        </Popover.Trigger>
                                        <Popover.Content>
                                            <Olarge class="mb-2">Github repositories</Olarge>
                                            <div>
                                            {#each project.github as repo}
                                                <Button onclick={() => openProjectLink(repo)} variant="link" class="p-0 m-0 mx-2">
                                                    <Github/> {repo.split('/').pop()}
                                                </Button>
                                            {/each}
                                            </div>
                                        </Popover.Content>
                                    </Popover.Root>
                                {:else}
                                    <Button onclick={() => openProjectLink(project.github)} variant="outline">
                                        <Github/> Github
                                    </Button>
                                {/if}
                            
                            {:else}
                            <Button disabled variant="outline">
                                <Lock/> Private Sources
                            </Button>
                            {/if}
                            <!-- <Button variant="ghost" size="icon">
                                <OpenInNewWindow/>
                            </Button> -->
                        </div>
                   </CardContent>
                </ClickableCard>
            {/each}
        </ul>
    </section>

</Main>
