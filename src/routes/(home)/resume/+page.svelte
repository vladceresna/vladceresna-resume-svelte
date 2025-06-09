<script>
	import FirstHeroSection from "@/components/own/first-hero-section.svelte";
	import Main from "@/components/own/main.svelte";
	import Oh0 from "@/components/typography/oh0.svelte";
	import Oh1 from "@/components/typography/oh1.svelte";
	import Olead from "@/components/typography/olead.svelte";
	import Op from "@/components/typography/op.svelte";
	import Button from "@/components/ui/button/button.svelte";
	import CardContent from "@/components/ui/card/card-content.svelte";
	import Card from "@/components/ui/card/card.svelte";

</script>
<Main>
    <FirstHeroSection>
		<Oh0 class="pb-10">Resume</Oh0>
		<div class="align-center flex w-full justify-center">
			<Olead class="max-w-2xl">
				Here, you can find my resume, which outlines my professional journey, skills, and experiences. 
                It provides a comprehensive overview of my qualifications and achievements.
			</Olead>
		</div>
		<div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
			<Button href="/contacts">Cooperate</Button>
			<Button variant="outline" href="/projects">See projects</Button>
		</div>
	</FirstHeroSection>
    <hr />
    <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Summary</Oh1>
        <Card class="max-w-2xl mx-auto">
          <CardContent>
            <Op class="mb-0">
              I'm a 17-year-old Fullstack Developer and product builder with deep experience in backend, frontend,
              cross-platform apps, design, and team leadership. I've created award-winning tools, led 30-person tech teams,
              and built platforms from scratch using modern technologies. Looking for opportunities to grow and contribute
              to real-world impact.
            </Op>
          </CardContent>
        </Card>
      </section>
      
      <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Skills</Oh1>
        <Card class="max-w-2xl mx-auto">
          <CardContent>
            <Op class="mb-2">💻 Languages: Java, Kotlin, Python, JavaScript, TypeScript, HTML, CSS</Op>
            <Op class="mb-2">⚙️ Frameworks: React, Next.js, Svelte, Angular, Node.js, Ktor, Spring Boot, Spring Security, Jetpack Compose, Compose Multiplatform, Android SDK, Vaadin</Op>
            <Op class="mb-2">🗄️ Databases: PostgreSQL, MySQL, Redis, Firebase, Appwrite</Op>
            <Op class="mb-2">🛠️ Tools: Git, Github, Figma, Jira, ClickUp, Linear</Op>
            <Op class="mb-0">🎨 Other: UI/UX Design, Project Management, Agile, Scrum, Kanban, Mentoring, REST API, WebSockets</Op>
          </CardContent>
        </Card>
      </section>
      
      <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Projects</Oh1>
        <Card class="max-w-2xl mx-auto">
          <CardContent>
            <Op class="mb-2">🖥️ Virtel - Hybrid OS/browser with its own programming language; multi-awarded and innovative platform.</Op>
            <Op class="mb-2">🌐 Netufos - Modern online school platform; led a cross-functional team of 30 developers.</Op>
            <Op class="mb-2">📧 Rula - Ecosystem of Google-like services: email, forum, upcoming chat and cloud storage.</Op>
            <Op class="mb-2">📅 STUI - Team scheduling tool with real-time event notifications.</Op>
            <Op class="mb-2">🔍 NetGet - Local internet scanner and search engine built on Spring and Vaadin.</Op>
            <Op class="mb-2">🔗 Parkur - Platform for sharing categorized links and events by time.</Op>
            <Op class="mb-0 italic">More on the <a href="/projects" class="text-primary underline">Projects</a> page</Op>
          </CardContent>
        </Card>
      </section>
      
      
      <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Experience & Leadership</Oh1>
        <Card class="max-w-2xl mx-auto">
          <CardContent>
            <Op class="mb-2">🧑‍💻 Fullstack Developer - 5+ years of hands-on experience (web, mobile, desktop)</Op>
            <Op class="mb-2">🧠 Creator of Virtel - operating system & language, awarded nationally</Op>
            <Op class="mb-2">🚀 Founder & Lead of 30-person EdTech startup team (1 year)</Op>
            <Op class="mb-2">🧩 Project manager, recruiter, team trainer, and architect</Op>
            <Op class="mb-2">🎨 UI/UX designer, videomaker, electronics & origami hobbyist</Op>
            <Op class="mb-2">📺 YouTube creator (Esperanto revenis): 700+ subs, 40K+ video views</Op>
            <Op class="mb-0">📢 Active youth leader and event organizer in local community</Op>
          </CardContent>
        </Card>
      </section>
      
      
      <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Education</Oh1>
        <Card class="max-w-2xl mx-auto">
          <CardContent>
            <Op class="mb-2">🎓 High School Graduate with honors - Ukraine, 2025</Op>
            <Op class="mb-2">🎶 Graduated from Music School (accordion, piano, vocals)</Op>
            <Op class="mb-2">📜 IT Skills Standard Certification - 3x by Regional IT Cluster</Op>
            <Op class="mb-2">🧠 Self-taught in programming and design through online resources</Op>
            <Op class="mb-0">📘 Planning to study Computer Science in Poland</Op>
          </CardContent>
        </Card>
      </section>
      
      
      <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Awards</Oh1>
        <Card class="max-w-2xl mx-auto">
          <CardContent>
            <Op class="mb-2">🥇 Encode The Future - 1st place (national level)</Op>
            <Op class="mb-2">🥇 Summer IT School - 1st place (national level)</Op>
            <Op class="mb-2">🥉 Infomatrix Ukraine - Bronze medal (national stage of international competition)</Op>
            <Op class="mb-2">🥉 JASU - 3rd place (regional stage of the Junior Academy of Sciences of Ukraine)</Op>
            <Op class="mb-2">🏆 District Programming Olympiads - 1st place (district level, multiple years)</Op>
            <Op class="mb-2">🏅 International Challenges - Participant in Reply Code Challenge & DataArt Proggy-Buggy (international level)</Op>
            <Op class="mb-0">🏅 Other awards in other fields</Op>
          </CardContent>
        </Card>
      </section>
      
      
      
      <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Languages</Oh1>
        <Card class="max-w-2xl mx-auto">
          <CardContent>
            <Op class="mb-2">Ukrainian 🇺🇦 - Native</Op>
            <Op class="mb-2">Russian 🇷🇺 - Fluent</Op>
            <Op class="mb-2">English 🇬🇧 - Upper-Intermediate</Op>
            <Op class="mb-2">Esperanto 🌍 - Intermediate</Op>
            <Op class="mb-0">Polish 🇵🇱 - Intermediate</Op>
          </CardContent>
        </Card>
      </section>
      
      <section class="flex flex-col items-center justify-center gap-4 p-10">
        <Oh1 class="pb-6">Contact</Oh1>
        <Button href="/contacts">Get in touch</Button>
      </section>
      
</Main>