<template>
    <button class="red" type="button"><slot>{{message}}</slot></button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'MyButton',
    props: {
        message: String
    }
});
</script>

<style scoped>
.red {
    color: red;
}
</style>