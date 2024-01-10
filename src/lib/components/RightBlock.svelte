<script lang="js">
  import {
    Button,
    Image
  } from '@sveltestrap/sveltestrap';
  export let title;
  export let imagelink;
</script>
<style>
  
</style>
<div>
  <Image alt="image" fluid theme="auto" thumbnail figure={false} src="{imagelink}"/>
  <div>
    <h2>{title}</h2>
    <div>
      <slot/>
    </div>
  </div>
  
</div>