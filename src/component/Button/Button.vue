<template>
    <button>
        {{message}}
        <slot></slot>
    </button>
</template>

<script>
export default {
    data() {
        return {
            message: 'hello'
        }
    },
    props: {
        disabled:{
            type: Boolean,
            default: false,
        },
    },
}
</script>

