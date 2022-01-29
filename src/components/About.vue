<template>
  <section id="About">
    <h2 class="aboutme-watermark color">About me</h2>
    <div class="row justify-content-evenly">
      <div class="col-4">
        <div class="self">
          <img src="../assets/images/selfieee.png" alt="" />
        </div>
      </div>
      <div class="col-4">
        <div class="bio">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            libero rem mollitia ullam vero fugit quidem facere illo iusto
            recusandae. Magni maiores et a iure reiciendis consequatur, vero
            eaque accusamus?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>

.self,
.self img {
  width: 112%;
  padding-top: 20px;
  object-position: 0px -40px;
  /* width: 30%;
  height: 70%;
  border-radius: 20%;
  padding-left: 40px;
  float: right; */
}
.bio {
  width: 112%;
  padding-top: 20px;
  float: right;
  font-size: 20px;
  /* display: flex; */
}
#about h2 {
  text-align: center;
  font-size: 40px;
  padding-top: 100px;
  text-transform: uppercase;
  z-index: 2;
}

.aboutme-watermark {
  position: relative;
}

.aboutme-watermark::before {
  position: absolute;
  top: -29%;
  left: 50%;
  height: 100%;
  /* width: 100%; */
  color: lightgray;
  opacity: 0.5;
  content: "ABOUT ME";
  z-index: -1;
  transform: translate(-50%, 25%) scale(2);
}

#about {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
