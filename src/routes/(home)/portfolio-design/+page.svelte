<script lang="ts">
    import ClickableCard from '@/components/own/clickable-card.svelte';
    import FirstHeroSection from '@/components/own/first-hero-section.svelte';
    import Main from '@/components/own/main.svelte';
    import Oh0 from '@/components/typography/oh0.svelte';
    import Olead from '@/components/typography/olead.svelte';
    import Op from '@/components/typography/op.svelte';
    import Button from '@/components/ui/button/button.svelte';
    import { Card } from '@/components/ui/card';
    import { ExternalLink, FolderOpen, Github, Lock, LockOpen, Radio, Wifi } from 'lucide-svelte';
    import { LockClosed, OpenInNewWindow } from 'svelte-radix';
    import Oh3 from "@/components/typography/oh3.svelte";
    import Oh4 from "@/components/typography/oh4.svelte";
    import Olarge from "@/components/typography/olarge.svelte";
    import { cn } from '@/utils';
    import CardContent from '@/components/ui/card/card-content.svelte';
    import CardHeader from '@/components/ui/card/card-header.svelte';
    import CardFooter from '@/components/ui/card/card-footer.svelte';
    import CardTitle from '@/components/ui/card/card-title.svelte';

    let designs = [
        {
            name: 'Virtel Logo',
            description: '',
            link: 'https://virtel.netlify.app/',
            imglink: '/designs/virtel-logo.png',
        },
        {
            name: 'Virtel Logo 3D',
            description: '',
            link: 'https://virtel.netlify.app/',
            imglink: '/designs/virtel-logo-3d.png',
        },
        {
            name: 'Netufos Logo',
            description: 'The school`s newest online platform.',
            link: 'https://netufos.vercel.app/',
            imglink: '/designs/netufos-logo.png',
        },
        {
            name: 'STUI Logo',
            description: 'The best way to create a shared schedule for your team. Displays the current event, rings a bell when a new event starts',
            link: 'https://stuione.vercel.app/',
            imglink: 'https://stuione.vercel.app/logo.png',
        },
        {
            name: 'Parkur Logo',
            description: 'Shared links and events between people displayed by category and time',
            link: 'https://parkur.vercel.app/',
            imglink: 'https://parkur.vercel.app/favicon.png',
        },
        {
            name: 'Netufos 1.0 Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos1-logo.png',
        },
        {
            name: 'Netufos 1.0 Banner',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos1-banner.png',
        },
        {
            name: 'Youtube Channel Logo',
            description: 'Shared links and events between people displayed by category and time',
            link: 'https://www.youtube.com/@esperantorevenis',
            imglink: 'https://yt3.ggpht.com/joELQZ1PlXmbFkLxNbPhKlRNz0OX61EKRCCn23AAez3Qm4lYYdaY7UBN-xswuZYhRP-bwf-Vtg=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'Youtube Channel Banner',
            description: 'Shared links and events between people displayed by category and time',
            link: 'https://www.youtube.com/@esperantorevenis',
            imglink: 'https://yt3.googleusercontent.com/KfVdbz-sbMLnlJ8TB5g2tK_SaDRHjY7YX6EUq6rNVac2GNtJb8OBwpQ0ptLtWuDhLkiV5_BjXA=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        },
        {
            name: 'Chrome Redesigned Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/chrome-redesigned-logo.png',
        },
        {
            name: 'Virtly Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtly-logo.png',
        },
        {
            name: 'Readrate Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/readrate-logo.png',
        },
        {
            name: 'Vlad Avatar',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/vlad-logo.png',
        },
        {
            name: 'YVP Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/yvp-logo.png',
        },
        {
            name: 'Codeo Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/codeo-logo.png',
        },
        {
            name: 'Stickerpack "Hello, my friend"',
            description: 'Shared links and events between people displayed by category and time',
            link: 'https://www.figma.com/design/ZYVi0ENayU0UWhF4FJLm1P/Stickerpack?node-id=0-1&t=gG6Kdg5jfHKJ45ap-1',
            imglink: '/designs/stickerpack.png',
        },
        {
            name: 'Uni Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/uni-logo.png',
        },
        {
            name: 'Uni Logo 2',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/uni-logo-2.png',
        },
        {
            name: 'Youth Zone Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-logo.png',
        },
        {
            name: 'Desktop Background Orange',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/desktop-bg-1.png',
        },
        {
            name: 'Desktop Background Purple',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/desktop-bg-2.png',
        },
        {
            name: 'Certificate of Excellence',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/certificate-netufos.png',
            link: 'https://www.figma.com/design/yYLjVhNQAS54RPNixaJes7/NetufosProd?node-id=0-1&t=2uuFQU3SOPaHnWaV-1'
        },
        {
            name: 'Hire Job Post',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/hire-job-post.png',
            link: 'https://www.figma.com/design/yYLjVhNQAS54RPNixaJes7/NetufosProd?node-id=0-1&t=2uuFQU3SOPaHnWaV-1'
        },
        {
            name: 'Youth Community Logo',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youth-community-logo.png',
        },
        {
            name: 'Youthzone Thanks Letter',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/thanks-letter-youthzone.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Thanks Letter 2',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/thanks-letter-youthzone-2.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youth Card',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youth-card.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Post Background 1',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/post-bg-1.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Post Background 2',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/post-bg-2.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Post Background 3',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/post-bg-3.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Post Background 4',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/post-bg-4.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Post Background 5',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/post-bg-5.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 1',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-1.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 2',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-2.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 3',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-3.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 4',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-4.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 5',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-5.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 6',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-6.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 7',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-7.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 8',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-8.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 9',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-9.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 10',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-10.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 11',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-11.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 12',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-12.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 13',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-13.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 14',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-14.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 15',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-15.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 16',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-16.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 17',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-17.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 18',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-18.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post Image 1',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-image-1.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post Image 2',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-image-2.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 19',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-19.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 20',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-20.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 21',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-21.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 22',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-22.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 23',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-23.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 24',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-24.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 25',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/youthzone-post-25.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Youthzone Post 26',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/instagram-banner.png',
            link: 'https://www.figma.com/design/MK5c785SfTpx3QYTe28nXK/Youth-zone-designs?node-id=336-87&t=UH17IFK8XJxE0z3L-1'
        },
        {
            name: 'Netufos Hello Page',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos-hello-page.png',
            link: 'https://www.figma.com/design/sxK69I10e0Tnh0DnIKTsXM/-Archive--Netufos-Old-Design?node-id=0-1&t=rv9bUW3CmWA0qkzh-1'
        },
        {
            name: 'Netufos New Chat',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos-new-chat.png',
            link: 'https://www.figma.com/design/sxK69I10e0Tnh0DnIKTsXM/-Archive--Netufos-Old-Design?node-id=0-1&t=rv9bUW3CmWA0qkzh-1'
        },
        {
            name: 'Netufos Post Chat',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos-post-chat.png',
            link: 'https://www.figma.com/design/sxK69I10e0Tnh0DnIKTsXM/-Archive--Netufos-Old-Design?node-id=0-1&t=rv9bUW3CmWA0qkzh-1'
        },
        {
            name: 'Netufos Postboard',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos-postboard.png',
            link: 'https://www.figma.com/design/sxK69I10e0Tnh0DnIKTsXM/-Archive--Netufos-Old-Design?node-id=0-1&t=rv9bUW3CmWA0qkzh-1'
        },
        {
            name: 'Netufos Registration',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos-registration.png',
            link: 'https://www.figma.com/design/sxK69I10e0Tnh0DnIKTsXM/-Archive--Netufos-Old-Design?node-id=0-1&t=rv9bUW3CmWA0qkzh-1'
        },
        {
            name: 'Netufos Schedule',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/netufos-schedule.png',
            link: 'https://www.figma.com/design/sxK69I10e0Tnh0DnIKTsXM/-Archive--Netufos-Old-Design?node-id=0-1&t=rv9bUW3CmWA0qkzh-1'
        },
        {
            name: 'Esperanto revenis Video Banner',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/esperanto-video-banner.png',
            link: 'https://www.youtube.com/@esperantorevenis'
        },
        {
            name: 'Virtel Presentations 1',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-1.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 2',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-2.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 3',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-3.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 4',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-4.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 5',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-5.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 6',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-6.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 7',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-7.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 8',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-8.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 9',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-9.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 10',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-10.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 11',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-11.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 12',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-12.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 13',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-13.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 14',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-14.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Presentations 15',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-pr-15.png',
            link: 'https://www.figma.com/design/NeeVFbhwcq9zxgF8ft5ZAM/Virtel-Presentations?node-id=0-1&t=Fp7WL7jLxFhcGQeH-1'
        },
        {
            name: 'Virtel Promo Video',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-promo-video.png',
            link: 'https://www.youtube.com/watch?v=88I7QsRG0v8'
        },
        {
            name: 'Virtel Website',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/virtel-website.png',
            link: 'https://virtel.netlify.app/'
        },
        {
            name: 'STUI Website',
            description: 'Shared links and events between people displayed by category and time',
            imglink: '/designs/stui-website.png',
            link: 'https://stuione.vercel.app/'
        }
    ];
    function openProjectLink(link: string) {
        window.open(link, '_blank');
    }
</script>

<Main>
    <FirstHeroSection>
        <Oh0 class="pb-10">Design Portfolio</Oh0>
        <div class="align-center flex w-full justify-center">
            <Olead class="max-w-md">
                Here, you can explore the various designs I have worked on.
                Designs combining innovation and style.
            </Olead>
        </div>

        <div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
            <Button href="/contacts">Cooperate</Button>
            <Button variant="outline" href="/resume">See resume</Button>
        </div>
    </FirstHeroSection>
    <hr />
    <section class="p-6 flex justify-center">
        <ul class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 w-full max-w-7xl">
            {#each designs as design}
                <ClickableCard class="w-full mb-6 break-inside-avoid-column">
                        <CardHeader class="flex flex-row items-center gap-2"><CardTitle class="flex-1">{design.name}</CardTitle>
                            {#if design.link}
                            <Button onclick={() => openProjectLink(design.link)} variant="outline" size="icon">
                                    <Radio/>
                                </Button>
                        {/if}
                            
                        </CardHeader>
                        {#if design.imglink}
                            <CardContent class="flex flex-col items-center">
                                <img src={design.imglink || '/designs/default.png'} alt={design.name} class="w-full object-cover border rounded-xl" />
                            </CardContent>
                        {/if}
                        
                </ClickableCard>
            {/each}
        </ul>
    </section>

</Main>
