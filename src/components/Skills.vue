<template>
<section id="skills">
 <h2 class="about-watermark color">About me</h2>
 <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="https://i.postimg.cc/YqBRVSFL/javascript.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Javascript</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="https://i.postimg.cc/zfyT3mW1/powerpoint.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Microsoft Powerpoint</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
             
            </div>
          </div>
        </div>
        
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="https://i.postimg.cc/nzkVJrzV/mysql.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">MYSQL</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="https://i.postimg.cc/RhymTHhF/1200px-Bootstrap-logo-svg.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Bootscrap 5</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="https://i.postimg.cc/vHftMdyg/croped.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">CSS</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
             
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="https://i.postimg.cc/HsckRpQ5/vue.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Vue Js</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
#skills{
  height: 100vh;

}
#about h2 {
  text-align: center;
  font-size: 40px;
  padding-top: 100px;
  text-transform: uppercase;
  z-index: 2;
}

.about-watermark {
  position: relative;
}

.about-watermark::before {
  position: absolute;
  top: -29%;
  left: 50%;
  height: 100%;
  /* width: 100%; */
  color: lightgray;
  opacity: 0.5;
  content: "RESUME";
  z-index: -1;
  transform: translate(-50%, 25%) scale(2);
}
</style>
