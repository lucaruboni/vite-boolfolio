<script>

export default{
    name: 'AppBanner',
    props: {
        title: String
    }
}
</script>

<template>
     <div>
        <div class="bg-dark py-4">
            <h1 class="text-white ps-5">{{title}}</h1>
        </div>
     </div>
</template>

<style lang="sass" scoped>

</style>