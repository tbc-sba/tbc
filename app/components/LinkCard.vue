<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center p-4 bg-card-light dark:bg-card-dark rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
  >
    <div
      class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
      :style="{ backgroundColor: iconBgColor }"
    >
      <svg v-if="isSvg" aria-hidden="true" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" v-html="icon"></svg>
      <span v-else class="material-icons text-white">{{ icon }}</span>
    </div>
    <div class="flex-1 min-w-0 mx-4 text-right">
      <p class="text-base font-bold text-text-light dark:text-text-dark truncate">{{ title }}</p>
      <p class="text-sm text-muted truncate">{{ subtitle }}</p>
    </div>
    <span class="material-icons text-muted group-hover:text-primary-DEFAULT transition-colors">chevron_left</span>
  </a>
</template>

<script setup>
defineProps({
  icon: String,
  iconBgColor: String,
  title: String,
  subtitle: String,
  href: String,
  isSvg: Boolean,
});
</script>
