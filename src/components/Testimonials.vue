<template>
  <section id="testimonials">
 <div class="testimonial" v>
    <div v-for="testimonial in testimonials" :key="testimonial.id" class="card">
      <div class="layer"></div>
      <div class="content">
        <p>
          {{testimonial.text}}
        </p>
        <!-- <div class="image">
          <img :src="testimonial.image">
        </div> -->
        <!-- <div class="details">
          <h2>{{testimonial.name}}<br><span>{{testimonial.relationship}}</span></h2>
        </div> -->
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      name:"",
      id:"",
      image:"",
      text:"",
      relationship:""
    }
  },
   mounted() {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => (this.testimonials = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
#testimonials{
    background-color:  #20445B;
     width: 100%;
   height: 100%;
   box-sizing: border-box;
}

div.testimonial{
  margin: 200px auto 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
}

div.testimonial>div.card{
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  background-color: #193050;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0 , 0, 0, 0.5);

  overflow: hidden;
}

div.testimonial>div.card>div.layer{
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #00b8ca, #193050, #20445B);
  z-index: 1;
  transition: 0.5s;
}

div.testimonial>div.card:hover>div.layer{
  top: 0;
}

div.testimonial>div.card>div.content{
  position: relative;
  z-index: 2;
}

div.testimonial>div.card>div.content>p{
  font-size: 18px;
  line-height: 24px;
  color: #fff;
}

div.testimonial>div.card>div.content>div.image{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 10px 20px rgba(0 , 0, 0, 0.2);
}

div.testimonial>div.card>div.content>div.details>h2{
  font-size: 18px;
  color: #fff;
}

div.testimonial>div.card>div.content>div.details>h2>span{
  font-size: 14px;
  color: #00b8ca;
  transition: 0.5s;
}

div.testimonial>div.card:hover>div.content>div.details>h2>span{
  color: #fff;
}

</style>



