<script>
import axios from 'axios';



export default {
    components: {
     
    },
    data(){
        return{
            base_url: 'http//127.0.0.1:8000/',
            projects_API: 'api/projects',
            loading: true,
            projects: null,
            error: null
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
            }
        
    },
    mounted(){
        const url = this.base_url +   this.projects_API
        this.getProjects(url)
    }
}
</script>

<template>
<div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">My Blog</h1>
      <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia deleniti optio eaque iste porro, placeat numquam inventore blanditiis saepe!</p>
        
    </div>
  </div>

  <section class="projects">
    <div class="container">
        <div class="row">
            <div class="col" v-for="project in projects">
                <div class="card text-start">
                  <img class="card-img-top" :src="getImageFromPath(project.cover_image)" alt="Title">
                  <div class="card-body h-100">
                    <h4 class="card-title">{{ project.title }}</h4>
                    <p class="card-text"></p>
                  </div>
                </div>
            </div>
        </div>
    </div>

  </section>
</template>

<style lang="scss">
@use './styles/general.scss';


</style>
