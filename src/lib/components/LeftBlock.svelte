<script lang="js">
  import {
    Button,
    Image
  } from '@sveltestrap/sveltestrap';
  export let title;
  export let imagelink;
</script>
<style>
.container{
  padding: 30px 5%;
}
.left-block{
  width: 45%;
  display: inline-block;
}
.right-block{
  width: 45%;
  display: inline-flex;
}
</style>
<div class="container">
  <div class="left-block">
    <h2>{title}</h2>
    <div>
      <slot/>
    </div>
  </div>
  <div class="right-block">
    <Image  alt="image" fluid theme="auto" thumbnail figure={false} src="{imagelink}"/>
  </div>
</div>