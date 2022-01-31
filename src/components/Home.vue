<template>
  <section id="Home">
    <div>

  <ul>
    <li><a href="https://www.linkedin.com/in/sive-christina-0b2930223/" target="_blank">
        <i class="fab fa-linkedin" tabindex="0"></i>
      </a></li>
    <li><a href="https://codepen.io/sivencanywa" target="_blank">
        <i class="fab fa-codepen" tabindex="0"></i>
      </a></li>
    
    <li><a href="https://github.com/SiveNcanywa" target="_blank">
        <i class="fab fa-github" tabindex="0"></i>
      </a></li>
 
   
  </ul>
</div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#Home {
  margin: 0;
  padding: 0;
  background-color:#193050;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

div {
  font-family: "Merriweather", serif;
  font-size: 2rem;
}

p,
a {
  text-align: center;
  /* margin-top: 5%; */
  margin-bottom: 2rem;
  color: #eee;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* margin: 1rem; */
  list-style-type: none;
  font-size: 2rem;
  padding: 26rem;
}

ul li {
  padding: 1rem;
}

.fab {
  font-size: 5rem;
}

/* transition for social icon hover animation */

.fa-codepen,
.fa-linkedin,
.fa-github{
  transition: 0.4s;
  cursor: pointer;
}

/* social media icons hover color */

.fa-github:hover,
.fa-github:focus {
  color: #000;
  transform: scale(1.1);
}

.fa-github:hover,
.fa-github:focus {
  color: #000;
  transform: scale(1.1);
}

.fa-codepen:hover,
.fa-codepen:focus {
  color: #000;
  transform: scale(1.1);
}

.fa-linkedin:hover,
.fa-linkedin:focus {
  color: blue;
}

</style>
