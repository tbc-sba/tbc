<template>
  <div class="p-6 bg-card-light dark:bg-card-dark rounded-lg shadow-sm text-right animate-fade-in">
    <h2 class="text-2xl font-bold mb-6 text-primary-DEFAULT text-center">دليل المشاركة في الأنشطة المدرسية</h2>
    <div class="space-y-6">
      <InstructionStep :number="1" title="تابع الإعلانات">
        كن على اطلاع دائم بالإعلانات المنشورة على صفحتنا على فيسبوك ولوحة الإعلانات في المدرسة لمعرفة الأنشطة القادمة.
      </InstructionStep>
      <InstructionStep :number="2" title="اختر النشاط المناسب">
        اقرأ تفاصيل كل نشاط واختر ما يتناسب مع اهتماماتك ومواهبك. لا تتردد في تجربة أشياء جديدة!
      </InstructionStep>
      <InstructionStep :number="3" title="التسجيل في الوقت المحدد">
        التزم بمواعيد التسجيل المحددة لكل نشاط. يمكنك التسجيل لدى المشرف المسؤول أو عبر النماذج الإلكترونية إن وجدت.
      </InstructionStep>
      <InstructionStep :number="4" title="الالتزام والحضور">
        المشاركة الفعالة تتطلب الالتزام بالحضور في جميع جلسات النشاط. حضورك مهم لنجاحك ونجاح الفريق.
      </InstructionStep>
      <InstructionStep :number="5" title="استمتع وتعلم!">
        الهدف الأسمى من الأنشطة هو التعلم واكتساب مهارات جديدة والاستمتاع بوقتك. شارك بروح إيجابية وتعاون مع زملائك.
      </InstructionStep>
    </div>
  </div>
</template>

<script setup>
import InstructionStep from '~/components/InstructionStep.vue';
</script>
