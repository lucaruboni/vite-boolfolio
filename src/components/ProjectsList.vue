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
       
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">My Blog</h1>
            <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia deleniti optio eaque iste porro, placeat numquam inventore blanditiis saepe!</p>

        </div>
    </div>

      <section class="projects" v-if="projects && !loading">
        <div class="d-flex justify-content-center ms-3 me-3">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
                <div class="col" v-for="project in projects.data">
                    <div class="card text-start h-100">
                      <img class="card-img-top img-fluid" :src="getImageFromPath(project.cover_image)" alt="Title">
                      <div class="card-body h-100">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text"> {{ truncateText(project.content) }}</p>
                        <router-link :to="{name: 'single-project', params: {'slug': project.slug}}">Go To Project</router-link>
                      </div>
                    </div>
                </div>
            </div>
        </div>

    

      <div class="container" v-if="projects">
        <nav aria-label="Page navigation" class="">
          <ul class="pagination py-4 text-center">
            <li class="page-item">
              <button class="page-link"  aria-label="Previous" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
        
            <li class="page-item">
              <button class="page-link"  aria-label="Next" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
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

<style lang="sass" scoped>

</style>