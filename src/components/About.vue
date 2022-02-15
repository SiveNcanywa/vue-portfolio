<template>
  <!-- about section start -->
  <!-- about section start -->
   
  <section class="about" id="About">

   
    <div class="container">
      <div class="max-width">
           <h2 class="title">About me</h2>
        
        <div class="about-content">
          <div class="row">
            <div class="column left">
              <img src="https://i.postimg.cc/rFvcr8j0/sivenc.jpg" alt=" myself"/>
            </div>
            <div class="column right">
              <h1 class="text-effect">Hello I am <span id="list"></span></h1>
            
              <p> I passed my matric in 2020 at Intshukumo Secondary School in Cape Town. In the same year I started dong Voluntary work in two Non-Profit-Organisations whereby I was working with people who are in need and less fortunate.
                Following year in 2021 I did N1  in Electrical Enginnering in Northlink College and completed it. Same year in September I was fortunate to be one of the students at Life Choices Academy doing Coding and that is where I gained my coding skills.

              </p><br>
              <p> I am a hardworking individual who is always keen to learn new things ,I am energetic and always try to give my best in everything I do.I am a sociable individual who loves working with people and my personality could be described as kind and loving.</p><br>
              <p>I believe that through comunication and co-operation people can achieve a lot. I have great leadership skills. I love and enjoy solving problems and challenges.</p>
              
            </div>
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
#About{
  background-color:  #f8f8f8;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
}


.about .about-content .left {
  width: 45%;
  margin-top: 96px;
}
.about .about-content .left img {
  height: 400px;
  width: 400px;
  object-fit: cover;
  border: 10px solid #193050  ;
}
.about .about-content .right {
  width: 55%;
  padding-top: 96px;
  font-size: 17px;
  
  
}
.about .about-content .right .text {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
}

.about .about-content .right p {
  text-align: justify;
}
.about .about-content .right a {
  display: inline-block;
  background: #193050;
  color:black;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 6px;
  border: 2px solid #193050;
  transition: all 0.3s ease;
}
.about .about-content .right a:hover {
  color: #193050;
  background:  #20445B;
}
@media (max-width: 947px){
  .about .about-content .column{
        width: 100%;
    }
    .about .about-content .left{
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }
    .about .about-content .right{
        flex: 100%;
        padding-top: 3px;
    }
}
.text-effect{
  color: black;
  font-size: 30px;
  font-family: sans-serif;
 font-weight: 600;
}
#list{
  color: #193050;
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
</style>
 