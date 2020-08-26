<script>
export default {
    name: 'BarberCard',
    props: ['barber']
}
</script>

<template lang="pug">
.barber_box
    h2 {{ barber.name }}    
</template>

<style lang="scss" scoped>
.barber_box{
    padding: 2em;
    border: 2px solid rgb(33, 97, 182);
    border-radius: 0.3em;
}
</style>