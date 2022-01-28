<template>
  <nav>
    <a href="#Home">Home</a>
    <a href="#About">About</a>
    <a href="#Resume">Resume</a>
    <a href="#Skills">Skills</a>
    <a href="#Projects">Projects</a>
    <a href="#Testimonials">Testimonials</a>
    <a href="#Contact">Contact</a>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 10px 60px;
  box-sizing: border-box;
  transition: 0.5s;
  z-index: 5;
  opacity: 1;
  background: linear-gradient(0deg, rgba(5, 4, 71, 0.3), rgba(5, 4, 71, 0.3));
}
nav.black {
  background: rgba(0, 0, 0, 0.8);
  height: 80px;
  padding: 10px 50px;
}

nav a {
  float: right;
  margin: 0;
  padding: 0;
  display: flex;
}
nav a {
  list-style: none;
  margin-top: 25px;
  line-height: none;
  font-size: 18px;
  color: white;
  padding: 5px 15px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 1s;
  text-shadow: 0 0 10px #000;
}
/* nav ul li a{
  line-height: none;
  font-size: 18px;
  color: white;
  padding: 5px 15px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 1s;
  text-shadow: 0 0 10px #000;
} */

/* nav.black ul li a{
  color: #fff;
  line-height: 20px;
} */
nav.black ul li {
  color: #fff;
  line-height: 20px;
}
/* nav ul li a.active,
nav ul li a:hover{
  color: orange;
} */
nav ul li.active,
nav ul li:hover {
  color: orange;
}
</style>
