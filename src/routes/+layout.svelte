<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</svelte:head>
<script lang="js">
    import {
    Image,
    Button,
    Badge,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from '@sveltestrap/sveltestrap';
  import LeftBlock from '../lib/components/LeftBlock.svelte'
  import RightBlock from '../lib/components/RightBlock.svelte'

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
  function changeOpened(){
    isOpen = !isOpen
  }

  const skills = [
    '-----strong knowledge of-----',
    'Java',
    'Spring',
    'SpringMVC',
    'Rest API',
    'Hibernate',
    'Postgres',
    'Redis',
    'RedisJSON',
    'Android',
    'Retrofit',
    'Firebase',
    'Maven',
    'Gradle',
    'HTML/CSS',
    'Adaptivity',
    'Svelte',
    'ML Neuroph Framework',
    'Git/GitHub',
    '-----basics of------',
    'JS',
    'TS',
    'Python',
  ];
</script>
<style>
  .body{
    padding-top: 76px;
  }
  main,footer{
    padding: 5% 10% ;
  }
  main{
    word-wrap:break-word;
    color:white;
    background: linear-gradient(90deg, rgba(29,29,29,1) 0%, rgba(0,65,69,1) 50%, rgba(12,103,0,1) 100%);
  }
  footer{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,110,115,1) 50%, rgba(30,150,0,1) 100%);
    color:white;
  }
  a{
    color:cyan;
  }
    
</style>
  
  <Navbar dark=true style="width:100%;position: fixed;z-index:1000;background:linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,110,115,1) 50%, rgba(30,150,0,1) 100%);" light expand="md" container="md">
    <NavbarBrand style="width:7%;word-wrap:normal" href="/"><Image style="width:50px; margin:0 10px; 0 0" alt="logo" src="/favicon.png"/>Resume of Vlad Ĉereŝna</NavbarBrand>
    <NavbarToggler style="width:10%;" on:click={changeOpened} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar color=white>
        <NavItem>
          <NavLink href="/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects/">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact/">Contact me</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  
<div class="body">
<LeftBlock title="Vlad Ĉereŝna" imagelink="https://www.iss.nus.edu.sg/images/default-source/default-album/software-dev.jpg?Status=Master&sfvrsn=aa8aa05f_0">
  Junior Java Developer
  <div >
    {#each skills as skill}
      <Badge style="margin:2px" color="primary">{skill}</Badge>
    {/each}
  </div>

</LeftBlock>
<main>
    <slot/>
</main>
<footer>
    <h2>Resume of <span style="color:limegreen">Vlad Ĉereŝna</span></h2>
    <h6>e-mail: <a href="mailto:vladceresna6@gmail.com">vladceresna6@gmail.com</a></h6>
    <h6>Copyright © Vlad Ĉereŝna, 2023-2024</h6>
</footer>
</div>