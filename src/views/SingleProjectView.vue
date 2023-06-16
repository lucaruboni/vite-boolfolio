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
</style>