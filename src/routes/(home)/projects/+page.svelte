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
    import { Badge } from "$lib/components/ui/badge"; // Додав імпорт Badge
    import { ExternalLink, FolderOpen, Github, Lock, LockOpen, Radio, Wifi } from 'lucide-svelte';
    import { LockClosed, OpenInNewWindow } from 'svelte-radix';
    import Oh3 from "@/components/typography/oh3.svelte";
    import Oh4 from "@/components/typography/oh4.svelte";
    import Olarge from "@/components/typography/olarge.svelte";

    let projects = [
        {
            name: 'Lito',
            badge: 'New & Live',
            description: 'Marketing A/B testing platform for offline advertising. Generates unique short links and vector QR codes to track conversion and engagement of physical marketing materials in real-time.',
            link: 'https://lito.vercel.app/-G4bC-',
            tags: ['SvelteKit', 'Firebase', 'Analytics']
        },
        {
            name: 'Virtel',
            badge: 'Awarded',
            description: 'Experimental hybrid web-OS and browser environment. Features the Wren language and a custom programming language and advanced window management system. Highly acclaimed for architectural innovation.',
            link: 'https://lito.vercel.app/bE2R2Z',
            tags: ['System Design', 'Compiler', 'Wren'],
            github: [
                'https://lito.vercel.app/NVUR_H',
                'https://github.com/vladceresna/virtel-frontend',
                'https://github.com/vladceresna/virtel-backend'
            ]
        },
        {
            name: 'Netufos',
            badge: 'Enterprise',
            description: 'Comprehensive EdTech ecosystem. Managed and architected by me, leading a cross-functional team of 30 people in a fast-paced startup environment to deliver a unified school platform.',
            link: 'https://lito.vercel.app/V8zt8X',
            link2: 'https://lito.vercel.app/CkFKSs',
            tags: ['Management', 'Product', 'Fullstack']
        },
        {
            name: 'STUI',
            badge: 'Education',
            description: 'Smart scheduling ecosystem for educational institutions. Automated event tracking with real-time notifications, intelligent time-filling, and collaborative editing capabilities.',
            link: 'https://lito.vercel.app/zfFtfV',
            tags: ['Svelte', 'Real-time', 'Automation']
        },
        {
            name: 'Rula',
            description: 'High-availability service ecosystem inspired by Google Workspace. Developed integrated modules for email, community forums, and cloud storage using a unified authentication system.',
            link: 'https://lito.vercel.app/dHCD0w',
            tags: ['Microservices', 'Auth', 'Ecosystem'],
            github:[
                'https://github.com/vladceresna/rula-site',
                'https://github.com/vladceresna/Welta',
                'https://github.com/vladceresna/Rosto',
                'https://github.com/vladceresna/Rendas',
                'https://github.com/vladceresna/CloudLib'
            ]
        },
        {
            name: 'NetGet',
            description: 'Distributed local-network search engine built on Spring Boot and Vaadin. Capable of high-speed crawling and indexing local resources with an optimized search interface.',
            github: 'https://github.com/vladceresna/Netget',
            tags: ['Java', 'Spring', 'Vaadin']
        },
        {
            name: 'Wonrity Certification',
            description: 'Open skill validation platform. An alternative to traditional academic degrees, focusing on verifiable competency and immediate employability for self-taught professionals.',
            link: 'https://lito.vercel.app/ukQAqD',
            tags: ['EdTech', 'Certification']
        },
        {
            name: 'Wonrity',
            description: 'Social-event discovery engine designed to bridge the gap between shared interests and real-world networking, helping users form community-driven meetups.',
            link: 'https://lito.vercel.app/z1vVFi',
            tags: ['Social', 'Algorithms']
        },
        {
            name: 'Neulity',
            description: 'Advanced news aggregator with granular interest-based filtering. Features an exclusion engine and time-slice filters to eliminate information noise and prevent "doomscrolling".',
            link: 'https://lito.vercel.app/is8hNJ',
            tags: ['API', 'News', 'Filtering', 'AI']
        },
        {
            name: 'Parkur',
            description: 'Real-time collaborative link-sharing and event management platform, categorized by temporal relevance and user-defined taxonomies.',
            link: 'https://parkur.vercel.app/',
            tags: ['Svelte', 'Real-time']
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
                        <div class="flex justify-between items-start gap-2 mb-1">
                            <h3 class="text-xl font-semibold">{project.name}</h3>
                            {#if project.badge}
                                <Badge variant="secondary" class="text-[10px] px-2 h-5">{project.badge}</Badge>
                            {/if}
                        </div>

                        <Op class="max-w-xs flex-1 mb-0">{project.description}</Op>
                        
                        {#if project.tags}
                            <div class="flex flex-wrap gap-1.5 mt-3 mb-1">
                                {#each project.tags as tag}
                                    <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                        {/if}

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
                        </div>
                   </CardContent>
                </ClickableCard>
            {/each}
        </ul>
    </section>

</Main>