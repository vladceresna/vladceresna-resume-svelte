<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
	import Faq from "@/components/shared/home/faq.svelte";
	import Oh0 from "@/components/typography/oh0.svelte";
	import Oh1 from "@/components/typography/oh1.svelte";
	import Oh2 from "@/components/typography/oh2.svelte";
	import Oh3 from "@/components/typography/oh3.svelte";
	import Olarge from "@/components/typography/olarge.svelte";
	import Olead from "@/components/typography/olead.svelte";
	import Omuted from "@/components/typography/omuted.svelte";
	import Op from "@/components/typography/op.svelte";
	import Oul from "@/components/typography/oul.svelte";
  
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
    
    
</script>

    <main class="overflow-hidden w-full">
      <div
        class="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div
          class="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
        ></div>
        <div
          class="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"
        ></div>
        <div
          class="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
        ></div>
      </div>
      <section class=" bg-[url(/hero1.png)] bg-cover bg-center pb-20">
        <div class="relative pt-24 md:pt-36">
          <div
            class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
          ></div>
          <div class="mx-auto max-w-7xl px-6">
            <div class="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <div class="mb-5">
                <a href="/contacts"
                  class="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 transition-colors duration-300 dark:border-t-white/5"
                >
                  <span class="text-foreground text-sm">🚀 Hire me!</span>
                  <span
                    class="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"
                  ></span>
  
                  <div
                    class="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500"
                  >
                    <div
                      class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
                    >
                      <span class="flex size-6">
                        <ArrowRight class="m-auto size-3" />
                      </span>
                      <span class="flex size-6">
                        <ArrowRight class="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
  
              <Oh0 class="pb-10">
                Make everything better
              </Oh0>
              <div class="w-full align-center justify-center flex">
                <Olead class="max-w-2xl">
                  Vlad Ĉereŝna - an award-winning Fullstack developer with experience in creating web 
                  and cross-platform mobile applications using modern technologies
                </Olead>
              </div>
              
  
              <div
                class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <Button href="/contacts">
                    Cooperate
                </Button>
                <Button variant="outline" href="/resume">
                    See resume
                </Button>
              </div>
            </div>
          </div>
  
          <!-- <div
            class="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
          >
            <div
              class="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
            ></div>
            <div
              class="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1"
            >
              <img
                class="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                src="/mail2.png"
                alt="app screen"
                width="2700"
                height="1440"
              />
              <img
                class="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                src="/mail2-light.png"
                alt="app screen"
                width="2700"
                height="1440"
              />
            </div>
          </div> -->
        </div>
      </section>

      <hr>
      <section class="py-6 md:py-12 " id="details">
        <div class="mx-auto max-w-5xl px-4 md:px-6">
          <div class="mx-auto max-w-xl text-center pb-10">
            <Oh1>About me</Oh1>
          </div>
          <div class="bg-background/50 rounded-2xl border backdrop-blur-lg flex md:flex-row flex-col border p-6 gap-6">
            <img
              src="/vladceresna.png"
              alt="Vlad Ĉereŝna"
              class="w-24 h-24 rounded-[45%]"
            />
            <div class="">
              <div class="flex flex-row gap-6">
                <Oh3 class="mb-4 flex-1">Vlad Ĉereŝna</Oh3>
                <Op>
                  Young
                </Op>
              </div>
              <Op>
                Fullstack Developer, Graphic/UI/UX Designer, Videomaker, 
                Youtuber, Singer, Accordionist, Pianist, Chessplayer, Electronics technician,
                Origami enthusiast, Geographer etc.
              </Op>
              <div class="flex flex-col md:flex-row gap-4">
                <Button href="/projects">Projects</Button>
                <Button href="/way" variant="secondary">My Way</Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Faq/>

      
    </main>
