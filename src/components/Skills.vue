<template>
 <h2 class="about-watermark color">About me</h2>
</template>

<script>
export default {};
</script>

<style>
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
