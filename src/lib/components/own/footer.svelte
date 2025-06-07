
<script>
  import Logo from "./logo.svelte";
</script>
  
  <footer class="py-7 md:py-14">
    <div class="mx-auto max-w-5xl p-6 border rounded-xl  bg-[url('/footer.png')] bg-cover bg-center">
      <a href="/" aria-label="go home" class="mx-auto block size-fit">
        <Logo />
      </a>
      <div class="text-muted-foreground block text-center text-sm pt-6 flex flex-col gap-2">
        <div>Portfolio of
          <a href="https://vladceresna.netlify.app" class="text-muted-foreground hover:text-primary underline underline-offset-4">
            vladceresna
          </a>
        </div>
        <div>Contact me at
          <a href="mailto:vladceresna6@gmail.com" class="text-muted-foreground hover:text-primary underline underline-offset-4">
            vladceresna6@gmail.com
          </a>
        </div>
        Copyright © 2022-{new Date().getFullYear()}, Vlad Ceresna. All rights reserved.
      </div>
    </div>
  </footer>
  