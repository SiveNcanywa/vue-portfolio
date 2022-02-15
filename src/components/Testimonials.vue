<template>
  <section id="testimonials">
    <div class="container">
       <h2 class="title">Testimonials</h2>
      <div class="testimonial-view">
        <div
          class="carousel slide"
          id="testimonialCarousel"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <!-- testimonial 1 -->

            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="carousel-item active"
            >
              <div class="block">
                <div class="row">
                  <div class="col-md-5">
                    <div class="user">
                      <div class="image">
                        <img :src="testimonial.image" alt="person" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">{{ testimonial.name }}</h2>
                        <h4>{{ testimonial.relationship }}</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="content">
                      <p>{{ testimonial.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> -->
          <a
            class="corousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="corousel-control-next"
            type="button"
            href="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [],
    };
  },

  mounted() {
    fetch("https://sive-portfolio-backend.herokuapp.com/testimonials")
      .then((res) => res.json())
      .then((data) => {
        this.testimonials = data;
        console.log(testimonials);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>
<style>
#Testimonials {
  background-color: #f8f8f8;
}
.testimonial-view {
  max-width: 900px;
  padding: 0 15px 50px;
  margin: 0 auto 70px auto;
  border-radius: 3px;
}
.block {
  background: #fff;
  color: #333;
  padding: 60px 15px 15px;
  margin: 50px 50px;
  box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.15);
}
.block.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  place-items: normal;
}
.user {
  margin-bottom: 30px;
  text-align: center;
}
.image {
  position: relative;
  margin: 0 15px 30px 15px;
}
.image img {
  height: 170px;
  width: 170px;
  border: 7px solid #193050;
  border-radius: 170px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.user-name {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  padding-bottom: 10px;
  position: relative;
}
.user-name::after {
  content: "";
  height: 4px;
  width: 50px;
  position: absolute;
  bottom: 0;
  left: calc(50% -25px);
  background: #193050;
}
.content {
  text-align: center;
  font-size: 18px;
}
.carousel-control-prev {
  left: -50px;
}
.carousel-control-next {
  right: -50px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 40px;
  height: 40px;
  background-color: #193050;
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
