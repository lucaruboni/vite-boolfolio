<script>
import axios from 'axios';
import AppLoading from './AppLoading.vue';
import SingleProjectView from '../views/SingleProjectView.vue';
export default{
    name: 'ProjectsList',
    components: {
        AppLoading,
        SingleProjectView,
    },
    data(){
        return{
            base_url: 'http://127.0.0.1:8000/',
            projects_API: 'api/projects',
            loading: true,
            projects: '',
            error: null,
            max_text_length: 100
        }
    },
    methods:{
        getProjects(url){
            axios
            .get(url)
            .then(response => {
                
                this.projects = response.data.projects
                this.loading = false
            })
            .catch(error => {
                console.log(error);
                this.error = error.message
            })
            },

            getImageFromPath(path){
                return this.base_url +  'storage/' +  path;
            },

            nextPage(path){
                this.getProjects(path);
            },
            prevPage(path){
                this.getProjects(path);
            },

            truncateText(text){
                if (text.length > 30) {
                    return text.slice(0, this.max_text_length) + '...';
                }
                return text
            }
        
    },
    mounted(){
        const url = this.base_url +   this.projects_API
        console.log(url)
        this.getProjects(url)

        
    }    
}
    
</script>

<template>
       


       <section class="projects px-4" v-if="projects && !loading">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
    <div class="col" v-for="project in projects.data">
      <div class="card text-start h-100">
        <div class="card-img-wrapper position-relative">
          <img class="card-img-top img-fluid" :src="getImageFromPath(project.cover_image)" alt="Title">
          <div class="card-overlay"></div>
        </div>
        <div class="card-body h-100">
          <h4 class="card-title">{{ project.title }}</h4>
          <p class="card-text">{{ truncateText(project.content) }}</p>
          <router-link :to="{name: 'single-project', params: {'slug': project.slug}}" class="btn btn-primary">Go To Project</router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-if="projects">
    <nav aria-label="Page navigation" class="">
      <ul class="pagination py-4 mb-0 text-center">
        <li class="page-item">
          <button class="page-link" aria-label="Previous" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li class="page-item">
          <button class="page-link" aria-label="Next" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>

    <div v-else>
       <AppLoading></AppLoading>
    </div>


</template>

<style lang="scss" scoped>
 .projects{
    z-index: 1;
 }

 .card {
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
}

.card-img-wrapper {
  position: relative;
}

.card-img-top {
  height: auto;
  object-fit: contain;
  width: 100%;
  transition: transform 0.5s ease-out;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.5s ease-out;
  opacity: 0;
  width: 100%;
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-body {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  transition: opacity 0.5s ease-out;
  opacity: 0;
  z-index: 1;
}

.card:hover .card-body {
  opacity: 1;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #fff;
  border-color: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  transition: opacity 0.5s ease-out;
  opacity: 0;
}

.card:hover .btn-primary {
  opacity: 1;
}

.btn-primary:hover {
  background-color: #000;
  border-color: #000;
  color: #fff;
  text-decoration: none;
}

</style>