<script>
  import LeftBlock from '../../lib/components/LeftBlock.svelte';
  import RightBlock from '../../lib/components/RightBlock.svelte';
  import {
    Badge
  } from '@sveltestrap/sveltestrap';

</script>
<style>

</style>
<div class="page-container">
    <div style="" id="rula-retsystem"><RightBlock 
        title="Rula Retsystem" alt="" 
        imagelink="imgs/rula-banner1.png">
        <Badge>HTML/CSS</Badge>
        <Badge>Adaptive Web</Badge>
        <Badge>Landing Page</Badge>
        <Badge>Android</Badge>
        <Badge>Firebase</Badge>
        <Badge>App Signer</Badge>
        <Badge>Gradle</Badge>
        <br><br>
        <p>
          An html/css site that also offers 
          download mobile applications
        </p>
        <p>
          This is the website of the so-called mobile application system Rula,
          which, according to the story, provides users with mobile 
          application-services such as the Welta forum and the hybrid email client Rosto
          Rosto client (actually, letters in it are messages (there is no SMTP protocol and such)),
          CloudLib, Rendas (modern chatting with division into channels).
          All apps are downloaded, run and work, and are signed with a 
          security key
        </p>
        <ul>
            <li><a href="https://rula.vercel.app/">This site on the web</a></li>
            <li><a href="https://github.com/vladceresna/rula-site">Site on Github</a></li>
            <li><a href="https://github.com/vladceresna/Welta">Welta on Github</a></li>
            <li><a href="https://github.com/vladceresna/Rosto">Rosto on Github</a></li>
            <li><a href="https://github.com/vladceresna/Rendas">Rendas on Github</a></li>
            <li><a href="https://github.com/vladceresna/CloudLib">CloudLib on Github</a></li>
        </ul>
      </RightBlock></div>
      <div style="" id="my-resume"><LeftBlock 
        title="This my Resume" alt="" 
        imagelink="imgs/my-resume-img.png">
        <Badge>HTML/CSS</Badge>
        <Badge>Svelte</Badge>
        <Badge>Bootstrap (Sveltestrap)</Badge>
        <Badge>Adaptivity</Badge>
        <br><br>
        <p>
            The site you're seeing now
        </p>
        <p>
          A site that showcases my skills and projects displaying my experience.
        </p>
        <ul>
            <li><a href="https://vladceresna.vercel.app/">This site on the web</a></li>
            <li><a href="https://github.com/vladceresna/vladceresna-resume-svelte">My resume on Github</a></li>
        
        </ul>
      </LeftBlock></div>
      <div style="" id="super-fish"><RightBlock 
        title="SuperFish" alt="" 
        imagelink="/imgs/super-fish.jpg">
        <Badge>LibGDX</Badge>
        <Badge>Android</Badge>
        <br><br>
        <p>
          A cross-platform Java LibGDX game about controlling a fish in a polluted ocean
        </p>
        <ul>
            <li><a href="https://github.com/vladceresna/SuperFish">SuperFish on Github</a></li>
        </ul>
      </RightBlock></div>
      <div style="" id="netget"><LeftBlock 
        title="NetGet" alt="" 
        imagelink="/imgs/netget.png">
        <Badge>Java</Badge>
        <Badge>Spring</Badge>
        <Badge>Vaadin</Badge>
        <Badge>Gradle</Badge>
        <Badge>JSoup</Badge>
        <Badge>Redis (RedisJSON) (Jedis)</Badge>
        <br><br>
        <p>
          Internet scanner and search for sites among the scanned ones.
          You could say search engine.
        </p>
        <ul>
            <li><a href="https://github.com/vladceresna/NetGet">NetGet on Github</a></li>
        </ul>
      </LeftBlock></div>
      <div style="" id="svacy"><RightBlock 
        title="Svacy" alt="" 
        imagelink="imgs/svacy.jpg">
        <Badge>Kotlin</Badge>
        <Badge>Java</Badge>
        <Badge>Android</Badge>
        <Badge>WebView</Badge>
        <br><br>
        <p>
          The simple browser for Android smartphones.
        </p>
        <ul>
            <li><a href="https://github.com/vladceresna/Svacy">Svacy on Github</a></li>
        </ul>
      </RightBlock></div>
      <div style="" id="designs"><LeftBlock 
        title="Designs" alt="" 
        imagelink="/imgs/figma-design.png">
        <Badge>Figma</Badge>
        <Badge>Desktop</Badge>
        <br><br>
        <p>
          Design of the desktop version of the ERP website
        </p>
        <ul>
            <li><a href="https://www.figma.com/file/sxK69I10e0Tnh0DnIKTsXM/Netufos?type=design&node-id=0%3A1&mode=design&t=qRpCAGsj7IKcPYV6-1?">Design on Figma</a></li>
        </ul>
      </LeftBlock></div>
      <div style="" id="logotypes"><RightBlock 
        title="Logotypes" alt="" 
        imagelink="/imgs/logo-design.png">
        <Badge>Figma</Badge>
        <Badge>Logo</Badge>
        <br><br>
        <p>
          My experience in creating modern and beautiful logos
        </p>
        <ul>
            <li><a href="/uiex/logo (1).jpg">Rula logo</a></li>
            <li><a href="/uiex/logo (2).png">Netufos banner</a></li>
            <li><a href="/uiex/logo (3).png">Vlad Ceresna`s avatar</a></li>
            <li><a href="/uiex/logo (4).png">Codeo IDE logo</a></li>
            <li><a href="/uiex/logo (5).png">Netufos logo</a></li>
            <li><a href="/uiex/logo-uni (3).png">Youth zone logo 1</a></li>
            <li><a href="/uiex/logo-uni (4).png">Uni logo 1</a></li>
            <li><a href="/uiex/logo-uni (5).png">Uni logo 2</a></li>
            <li><a href="/uiex/logo-uni (6).png">Juni! logo</a></li>
            <li><a href="/uiex/logo-uni (7).png">Youth zone logo 2</a></li>
            <li><a href="/uiex/logo-uni (8).png">Youth zone logo 3</a></li> 
            
        </ul>
      </RightBlock></div>

</div>