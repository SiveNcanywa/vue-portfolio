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
/* Offcanvas Navbar */
/* .menu {
  display: block;

  width: 40px;

  cursor: pointer;

  outline: none;

  appearance: none;

  background: none;

  border: none;

  z-index: 99;
}

.menu .bar,
.menu:before,
.menu:after {
  content: "";

  display: block;

  width: 100%;

  height: 5px;

  margin: 0 auto 5px;

  background-color: #000;

  transition: 0.5s ease-in-out;
}

.menu.is-active:before {
  transform: rotate(45deg) translate(8px, 6px);
}

.menu.is-active:after {
  transform: rotate(-45deg) translate(8px, -6px);
}

.menu.is-active .bar {
  transform: translate(-25px, 0px);
  opacity: 0;
}

.nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.scroll {
  background-color: #a1572f;
  color: #eef;
}

.nav a {
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  transition: 200ms ease-in-out;
  padding: 20px;
}

nav a:hover {
  color: aqua;
}

.mobile-nav {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: -100%;

  background-color: rgba(0, 0, 0, 85%);
  width: 50%;
  height: 100%;
  z-index: 99;
  transition: 0.4s ease-in-out;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.7);
}

.m-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
}

.m-nav a {
  text-decoration: none;
  width: 100%;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  transition: 200ms ease-in-out;
  background-color: rgba(0, 0, 0, 30%);
  padding: 10px;
}

.mobile-nav.is-active {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100%;
  transition: 0.4s ease-in-out;
} */
/* @media only screen and (max-width: 770px) {
  .nav {
    display: none;
  }
  .nav-container {
    display: none;
    box-shadow: none;
    appearance: none;
    margin: 0;
    padding: 0;
  }

  .nav-container svg {
    color: #fff;
    width: 100px;
    margin-left: 1rem;
  }

  .menu-container {
    background-color: transparent;
    width: 100%;
    height: 80px;
    padding: 20px;
    position: fixed;
    top: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 6;
  }
}
@media only screen and (max-width: 2000px) and (min-width: 771px) {
  .menu {
    display: none;
  }
  .mobile-nav {
    display: none;
  }
} */
</style>
