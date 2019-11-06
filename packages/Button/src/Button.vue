<template>
    <button type="button"><slot>{{message}}</slot></button>
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
