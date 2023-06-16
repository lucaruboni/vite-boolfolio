<script>
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'ContactsView',
    components: {
        AppBanner
    }

}

</script>

<template>

    <section class="contact-me py-5">
        <div class="container">
            <form>
                <div class="mb-3">
                  <label for="" class="form-label">Name</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Mario Grossi" aria-describedby="nameHelper ">
                  <small id="nameHelper" class="text-muted">Type your full name Here!</small>
                </div>

                <div class="mb-3">
                  <label for="" class="form-label">Email</label>
                  <input type="email" name="email" id="email" class="form-control" placeholder="MarioGrossi@gmail.com" aria-describedby="emailHelper">
                  <small id="emailHelper" class="text-muted">Type your Email Here!</small>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" name="message" id="message" rows="8"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    </section>
   
</template>

<style lang="scss" scoped>
  section{
    height: 100vh;
  }
</style>