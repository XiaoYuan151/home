<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { tabs } from "@/configs/tabs";
import { links } from "@/configs/links";
import PageHeader from "@/components/PageHeader.vue";
import PageSection from "@/components/PageSection.vue";
import PageFooter from "@/components/PageFooter.vue";

const { t, locale } = useI18n();
const cn = ref(false);
const tab = ref(0);
const sections = links(t);
onMounted(() => {
  document.title = t("title");
  document.body.style.overflowY = "hidden";
  if (location.hostname.endsWith(".cn")) {
    cn.value = true;
  }
});
const copy_bitcoin = async () => {
  await navigator.clipboard.writeText("3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB");
  alert(t("bitcoin_alert"));
};
const copy_dogecoin = async () => {
  await navigator.clipboard.writeText("DDr7NdvdtzxsQTuesq5UDNXT8WQAUEotjH");
  alert(t("dogecoin_alert"));
};
const copy_ethereum = async () => {
  await navigator.clipboard.writeText(
    "0xA57F5F34f6a0B8f44C3363dBA6Dd996f801A0500",
  );
  alert(t("ethereum_alert"));
};
const copy_tron = async () => {
  await navigator.clipboard.writeText("TUVwPUf1NMFUbeuLQ91Qa4fPDWzZsxEwyF");
  alert(t("tron_alert"));
};
</script>

<template>
  <main>
    <header>
      <PageHeader
        v-if="cn === true"
        @tab="tab = $event"
        :title="t('title')"
        :subtitle_1="t('welcome')"
        :subtitle_2="`${t('contact')}<a href='mailto:contact@xiaoyuan151.com.cn'>contact@xiaoyuan151.com.cn</a>`"
        :list="tabs(t)"
      />
      <PageHeader
        v-else
        @tab="tab = $event"
        :title="t('title')"
        :subtitle_1="t('welcome')"
        :subtitle_2="`${t('contact')}<a href='mailto:contact@xiaoyuan151.com'>contact@xiaoyuan151.com</a>`"
        :list="tabs(t)"
      />
    </header>
    <div class="content">
      <PageSection v-if="tab === 0" :list="sections.official" />
      <PageSection v-if="cn === false && tab === 1" :list="sections.sponsor" />
      <PageSection v-if="tab === 2" :list="sections.friendly" />
      <PageSection v-if="tab === 3" :list="sections.other" />
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
  text-decoration: none;
  user-select: none;
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
  height: auto;
  flex: 1;
  overflow-y: scroll;
}
</style>
