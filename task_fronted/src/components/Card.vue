<script setup>
import PrimaryButton from './PrimaryButton.vue';
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>
<template>
    <div class="w-full cursor-pointer bg-white border border-gray-200 rounded-lg flex flex-col">
        <h5 class="p-2 text-2xl font-bold tracking-tight text-gray-800">
            <slot name="name" />
        </h5>
        <p class="mt-2 p-2 font-normal text-gray-700">
            <slot name="description" />
        </p>
        <div class="flex p-2 justify-end mt-auto bg-gray-100">
            <slot name="footer" />
        </div>
    </div>
</template>