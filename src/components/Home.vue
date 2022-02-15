<template>
  <section id="Home">
    <!-- <Navbar /> -->
     <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa- fa-bars"></i>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item"  href="#Home"     type="button">Home</button></li>
    <li><button class="dropdown-item"  href="#About"     type="button">About</button></li>
    <li><button class="dropdown-item"  href="#Skills"     type="button">Skills</button></li>
     <li><button class="dropdown-item" href="#Projects"      type="button">Projects</button></li>
    <li><button class="dropdown-item"  href="#Testimonials"     type="button">Testimonials</button></li>
    <li><button class="dropdown-item"  href="#Contact"     type="button">Contact</button></li>
  </ul>
</div>
    <div class="stuff">
      <div class="left">
        
        <h4>Aspiring Full Stack Developer</h4>
       <h1 class="name">Sive Chrestena Ncanywa</h1>
       <div class="buttons">
       <button type="button"  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sive.ncanywa@gmail.com" class="hire">Hire me</button>
<button type="button"  href="#About" class="more">More about me</button>

</div>

      </div>
      <div class="right">
        <img src="https://i.postimg.cc/PqkzRwXW/lili-removebg-preview.png" alt="myself" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // components: { NAVBAR }
};
</script>

<style scoped>
#Home {
  margin: 0;
  background: linear-gradient(90deg, #f8f8f8 50%, #193050 50%);
  height: 100vh;
}
.right {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 15rem;
}
.left {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 15rem;
}
.stuff {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10%;
  display: flex;
}
.buttons{
  display: flex;
  justify-content: center;
  padding: 10px;

}
.more{
  background-color:#f8f8f8 ;
  margin: 10px;
  height: 4rem;
  width: 10rem;
}
.hire{
  margin: 10px;
  background-color: #193050;
  height: 4rem;
  width: 10rem;
}
.name{
  color: black;
  font-size: 60px;
  font-weight: 400;
  display: flex;
    font-family: 'Ubuntu', sans-serif;
}

.dropdown{
  left: 700px;
  top: 100px;
}
</style>
