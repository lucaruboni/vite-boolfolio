<script>
export default{
    name: 'NotFound',
    data(){
        return{

        }
    }
}
</script>

<template>
    <div>
        <h1>Not Found</h1>
        <router-link :to="{name: 'home'}"> Back To HomePage</router-link>
    </div>
</template>

<style lang="scss" scoped>

</style>