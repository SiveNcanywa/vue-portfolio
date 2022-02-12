<template>
  <section id="Home"><Home /></section>
  <section id="About"><About /></section>
  <section id="Skills"><Skills /></section>
  <section id="Projects"><Projects /></section>
  <section id="Testimonials"><Testimonials /></section>
  <section id="Contact"><Contact /></section>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Testimonials from "./Testimonials.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    Home,
    About,
    Skills,
    Projects,
    Testimonials,
    Contact,
  },
};
</script>

<style>

</style>
