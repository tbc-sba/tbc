<script setup>

const { data } = await useAsyncData(() => queryCollection('news').all())

console.log(data.value)
</script>


<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl font-bold mb-6 text-primary-DEFAULT text-center">آخر الأخبار والإعلانات</h2>
    <LazyClientOnly>
      <div class="space-y-6">
        <NuxtLink v-for="post in data"
                  :key="post.id"
                  :to="{ name: 'news-slug', params: { slug: post.stem } }"
        >
          <NewsPost :title="post.title"
                    :cover="post.cover"
                    :date="post.date">
            <p> {{ post.description }} </p>
          </NewsPost>
        </NuxtLink>
      </div>
    </LazyClientOnly>
  </div>
</template>
