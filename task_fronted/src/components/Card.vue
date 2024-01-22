<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>
<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            <slot name="name" />
        </h5>
        <p class="mb-3 font-normal text-gray-800">
            <slot name="description" />
        </p>
        <p class="text-xs text-gray-700">
            <slot name="footer" />
        </p>
    </div>
</template>