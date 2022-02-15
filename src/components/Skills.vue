<template>

  <section id="Skills">
     <h2 class="title">My Skills</h2>
 <div class="container">
   <div class="container-box">
     <div class="container-logo">
      <i class="fas fa-globe"></i>
     </div>
     <div class="container-title">
       <h3>Web Development</h3>
       <div class="container-data">
         <a href="#">HTML <i class="fab fa-html5"></i></a>
         <a href="#">CSS <i class="fab fa-css3-alt"></i></a>
         <a href="#">Javascript <i class="fab fa-js"></i></a>
         <a href="#">Bootscrap<i class="fab fa-html5"></i></a>
       </div>
     </div>
   </div>
    
   <div class="container-box">
     <div class="container-logo">
      <i class="fas fa-tools"></i>
     </div>
     <div class="container-title">
       <h3>Framework</h3>
       <div class="container-data">
         <a href="#">Vue.Js<i class="fab fa-html5"></i></a>
         <a href="#">Express<i class="fab fa-css3-alt"></i></a>
         <a href="#">Node.Js<i class="fab fa-js"></i></a>
         
       </div>
     </div>
   </div>
    <div class="container-box">
     <div class="container-logo">
      <i class="fas fa-database"></i>
     </div>
     <div class="container-title">
       <h3>Database</h3>
       <div class="container-data">
         <a href="#">MYSQL<i class="fas fa-mysql"></i></a>
        
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
#Skills{
    background-color:  #f8f8f8;
     width: 100%;
   height: 100%;
   box-sizing: border-box;
}
section .title{
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
}
section .title::before{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #193050;
    transform: translateX(-50%);
}
section .title::after{
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
  margin-top: 20px;
}
.container-box {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  width: 400px;
  height: 300px;
  border-radius: 10%;
  background-color: #193050;
}
.container-logo {
  text-align: center;
  margin: 20px 0;
  transition: 0.3s;
}
.container-logo i {
  color: white;
  background-color: blue;
  padding: 15px 18px;
  font-size: 30px;
  border-radius: 30%;
  cursor: pointer;
}
.container-logo:hover {
  transform: scale(1.2);
}
.container-title {
  color: white;
  text-align: center;
}
.container-title h3 {
  margin-bottom: 20px;
}
.container-data {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
}
.container a {
  transition: 0.3s;
  text-decoration: none;
  color: white;
  text-align: left;
  padding: 10px 0;
  font-size: 18px ;
  float: right;
}
.container a:hover {
  transform: scale(1.1);
}
@media screen and (max-width: 968px) {
  .container-box {
    margin: 20px 0;
  }
}


</style>
