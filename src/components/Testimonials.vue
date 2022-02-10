<template>
  <section id="testimonials">
    <div class="cards">
  <figure class="snip1390">
  <img src="https://i.postimg.cc/8PQT7WqX/Bongani3.jpg" alt="profile-sample3" class="profile" />
  <figcaption>
    <h2>Bongani Nomangola</h2>
    <h4>Collegue</h4>
    <blockquote>Sive is a dedicated and hard-working individual who always gives her best in everything she does.</blockquote>
  </figcaption>
</figure>
<figure class="snip1390 hover"><img src="https://i.postimg.cc/j5k89HrH/Enosh.jpg" alt="profile-sample5" class="profile" />
  <figcaption>
    <h2>Enosh Elliot</h2>
    <h4>Collegue</h4>
    <blockquote> Sive is   loving and able to use a working evironment as a learning place where she develops her skills day by day.
      
    </blockquote>
  </figcaption>
</figure>
<figure class="snip1390">
  <img src="
https://i.postimg.cc/CLFjpZmX/alex.jpg" alt="profile-sample6" class="profile" />
  <figcaption>
    <h2>Alex Sexwale</h2>
    <h4>Public Relations</h4>
    <blockquote>Sive is hard working and an inspiration to her colleagues.She is able work under under pressure and is able to cooperate well.</blockquote>
  </figcaption>
</figure>
</div>
 <div class="cards">
  <figure class="snip1390">
  <img src="https://i.postimg.cc/Tw6KjSsF/Craig.jpg" alt="profile-sample3" class="profile" />
  <figcaption>
    <h2>Craig Braff</h2>
    <h4>Collegue</h4>
    <blockquote>Sive is a very bright,funny and hardworking individual.
        She also knows how to adapt
        to different groups of people leaving smiles on their faces. </blockquote>
  </figcaption>
</figure>
<figure class="snip1390 hover"><img src="
https://i.postimg.cc/vBhZrmfx/Haniah.jpg" alt="profile-sample5" class="profile" />
  <figcaption>
    <h2>Haniah Jordan</h2>
    <h4>Collegue</h4>
    <blockquote>
        Sive extremely dedicated to her work and always makes sure
        to put best her work forward, especially with her determined
        mindset.</blockquote>
  </figcaption>
</figure>
<figure class="snip1390">
  <img src="https://i.postimg.cc/4xpZvdT4/Zharne.jpg" alt="profile-sample6" class="profile" />
  <figcaption>
    <h2>Zharne Desember</h2>
    <h4>Collegue</h4>
    <blockquote>Sive is dedicated to producing quality work and she is great to work with.She is a great listener and a good public speaker.</blockquote>
  </figcaption>
</figure>
</div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#testimonials{
    background-color:  #20445B;
}
.cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  padding-left:28rem;
}

figure.snip1390 {
  font-family: 'Roboto', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  color: #000000;
  text-align: center;
  font-size: 16px;
  background-color: #193050;
  padding: 30px;
  background-image: linear-gradient(-25deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.snip1390 *,
figure.snip1390 *:before,
figure.snip1390 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
figure.snip1390 figcaption {
  width: 100%;
}
figure.snip1390 h2,
figure.snip1390 h4,
figure.snip1390 blockquote {
  margin: 0;
}
figure.snip1390 h2,
figure.snip1390 h4 {
  font-weight: 300;
}
figure.snip1390 h2 {
  color: #ffffff;
}
figure.snip1390 h4 {
  color: #a6a6a6;
}
figure.snip1390 blockquote {
  font-size: 1em;
  padding: 45px 20px 40px 50px;
  margin-top: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: inset -1.4px -1.4px 2px rgba(0, 0, 0, 0.3);
  text-align: left;
  position: relative;
}
figure.snip1390 blockquote:before {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 70px;
  opacity: 0.25;
  font-style: normal;
  top: 0px;
  left: 20px;
}
figure.snip1390 .profile {
  width: 100px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  border: solid 5px #00b8ca;
}


</style>



