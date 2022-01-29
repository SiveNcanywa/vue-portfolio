<template>
  <section id="contact" class="contact-page-section">
     <h2 class="about-watermark color">Contact me</h2>
    <div class="container">
     
      <div class="inner-container">
        <div class="row clearfix">
          <!--Form Column-->
          <div class="form-column col-md-8 col-sm-12 col-xs-12">
            <div class="inner-column">
              <!--Contact Form-->
              <div class="contact-form">
                <form method="post" action="https://formspree.io/f/myyoeyjn" id="contact-form">
                  <div class="row clearfix">
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="name"
                        value=""
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="subject"
                        value=""
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="phone"
                        value=""
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div class="form-group col-md-12 col-sm-12 co-xs-12">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group col-md-12 col-sm-12 co-xs-12">
                      <button type="submit" class="theme-btn btn-style-one"><i class="fas fa-paper-plane"></i>
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!--End Contact Form-->
            </div>
          </div>

          <!--Info Column-->
          <div class="info-column col-md-4 col-sm-12 col-xs-12">
            <div class="inner-column">
              <h2>Contact Info</h2>
              <ul class="list-info">
                <li>
                 <i class="far fa-envelope"></i>sive.ncanywa@gmail.com
                </li>
                <li><i class="fab fa-codepen"></i>SiveNcanywa</li>
                <li>
                  <i class="fas fa-phone"></i>
                 083-256-6673
                </li>
              </ul>
              <ul class="social-icon-four">
                <li class="follow">Follow me on:</li>
                <li>
                  <a href="https://github.com/SiveNcanywa" target="_blank"><i class="fab fa-github"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sive-christina-0b2930223/" target="_blank"><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sive.ncanywa@gmail.com" target="_blank"><i class="fab fa-google"></i></a>
                </li>
              </ul>
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

<style>
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-page-section {
  position: relative;
  padding-top: 110px;
  padding-bottom: 110px;
}
.contact-page-section .inner-container {
  position: relative;
  z-index: 1;
  background-color: #193050;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
}
.contact-page-section .form-column {
  position: relative;
  padding: 0 0 0 15px;
}
.contact-page-section .form-column .inner-column {
  position: relative;
  padding: 60px 45px 30px;
  background-color: #193050;
}
.contact-page-section .info-column {
  position: relative;
}
.contact-page-section .info-column .inner-column {
  position: relative;
  padding: 60px 35px;
}
.contact-page-section .info-column h2 {
  position: relative;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4em;
  margin-bottom: 45px;
}
.contact-page-section .info-column .list-info {
  position: relative;
  margin-bottom: 60px;
}
.contact-page-section .info-column .list-info li {
  position: relative;
  margin-bottom: 25px;
  font-size: 18px;
  color: #fff;
  line-height: 1.8em;
  padding-left: 45px;
}
.contact-page-section .info-column .list-info li:last-child {
  margin-bottom: 0;
}
.contact-page-section .info-column .list-info li i {
  position: absolute;
  left: 0;
  top: 8px;
  color: #fff;
  font-size: 30px;
}
.contact-form {
  position: relative;
}
.contact-form .form-group {
  position: relative;
  margin-bottom: 20px;
}
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  position: relative;
  display: block;
  width: 100%;
  height: 60px;
  color: #222;
  font-size: 14px;
  line-height: 38px;
  padding: 10px 30px;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form textarea:focus {
  border-color: #00b8ca;
}
.contact-form textarea {
  height: 250px;
  resize: none;
}
.contact-form .theme-btn {
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  text-transform: capitalize;
  padding: 16px 39px;
  border: 2px solid #00b8ca;
  font-family: Arimo, sans-serif;
  background: #00b8ca;
  display: inline-block;
  position: relative;
  line-height: 24px;
  cursor: pointer;
  color: #fff;
}
.contact-form .theme-btn:hover {
  color: #00b8ca;
  border-color: #00b8ca;
  background: 0 0;
}
.contact-form input.error,
.contact-form select.error,
.contact-form textarea.error {
  border-color: red !important;
}
.contact-form label.error {
  display: block;
  line-height: 24px;
  padding: 5px 0 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
  color: red;
  font-weight: 500;
}
.social-icon-four {
  position: relative;
}
.social-icon-four li {
  position: relative;
  margin-right: 18px;
  display: inline-block;
}
.social-icon-four li.follow {
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  display: block;
  margin-bottom: 20px;
}
.social-icon-four li a {
  position: relative;
  font-size: 20px;
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.social-icon-four li a:hover {
  color: #222;
}
#about h2 {
  text-align: center;
  font-size: 40px;
  padding-top: 100px;
  text-transform: uppercase;
  z-index: 2;
}

.about-watermark {
  position: relative;
}

.about-watermark::before {
  position: absolute;
  top: -29%;
  left: 50%;
  height: 100%;
  /* width: 100%; */
  color: lightgray;
  opacity: 0.5;
  content: "CONTACT ME";
  z-index: -1;
  transform: translate(-50%, 25%) scale(2);
}
</style>
