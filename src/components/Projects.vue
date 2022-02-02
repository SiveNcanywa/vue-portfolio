<template>
  <section id="Projects">
    <div class="container">
      <div class="row">
        <!--  Single Starts  -->
        <div class="col-md-4 service-block">
          <div class="service-block-one">
            <div
              v-for="project in projects"
              :key="project.id"
              class="inner-box"
            >
              <img class="test" :src="project.image" alt="person" />

              <div class="testimonial-text">
                <h3>{{ project.title }}</h3>

                <a href=" {{project.netlify }}"><i class="fas fa-eye"></i></a
                ><br />
                <a href=" {{ project.repo}}"><i class="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--  Single Ends  -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
@keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1920px 0;
  }
}
@-webkit-keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1920px 0;
  }
}
.service-block-one a {
  text-decoration: none;
}

@keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1920px 0;
  }
}
@-webkit-keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1920px 0;
  }
}
.service-block-one .inner-box {
  position: relative;
  display: block;
  overflow: hidden;
  text-align: center;
  background: #00b8ca;
  padding: 20px;
}
.service-block-one .inner-box:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all 500ms ease;
}
.service-block-one .inner-box:hover:before {
  height: 100%;
  top: 0;
}
.service-block-one .inner-box .icon-box {
  position: relative;
  display: inline-block;
  font-size: 100px;
  line-height: 100px;
  margin-bottom: 8px;
  z-index: 1;
  /* transition:all 500ms ease */
}
.service-block-one .inner-box .icon-box:before {
  position: absolute;
  content: "";
  width: 10px;
  height: 72px;
  border-radius: 50%;
  left: -9px;
  top: -13px;
  z-index: -1;
  /* transition:all 500ms ease */
}
.service-block-one .inner-box:hover .icon-box:before {
  background: #193050;
}
.service-block-one .inner-box:hover .icon-box {
  transform: rotateY(360deg);
  color: #fff;
}
.service-block-one .inner-box h3 {
  position: relative;
  display: block;
  font-size: 22px;
  line-height: 30px;
  color: #fff;
  font-weight: 800;
  margin-bottom: 9px;
}
.service-block-one .inner-box h3 a {
  display: inline-block;
  color: #fff;
}
.service-block-one .inner-box p {
  position: relative;
  color: #fff;
  margin-bottom: 33px;
}
.service-block-one .inner-box .theme-btn {
  padding: 12px 25px;
}
.service-block-one .inner-box:hover .theme-btn {
  background: #193050;
}
.service-section .sec-title {
  margin-bottom: 70px;
}
.service-section .sec-title span {
  margin-bottom: 21px;
}
.service-block-one .inner-box .icon-box {
  color: #193050;
}
.service-block-one .inner-box:before {
  background: #193050;
}
.theme-btn {
  position: relative;
  display: inline-block;
  font-size: 15px;
  background: #193050;
  line-height: 26px;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
  color: #fff !important;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  z-index: 1;
  transition: all 500ms ease;
}
.theme-btn:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.theme-btn:hover:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
.theme-btn i {
  position: relative;
  top: 2px;
  font-size: 20px;
  margin-left: 40px;
}
@media (max-width: 1024px) {
  .service-block-one .inner-box {
    padding: 30px;
  }
  .service-block-one {
    margin-bottom: 15px;
  }
  .theme-btn {
    padding: 10px 20px;
  }
}
.test {
  width: 100%;
  /* border-radius: 100%; */
}

.testimonial-text {
  opacity: 0;
  transition: all 0.3s linear;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inner-box:hover .testimonial-text {
  opacity: 1;
}
.row {
  display: flex;
  flex-direction: wrap;
  align-items: center;
  justify-items: center;
  
}
</style>
