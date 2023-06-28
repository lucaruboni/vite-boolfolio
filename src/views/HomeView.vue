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

           
                <div class="row justify-content-center py-5 my_jumbo">
                    <div class="col-6 align-self-center text-center py-5">
                        <h1>LR Dev Solutions</h1>
                        <p>
                            As a junior full stack web developer, I am passionate about Web development and dedicated to delivering exceptional and simple user experiences. I keep up with the latest technologies and I'm committed to continuously improving my skills.
                        </p>
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
        background-image: url("../../public/bg-1.jpg");
       
        min-height: calc(100vh - 100px);
        background-repeat: repeat-y;
        background-position-x: right;
      
        box-shadow: 50px 0 0 black;
    }   
    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 800;
        font-size: 4.5rem;
        color: antiquewhite;
    }
    
    p{
        font-family: 'Markazi Text', serif;
        color: antiquewhite;
        font-size: 1.5rem;
        

    }
    .my_jumbo{
        height: calc(100vh - 100px);
    }
    
    
    
</style>