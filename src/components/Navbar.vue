<template>
  <nav class="navbar navbar-expand-lg">
    <div class="logo">
      <a href="#Home">
        <span class="name">Sive</span>
        <span class="initial">CN.</span>
      </a>
    </div>
    <ul class="menu">
      <li><a href="#Home" class="menu-btn">Home</a></li>
      <li><a href="#About" class="menu-btn">About</a></li>
      <li><a href="#Resume" class="menu-btn">Resume</a></li>
      <li><a href="#Projects" class="menu-btn">Projects</a></li>
      <li><a href="#Skills" class="menu-btn">Skills</a></li>
      <li><a href="#Testimonials" class="menu-btn">Testimonials</a></li>
      <li><a href="#Contact" class="menu-btn">Contact</a></li>
    </ul>
  </nav>
  <!-- <div class="mobile-nav">
    <nav class="m-nav">
      <a href="#landing-page" class="mobile">HOME</a>
      <a href="#about-page" class="mobile">ABOUT</a>
      <a href="#projects-page" class="mobile">PROJECTS</a>
      <a href="#testimonials-page" class="mobile">TESTIMONIALS</a>
      <a href="#contact-page" class="mobile">CONTACT</a>
    </nav>
  </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.navbar {
  display: flex;
  width: 100%;
  background-color: #193050;
  box-shadow: 0 0 10px rgba(0, 0, 0, 20%);
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 1;
}
.logo {
  margin-left: 2rem;
}
.initial {
  color: #00b8ca;
  font-size: xx-large;
  font-weight: 900;
}
.name {
  color: #fff;
  font-size: xx-large;
  font-weight: 900;
}
.logo a {
  text-decoration: none;
  color: #fff;
}
.menu {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  column-gap: 2rem;
  margin-right: 2rem;
}
.menu a {
  text-decoration: none;
  color: #fff;
  padding: 10px;
  font-size: large;
  font-weight: 600;
}
@media screen and (max-width: 600px) {
  .menu a:not(:first-child) {display: none;}
  .menu a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .menu.responsive {position: relative;}
  .menu.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
