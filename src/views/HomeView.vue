<script>

import AppBanner from '../components/AppBanner.vue';
import ProjectsList from '../components/ProjectsList.vue';
export default {
    name: 'HomeView',
    components: {
        AppBanner,
        ProjectsList
      
        
    }
}

</script>

<template>
    <div class="body_bg">
        
        
        <div class="p-5 mb-4 text-white">
            <div class="container-fluid">
              <h1 class="display-5 fw-bold">MY PROJECTS</h1>
              <p class="col-md-8 fs-4">See what i've worked on!</p>
            
            </div>
          </div>
      

        <ProjectsList></ProjectsList>
    </div>   
</template>



<style lang="scss" scoped>

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.body_bg{
        background-image: url("../../public/7957.png");
        background-size: cover;
        background-repeat: repeat-y;
        background-attachment: fixed;
        box-shadow: 50px 0 0 black;
    }   
</style>