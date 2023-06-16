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
        <div class=" py-1">
            <h1 class=" ps-5 text-center">{{title}}</h1>
        </div>
     </div>
</template>

<style lang="sass" scoped>

</style>