<script>
import axios from 'axios';
  export default {
    name: 'ImageModal',
    project: null,
    base_url: 'http://127.0.0.1:8000/api/',
    methods: {
        getImageFromPath(path){
                return this.base_url +  'storage/' +  path;
            }
        },
        mounted(){
        const url = this.base_url + 'projects/' + this.$route.params.slug;
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
    
  


              <div class="modal-overlay" @click="$emit('close-modal')">

          <div class="modal" >
            <img class="img" :src="getImageFromPath(project.cover_image)" alt="" v-if="project">
          </div>

          <button class="close" @click="$emit('close-modal')">
            <img class="close-img" src="https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000" alt="ciao" />
          </button>

        </div>
 

</template>

<style lang="scss" scoped>
    
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>