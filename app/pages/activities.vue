<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl font-bold mb-6 text-primary-DEFAULT text-center">الأنشطة المدرسية</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <ActivityCard
          image="https://picsum.photos/seed/sports-day/400/200"
          title="النادي الرياضي"
          description="انضموا إلينا لتنمية مهاراتكم البدنية وروح الفريق في مختلف الألعاب الرياضية."
      />
      <ActivityCard
          image="https://picsum.photos/seed/art-club/400/200"
          title="نادي الفنون"
          description="عبر عن إبداعك من خلال الرسم والنحت والأعمال اليدوية المتنوعة."
      />
      <ActivityCard
          image="https://picsum.photos/seed/science-club/400/200"
          title="النادي العلمي"
          description="استكشفوا عالم العلوم من خلال التجارب الممتعة والمشاريع المبتكرة."
      />
      <ActivityCard
          image="https://picsum.photos/seed/reading-club/400/200"
          title="نادي القراءة"
          description="نلتقي لمناقشة الكتب والروايات وتوسيع آفاقنا الأدبية."
      />
    </div>
  </div>
</template>

<script setup>
import ActivityCard from '~/components/ActivityCard.vue';
</script>
