<template>
  <section id="contact" class="contact-page-section">
 <h2 class="title">Contact me</h2>
<div class="container">
	<div class="wrapper">

		<!-- COMPANY INFORMATION -->
		<div class="company-info">
			<h3>Contact Details</h3>

			<ul>
				<li><i class="fa fa-road"></i> Cape Town</li>
				<li><i class="fa fa-phone"></i>+27 832 566 6673</li>
				<li><i class="fa fa-envelope"></i>sive.ncanywa@gmail.com</li>
			</ul>
		</div>
		<!-- End .company-info -->

		<!-- CONTACT FORM -->
		<div class="contact">
	

			<form id="contact-form">

				<p>
					<label> First Name</label>
					<input type="text" name="name" id="name" required>
				</p>

				<p>
					<label>Last Name</label>
					<input type="text" name=" surname" id="surname">
				</p>

				<p>
					<label>E-mail Address</label>
					<input type="email" name="email" id="email" required>
				</p>

				<p>
					<label>Phone Number</label>
					<input type="text" name="phone" id="phone">
				</p>

				<p class="full">
					<label>Message</label>
					<textarea name="message" rows="5" id="message"></textarea>
				</p>

				<p class="full">
					<button type="submit">Submit</button>
				</p>

			</form>
			<!-- End #contact-form -->
		</div>
		<!-- End .contact -->

	</div>
	<!-- End .wrapper -->
</div>
<!-- End .container -->
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
      surname: "",
      message: "",
    };
  },

  methods: {
    handleSubmit() {
      console.log(
        this.name,
        this.surname,
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
          subject: this.surname,
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
  background-color: #f8f8f8;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

/* body {
  background: #3952a3;
  color: #485e74;
  line-height: 1.6;
  font-family: 'Yantramanav', sans-serif;
  padding: 1em;
} */

.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}

ul {
  list-style: none;
  padding: 0;
}

.brand {
  text-align: center;
	font-weight: 300;
	text-transform: uppercase;
	letter-spacing: 0.1em;
}

.brand span {
  color: #ffffff;
}

.wrapper {
  box-shadow: 0 0 20px 0 rgba(57, 82, 163, 0.7);
}

.wrapper > * {
  padding: 1em;
}

/* ------------------- */
/* COMPANY INFORMATION */
/* ------------------- */

.company-info {
  background: #C3C9DD;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.company-info h3,
.company-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
}

/* ------- */
/* CONTACT */
/* ------- */

.contact {
  background: #dcdfea;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

/* ---- */
/* FORM */
/* ---- */

.contact form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.contact form label {
  display: block;
}

.contact form p {
  margin: 0;
}

.contact form .full {
  grid-column: 1 / 3;
}

.contact form button,
.contact form input,
.contact form textarea {
  width: 100%;
  padding: 1em;
  border: solid 1px #627EDC;
  border-radius: 4px;
}

.contact form textarea {
  resize: none;
}

.contact form button {
  background: #627EDC;
  border: 0;
  color: #e4e4e4;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}

.contact form button:hover,
.contact form button:focus {
  background: #3952a3;
  color: #ffffff;
  outline: 0;
  transition: background-color 2s ease-out;
}

/* ------------- */
/* MEDIA QUERIES */
/* ------------- */

@media only screen and (min-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > * {
    padding: 2em;
  }

  .company-info {
    border-radius: 4px 0 0 4px;
  }

  .contact {
    border-radius: 0 4px 4px 0;
  }

  .company-info h3,
  .company-info ul,
  .brand {
    text-align: left;
  }
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
 

         