<script>

import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'SingleProjectView',
    components: {
        AppBanner
    },
    data(){
        return{
            project: null,
            loading: true,
            base_url: 'http://127.0.0.1:8000/'
        }
    },
    methods: {
        getImageFromPath(path){
                return this.base_url +  'storage/' +  path;
            }

    },
    mounted(){
        const url = this.base_url + 'api/projects/' + this.$route.params.slug;
        axios
        .get(url)
        .then(response =>{
          if (response.data.success) {
            this.project = response.data.result  
          } else{
            this.$router.push({
              name: 'NotFound',
              // preserve current path and remove the first char to avoid the target URL starting with `//`
              params: { pathMatch: this.$route.path.substring(1).split('/') },
              // preserve existing query and hash if any
              query: this.$route.query,
              hash: this.$route.hash,
            })
          }
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<template>

    <div v-if="project">
        
        
        <div class="my_row">
            <div class="d-flex bg_filter  px-5 text-white">
           
                
                   <div class="col align-self-center ">
                    <div class="img_container d-flex justify-content-center">
                        <img class="img" :src="getImageFromPath(project.cover_image)" alt="">

                    </div>
                        
                   </div>
                    <div class="col align-self-center text_and_links d-flex flex-column gap-4 ps-5">
                        <h1>{{ project.title }}</h1>
                        <p>{{  project.content }}</p>

                        <a  class="my_url" :href="project.github_link" role="button">View on Github 
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" class="ps-2" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        </a>
                    </div>

                  
            </div>
        </div>

    </div>


</template>

<style lang="scss" scoped>

    .my_row{
        height: calc(100vh - 100px);
        background-image: url(https://cdn.cevoid.com/images/GOqBd3rn9JExwBrL1jrWF.jpeg?class=1080);
       
    }
    .bg_filter{
        height: calc(100vh - 100px);
        background-color: rgba(0, 0, 0, 0.225);
    }
    
    .img_container{
        border-radius: 8px;
        img{
            height: 500px;
            border-radius: 8px;
            box-shadow: 0 10px 15px black;
        }
    }

    
    .my_url{
        text-decoration: none;
        background-color: #290ccb;
        padding: 10px 15px;
        border-radius: 8px;
        box-shadow: 0 8px 15px black;
        color: antiquewhite;
        text-align: center;
        font-weight: 500;
    }
</style>