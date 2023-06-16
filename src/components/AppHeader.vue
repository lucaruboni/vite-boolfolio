<script>

export default{
    name: 'AppHeader',
    components: {
       
    }
}
</script>

<template>
    <header>
        <nav class="nav justify-content-between">

            <div class="logo ps-5 align-self-center">LUFFIDEV</div>

            <div class="d-flex gap-5 me-5 pe-5 align-self-center">
                
                <router-link class="nav-link" :to="{'name' : 'home'}" aria-current="page">HOME</router-link>
                <router-link class="nav-link" :to="{'name' : 'about'}">ABOUT</router-link>
                <router-link class="nav-link_my my_url" :to="{'name' : 'contacts'}">CONTACTS</router-link>
            </div>
         
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    .logo{
        font-size: 2.3rem;
        font-weight: 900;
        color: aliceblue;

    }


    nav{
        height: 100px;
        box-shadow: 0 10px 50px black;

        a{
            font-weight: 600;
        }
        .my_url{
        text-decoration: none;
        background-color: #290ccb;
        padding: 10px 15px;
        border-radius: 8px;
        box-shadow: 0 4px 1px black;
        color: antiquewhite;
        text-align: center;
        font-weight: 500;
     }
    }

    $header-bg-color-violet: #6f15b5;
    $header-bg-color-black: #000000;

    header {
      background-color: #000000;
      position: sticky;
      top: 0;
      left: 0;
      z-index: 100;
    }

    .nav-link {
  font-size: 16px;
  text-decoration: none;
  position: relative;
  color: aliceblue;
}

.nav-link:hover {
  font-size: 18px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background-color: blue;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>