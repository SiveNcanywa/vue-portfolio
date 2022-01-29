<template>
 
  <section id="Projects">
     <h2 class="projects-watermark color">My projects</h2>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button onclick="seeMore" class="btn btn-primary">Go somewhere</button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href=" " class="btn btn-show-all" target="_blank"
      >Hire me<i class="fas fa-chevron-right"></i
    ></a>
    </section>
  
  
</template>

<script>
export default {

};

</script>

<style>
#about h2 {
  text-align: center;
  font-size: 40px;
  padding-top: 100px;
  text-transform: uppercase;
  z-index: 2;
}

.projects-watermark {
  position: relative;
}

.projects-watermark::before {
  position: absolute;
  top: -29%;
  left: 50%;
  height: 100%;
  /* width: 100%; */
  color: lightgray;
  opacity: 0.5;
  content: "MY PROJECTS";
  z-index: -1;
  transform: translate(-50%, 25%) scale(2);
}
</style>
