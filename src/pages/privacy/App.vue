<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import zh from "./components/zh.vue";
import en from "./components/en.vue";

const { t, locale } = useI18n();
const cn = ref(false);
const chn = ref(false);
onMounted(() => {
  if (location.hostname.endsWith(".cn")) {
    cn.value = true;
  }
  if (locale.value === "zh") {
    chn.value = true;
  }
  document.title = t("title");
});
</script>

<template>
  <main>
    <PageHeader
      v-if="cn"
      :title="t('title')"
      :subtitle="t('update')"
      :html="`<a href='/'>${t('back')}</a>`"
    />
    <PageHeader
      v-else
      :title="t('title')"
      :subtitle="t('update')"
      :html="`<a href='/'>${t('back')}</a>`"
    />
    <div class="content">
      <zh v-if="chn"></zh>
      <en v-else></en>
    </div>
  </main>
  <footer>
    <PageFooter
      v-if="cn"
      :copy="t('copy')"
      :owner="t('owner')"
      :icp="`<a href='https://beian.miit.gov.cn' target='_blank'>${t('beian')}</a>`"
      :privacy="t('privacy')"
      :terms="t('terms')"
    />
    <PageFooter
      v-else
      :copy="t('copy')"
      :owner="t('owner')"
      :icp="`<a href='https://icp.gov.moe/?keyword=20250319' target='_blank'>${t('icp')}</a>`"
      :privacy="t('privacy')"
      :terms="t('terms')"
    />
  </footer>
</template>

<style scoped>
a {
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  user-select: none;
}

a:hover {
  color: var(--color-border-hover);
}

main {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 14px 6px 38px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
