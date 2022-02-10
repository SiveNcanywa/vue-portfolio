<template>
  <section id="skills">
    <div class="myskill">
  <div class="flexcontainer">
    <div class="colouredShape"><i class="fab fa-bootstrap"></i></div>
    <div class="colouredShape"><i class="fab fa-vuejs"></i></div>
        <div class="colouredShape"><i class="fab fa-js-square"></i></div>
        <div class="colouredShape"><i class="fab fa-html5"></i></div>
        <div class="colouredShape"> <i class="fab fa-css3-alt"></i></div>
        <div class="colouredShape"> <i class="fas fa-database"></i></div>
  </div>
  </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#skills{
    background-color:  #20445B;
}
.myskill {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: sans-serif;
  color: dimgray;
}

footer {
  font-size: 12px;
  margin: auto;
}

.flexcontainer {
  padding: 0px;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

}

.colouredShape{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 64px;
  margin-right: 24px;
  background-color: #193050;
  border: solid 4px;
  /* Shadow tutorial: http://www.corelangs.com/css/box/shadow.html */
  box-shadow: 5px 5px 5px rgba(0,0,0,0.05);


  text-align: center;
  line-height: 200px;
  font-weight: bold;
  color: white;
  font-size: 3em;
}

</style>
