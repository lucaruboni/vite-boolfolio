<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'ContactsView',
    components: {
        AppBanner
    },
    data(){
      return{
        name: '',
        email: '',
        message: '',
        errors: {},
        loading: false,
        success: false
      }
   
    },
    methods: {
        submitForm(){
          this.loading = true
          const data = {
            name: this.name,
            email: this.email,
            message: this.message
          }

          //clean the errors object incase we had validations errors

          this.errors = {}
          //send the form with axios posts requestc
          axios
          .post('http://127.0.0.1:8000/api/contacts', data)
          .then(response => {
            this.success = response.data.success;
            if (!response.data.success) {
              this.errors = response.data.errors
            } else {
              this.name = '',
              this.email = '',
              this.message = ''

            }
            this.loading = false;

          })
          .catch(err=>{
            console.log(err);
          })
        }
      }

}

</script>

<template>

    <section class="contact-me py-5">
        <div class="container">

          <div class="alert alert-primary" role="alert" v-if="success">
            <strong>Messaggio ricevuto</strong> Ti risponderò il prima possibile!
          </div>
          
            <form @submit.prevent="submitForm()">
                <div class="mb-3">
                  <label for="name" class="form-label text-white">Name</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Mario Grossi" aria-describedby="nameHelper " v-model="name">
                  <small id="nameHelper" class="text-muted">Type your full name Here!</small>
                </div>
                <p v-for="error in errors.name" :key="`message-error-${index}`" class="text-danger">
                  {{ error }}
                </p>

                <div class="mb-3">
                  <label for="email" class="form-label text-white">Email</label>
                  <input type="email" name="email" id="email" class="form-control" placeholder="MarioGrossi@gmail.com" aria-describedby="emailHelper" v-model="email">
                  <small id="emailHelper" class="text-muted">Type your Email Here!</small>
                </div>
                <p v-for="error in errors.email" :key="`message-error-${index}`" class="text-danger">
                  {{ error }}
                </p>

                <div class="mb-3">
                  <label for="message" class="form-label text-white">Message</label>
                  <textarea class="form-control" name="message" id="message" rows="8" v-model="message"></textarea>
                </div>
                <p v-for="error in errors.message" :key="`message-error-${index}`" class="text-danger">
                  {{ error }}
                </p>

                <button type="submit" class="btn btn-primary" :disabled="loading">Send</button>
            </form>
        </div>
    </section>
   
</template>

<style lang="scss" scoped>
  section{
    height: calc(100vh - 100px);
  }
</style>