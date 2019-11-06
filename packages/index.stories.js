import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import MyButton from './Button/src/Button.vue';

storiesOf('Button', module)
    .add('as a component', () => ({
        components: { MyButton },
        template: '<my-button>with text</my-button>'
    }))
    .add('with emoji', () => ({
        components: { MyButton },
        template: '<my-button>👌🔥</my-button>'
    }))
    .add('with rounded edges', () => ({
        components: { MyButton },
        template: '<my-button :rounded="true">rounded</my-button>'
    }));
