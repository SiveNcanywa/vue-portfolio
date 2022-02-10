<template>
  <section id="contact" class="contact-page-section">
    <span class="head">---<h1 class="heading"> Contact Me </h1>---</span>
   
<div class="video">
            <img src="https://i.ytimg.com/vi/cr3Bf53Lseo/maxresdefault.jpg" alt="logo"/>
            <div class="overlay">
                <div class="container">
                    <h2>contact me</h2>
                    <p class="h2-bottom">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.</p>
                    <div class="social">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-linkedin"></i>
                        <i class="fa fa-pinterest"></i>
                    </div>
                    <form>
                        <input type="text" name="name" placeholder=" your name">
                        <input type="email" name="email" placeholder="your email">
                        <input type="tel" name="phone" placeholder="your phone">
                        <input type="url" name="website" placeholder="your website">
                        <input type="text" name="subject" placeholder="subject">
                        <textarea placeholder="your message"></textarea>
                        <button><div>send
                            <i class="fa fa-arrow-right"></i></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
import { handleError } from "@vue/runtime-core";
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    };
  },

  methods: {
    handleSubmit() {
      console.log(
        this.name,
        this.subject,
        this.phone,
        this.message,
        this.email
      );
      fetch("http://localhost:5000/contacts", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          phone: this.phone,
          email: this.email,
          subject: this.subject,
          message: this.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => alert(json.msg))
        .catch((error) => alert(error.msg));
    },
  },
};
</script>

<style>
#contact{
  background-color: #193050;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
}
.heading{
  font-size: 3rem;
  color:white;
   font-family: Ubuntu,sans-serif;
}
.head{
  color: #00b8ca;
  width: 2rem;
}


</style>
 

         