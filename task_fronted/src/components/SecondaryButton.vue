<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="items-center px-2 py-1.5 bg-transparent border border-orange-500 rounded-md font-medium text-xs text-orange-500 uppercase hover:bg-orange-700 hover:text-white focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
