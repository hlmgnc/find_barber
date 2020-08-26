<script>
export default {
    name: 'ClientCard',
    props: ['client']
}
</script>

<template lang="pug">
.client_box
    h2 {{ client.name }} 

    .info(v-for="client in clients")
    h3 {{ client.email }}

</template>

<style lang="scss" scoped>
.client_box{
    padding: 2em;
    border: 2px solid rgb(33, 97, 182);
    border-radius: 0.3em;
}
</style>