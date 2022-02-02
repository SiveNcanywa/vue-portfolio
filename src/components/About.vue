<template>
  <!-- about section start -->
  <!-- about section start -->
  <section class="about" id="about">
    <div class="container">
      <div class="max-width">
        <h2 class="title">About me</h2>
        <div class="about-content">
          <div class="row">
            <div class="column left">
              <img src="../assets/images/selfieee.png" alt="" />
            </div>
            <div class="column right">
            
              <p>I am a hard-working and committed individual who is always keen to learn new things. I am energetic
          and always try to do and give my best in everything I do. As a sociable individual, I love working with
          people and my personality could be described as kind and loving. I have good communication skills. I believe that through communication and working together people can achieve a lot.  I have great leading skills and I can lead a team of people.I work well with others.  I love and enjoy solving problems and challenges. I always give my best in everything I do. </p>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sive.ncanywa@gmail.com" target="_blank"
                >Hire me</a
              >
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

.about .about-content .left {
  width: 45%;
}
.about .about-content .left img {
  height: 400px;
  width: 400px;
  object-fit: cover;
  border: 10px #193050  ;
}
.about .about-content .right {
  width: 55%;
  padding-top: 210px;
  
}
.about .about-content .right .text {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
}
.about .about-content .right .text span {
  color: crimson;
}
.about .about-content .right p {
  text-align: justify;
}
.about .about-content .right a {
  display: inline-block;
  background: #193050;
  color: #fff;
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
  background: none;
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
    }
}
</style>
 