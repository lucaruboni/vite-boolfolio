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
    <AppBanner title="HOME PAGE"></AppBanner>

    <ProjectsList></ProjectsList>
</template>

<style lang="sass" scoped>

</style>