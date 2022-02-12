<template>
  <section id="Projects">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            v-for="project in projects"
            :key="project.id"
            class="card"
            style="width: 18rem"
          >
            <img :src="project.image" class="card-img-top" alt="person" />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <a href="{{project.netlify}}" class="btn mr-2"
                ><i class="fas fa-link"></i> Visit Site</a
              >
              <a href="{{project.repo}}" class="btn"
                ><i class="fab fa-github"></i> Github</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Javascript Calculator",
          id: 1,
          image:
            "https://i.postimg.cc/cLhVjCkW/Screenshot-from-2022-02-02-10-33-52.png",
          repo: "https://github.com/SiveNcanywa/calculator.git",
          netlify: "https://sleepy-borg-bcf171.netlify.app",
        },
        {
          title: "Pokemon Fetch Api",
          id: 2,
          image:
            "https://i.postimg.cc/HkQ3VN1k/Screenshot-from-2022-02-02-10-13-38.png",
          repo: "https://github.com/SiveNcanywa/fetch-data.git",
          netlify: "https://jolly-dijkstra-6c67a8.netlify.app",
        },
        {
          title: "Fake Store Fetch Api",
          id: 3,
          image:
            "https://i.postimg.cc/fRFXWT1n/Screenshot-from-2022-02-02-10-03-33.png",
          repo: "https://codepen.io/sivencanywa/pen/ExwLdJB",
          netlify: "",
        },
        {
          title: "E-commerce Website",
          id: 4,
          image:
            "https://i.postimg.cc/DwZyz9Xq/Screenshot-from-2022-02-02-10-10-38.png",
          repo: "https://github.com/SiveNcanywa/monday.git",
          netlify: "https://flamboyant-ptolemy-27a6f5.netlify.app",
        },
        {
          title: "Kanye West Quotes",
          id: 5,
          image:
            "https://i.postimg.cc/j29jyvN8/Screenshot-from-2022-02-02-10-36-01.png",
          repo: "https://codepen.io/sivencanywa/pen/VwMxGPB?editors=0110",
          netlify: "",
        },
        {
          title: "Online Store POS",
          id: 6,
          image:
            "https://i.postimg.cc/GpHBZwp7/Screenshot-from-2022-02-02-09-56-45.png",
          repo: "https://github.com/SiveNcanywa/POS-Project.git",
          netlify: "https://sivepos.netlify.app",
        },
      ],
    };
  },
  mounted() {
    fetch(`http://localhost:5000/projects`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
#Projects {
  background-color: #f8f8f8;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  padding-left: 28rem;
}
.card {
  background: #20445b;
  border: 1px solid #00b8ca;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

.btn {
  border: 5px solid;
  border-image-slice: 1;
  text-decoration: none;
  transition: all 0.4s ease;
}

.btn:hover,
.btn:focus {
  border: 5px solid #00b8ca;
  box-shadow: #193050 1px 0 10px;
  text-decoration: underline;
}
</style>
