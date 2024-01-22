<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="items-center px-2 py-1.5 bg-blue-500 border border-blue-700 rounded-md font-medium text-xs text-white uppercase hover:bg-blue-700 hover:text-white focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
