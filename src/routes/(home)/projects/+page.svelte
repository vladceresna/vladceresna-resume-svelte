<script lang="ts">
	import ClickableCard from '@/components/own/clickable-card.svelte';
	import FirstHeroSection from '@/components/own/first-hero-section.svelte';
	import Main from '@/components/own/main.svelte';
	import Oh0 from '@/components/typography/oh0.svelte';
	import Olead from '@/components/typography/olead.svelte';
	import Op from '@/components/typography/op.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { Card } from '@/components/ui/card';
	import CardContent from '@/components/ui/card/card-content.svelte';
	import { FolderOpen, Github, LockOpen, Radio, Wifi } from 'lucide-svelte';
	import { OpenInNewWindow } from 'svelte-radix';

	let projects = [
		{
			name: 'Virtel',
			description: 'A hybrid operating system/browser with very advanced functionality and its own programming language. The most awarded project',
			link: 'https://virtel.netlify.app/'
		},
		{
			name: 'Netufos',
			description: 'The school`s newest online platform. Developed for a year in a cross-functional team of 30 people under my supervision. Startup environment',
			link: 'https://example.com/project-b'
		},
		{
			name: 'Rula',
			description: 'A Google-like services ecosystem that had an email service, a forum and the upcoming introduction of chat rooms and cloud storage',
			link: 'https://example.com/project-c'
		},
        {
			name: 'STUI',
			description: 'The best way to create a shared schedule for your team. Displays the current event, rings a bell when a new event starts',
			link: 'https://example.com/project-c'
		},
        {
			name: 'NetGet',
			description: 'Internet scanner with search running locally on Spring/Vaadin. You could say search engine',
			link: 'https://example.com/project-c'
		},
        {
			name: 'Parkur',
			description: 'Shared links and events between people displayed by category and time',
			link: 'https://example.com/project-c'
		}
	];
	function openProjectLink(link: string) {
		window.open(link, '_blank');
	}
</script>

<Main>
	<FirstHeroSection>
		<Oh0 class="pb-10">Projects</Oh0>
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
                <ClickableCard onclick={() => openProjectLink(project.link)}>
                    <CardContent class="flex flex-col h-full">
                        <h3 class="text-xl font-semibold">{project.name}</h3>    
                        <Op class="max-w-xs flex-1 mb-0">{project.description}</Op>
                        <div class="flex flex-col md:flex-row gap-4 mt-4">
                            <Button onclick={() => openProjectLink(project.link)}>
                                <Radio/> Live
                            </Button>
                            <Button onclick={() => openProjectLink(project.link)} variant="outline">
                                <Github/> Github
                            </Button>
                            <Button variant="ghost" size="icon">
                                <OpenInNewWindow/>
                            </Button>
                        </div>
                   </CardContent>
                </ClickableCard>
            {/each}
        </ul>
    </section>
</Main>
