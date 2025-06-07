<script lang="ts">
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "$lib/components/ui/accordion";
    let faqItems = [
      {
        id: "item-1",
        question: "What kind of job would you take?",
        answer:
          "Full-time, part-time and freelance. "+
          "You can hire me if you have a task to make any website, application or even a server on a one-time or long-term basis",
      },
      {
        id: "item-2",
        question: "What technologies can you use in development?",
        answer:
          "I have at least one framework from each area of technology in my arsenal, so I can easily use all kinds of frameworks, and develop even on ones I've never heard of before",
      },
      
    ];
  </script>
  
  <section class="py-16 md:py-24" id="details">
    <div class="mx-auto max-w-5xl px-4 md:px-6">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
          FAQ
        </h2>
        <p class="text-muted-foreground mt-4 text-balance">
          Find out the most common questions about my specialization
        </p>
      </div>
  
      <div class="mx-auto mt-12 max-w-xl">
        <Accordion
          type="single"
          class="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
        >
          {#each faqItems as item, index}
            <AccordionItem
              value={item.id}
              class={[
                faqItems.length - 1 !== index ? "border-dashed" : "border-none",
              ]}
            >
              <AccordionTrigger
                class="cursor-pointer text-base hover:no-underline"
                >{item.question}</AccordionTrigger
              >
              <AccordionContent>
                <p class="text-base">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          {/each}
        </Accordion>
  
        <p class="text-muted-foreground mt-6 px-4">
            Didn't find what you were looking for? Contact {" "}
            <a href="mailto:vladceresna6@gmail.com" class="text-primary font-medium hover:underline">
            me directly
            </a>
        </p>
      </div>
    </div>
  </section>
  