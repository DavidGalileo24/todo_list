<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="items-center px-2 py-1.5 bg-transparent border border-blue-500 rounded-md font-medium text-xs text-blue-500 uppercase hover:bg-blue-700 hover:text-white focus:bg-sky-700 active:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
