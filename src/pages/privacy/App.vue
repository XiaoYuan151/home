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
    <header>
      <PageHeader
        v-if="cn === true"
        @tab="tab = $event"
        :title="t('title')"
        :subtitle_1="t('update')"
        :subtitle_2="`<a href='/'>${t('back')}</a>`"
      />
      <PageHeader
        v-else
        @tab="tab = $event"
        :title="t('title')"
        :subtitle_1="t('update')"
        :subtitle_2="`<a href='/'>${t('back')}</a>`"
      />
    </header>
    <div class="content">
      <zh v-if="chn === true"></zh>
      <en v-else></en>
    </div>
    <footer>
      <PageFooter
        v-if="cn === true"
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
  </main>
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
  height: 100vh;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  padding: 14px 6px 38px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 14px;
}

footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
}
</style>
