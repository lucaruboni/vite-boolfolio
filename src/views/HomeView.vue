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
    <body>
        
 
        <div class="p-5 mb-4 text-white">
            <div class="container-fluid">
              <h1 class="display-5 fw-bold">MY PROJECTS</h1>
              <p class="col-md-8 fs-4">See what i've worked on!</p>
            
            </div>
          </div>
      

        <ProjectsList></ProjectsList>
    </body>   
</template>

<style lang="scss" scoped>
    body{
        background-image: url("../../public/background.jpg");
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
    }   
</style>