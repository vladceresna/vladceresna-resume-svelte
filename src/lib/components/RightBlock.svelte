<script lang="js">
  import {
    Button,
    Col,
    Figure,
    Image,
    Container,
    Row
  } from '@sveltestrap/sveltestrap';
  export let title;
  export let alt;
  export let imagelink;
</script>
<style>
  .containerr{
    padding: 4% 0;
  }
  .left-block .right-block{
    height: 100%;
    vertical-align: middle;
  }
</style>
<div class="containerr">
  <Container>
    <Row style="align-items: center;"> 
      <Col xs="6">
        <div class="right-block">
          <Figure caption="{alt}" 
          style="color:burlywood;
          word-wrap: break-word;
          overflow-wrap:break-word;
          text-wrap:wrap;
          width:100%;
          font-size:xx-small;">
            <Image style="border:solid 5px green;
            border-radius:20px;
            " alt="{alt}" fluid theme="auto" figure={true} src="{imagelink}"/>
          </Figure>
        </div>
      </Col>
      <Col xs="6" style="height:100%;">
        <div class="left-block">
          <h2>{title}</h2>
          <div>
            <slot/>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>