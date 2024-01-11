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
  padding: 30px 0 30px 5%;
  vertical-align: middle;
  height: 100%;
  justify-content:space-between;
}
.left-block{
  width: 40%;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.right-block{
  align-items: end;
  width: 50%;
  display: inline-flex;
  vertical-align: middle;
  height: 100%;
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