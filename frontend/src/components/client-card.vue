<script>
export default {
    name: 'ClientCard',
    props: ['client'],
    data() {
        return {
            bookings: []
        }
    }
}
</script>

<template lang="pug">
.client_box
    h1 {{ client.name }} 
    .info(v-for="booking in client.bookings")
        p {{ booking }}
    h2 {{ client.email }}

</template>

<style lang="scss" scoped>
.client_box{
    padding: 2em;
    border: 1px solid rgb(33, 97, 182);
    border-radius: 0.3em;
}
</style>