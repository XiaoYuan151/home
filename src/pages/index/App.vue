<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const cn = ref(false);
const year = ref(null);
onMounted(() => {
  if (location.hostname.endsWith(".cn")) {
    cn.value = true;
  }
  const start = 2024;
  const current = new Date().getFullYear();
  if (year.value) {
    year.value.textContent =
      start === current ? current : `${start}–${current}`;
  }
  document.title = t("title");
});
const copy_bitcoin = async () => {
  try {
    await navigator.clipboard.writeText("3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB");
    alert(t("bitcoin_alert"));
  } catch (err) {
    alert(t("err") + err);
  }
};
const copy_dogecoin = async () => {
  try {
    await navigator.clipboard.writeText("DDr7NdvdtzxsQTuesq5UDNXT8WQAUEotjH");
    alert(t("dogecoin_alert"));
  } catch (err) {
    alert(t("err") + err);
  }
};
const copy_ethereum = async () => {
  try {
    await navigator.clipboard.writeText(
      "0xA57F5F34f6a0B8f44C3363dBA6Dd996f801A0500",
    );
    alert(t("ethereum_alert"));
  } catch (err) {
    alert(t("err") + err);
  }
};
const copy_tron = async () => {
  try {
    await navigator.clipboard.writeText("TUVwPUf1NMFUbeuLQ91Qa4fPDWzZsxEwyF");
    alert(t("tron_alert"));
  } catch (err) {
    alert(t("err") + err);
  }
};
</script>

<template>
  <main>
    <div class="header">
      <div class="title">
        <img alt="avatar" src="https://img.xiaoyuan151.net/avatar.jpg" />
        <h1>{{ t("title") }}</h1>
      </div>
      <p>{{ t("welcome") }}</p>
      <p>
        {{ t("contact") }}
        <a v-if="cn" href="mailto:contact@xiaoyuan151.com.cn"
          >contact@xiaoyuan151.com.cn</a
        >
        <a v-else href="mailto:contact@xiaoyuan151.com"
          >contact@xiaoyuan151.com</a
        >
      </p>
    </div>
    <div class="content">
      <section class="section">
        <h2>{{ t("official") }}</h2>
        <a href="//www.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'house']" size="lg" />
          {{ t("website") }}</a
        >
        <a href="//blog.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'blog']" size="lg" />
          {{ t("blog") }}</a
        >
        <a href="//drive.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'cloud']" size="lg" />
          {{ t("drive") }}</a
        >
        <a href="//music.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'compact-disc']" size="lg" />
          {{ t("music") }}</a
        >
        <a href="//git.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'git-alt']" size="lg" />
          {{ t("git") }}</a
        >
        <a href="//status.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'laptop']" size="lg" />
          {{ t("status") }}</a
        >
        <a @click="copy_bitcoin">
          <font-awesome-icon :icon="['fab', 'bitcoin']" size="lg" />
          {{ t("bitcoin") }}</a
        >
        <a @click="copy_dogecoin">
          <font-awesome-icon :icon="['fas', 'dollar-sign']" size="lg" />
          {{ t("dogecoin") }}</a
        >
        <a @click="copy_ethereum">
          <font-awesome-icon :icon="['fab', 'ethereum']" size="lg" />
          {{ t("ethereum") }}</a
        >
        <a @click="copy_tron">
          <font-awesome-icon :icon="['fas', 'dollar-sign']" size="lg" />
          {{ t("tron") }}</a
        >
      </section>
      <section v-if="!cn" class="section">
        <h2>赞助链接</h2>
        <h3>使用以下链接注册以支持我（完全免费），并享受专属优惠！</h3>
        <a href="//uur.li/binance" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          Binance - 安全便捷的加密货币交易所</a
        >
        <a href="//uur.li/wasabicard" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          WasabiCard - 安全便捷的加密货币虚拟卡</a
        >
        <a href="//uur.li/wise" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          Wise - 专业的跨境汇款平台</a
        >
        <a href="//uur.li/bandwagonhost" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          BandwagonHost - 速度超快的服务器提供商</a
        >
        <a href="//uur.li/justmysocks" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          JustMySocks - 速度超快的代理服务提供商</a
        >
        <a href="//uur.li/dmit" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          DMIT - 高品质的服务器提供商</a
        >
        <a href="//uur.li/racknerd" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          RackNerd - 便宜的服务器提供商</a
        >
        <a href="//uur.li/akile" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          AkileCloud - 便宜的服务器提供商</a
        >
        <a href="//uur.li/facmata" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          FacMata.NET - 高品质的代理服务提供商</a
        >
        <a href="//uur.li/sac" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          SAC - 高品质的代理服务提供商</a
        >
        <a href="//uur.li/pqjc" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          赔钱机场 - 便宜的代理服务提供商</a
        >
        <a href="//uur.li/yfjc" target="_blank">
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" size="lg" />
          一分机场 - 便宜的代理服务提供商</a
        >
      </section>
      <section class="section">
        <h2>{{ t("link") }}</h2>
        <a href="//www.xiaoyuanstd.org" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("xystd") }}</a
        >
        <a href="//ai.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("xyai") }}</a
        >
        <a href="//wyf9.top" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("wyf9") }}</a
        >
        <a href="//zackzheng1121.github.io" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("zackzheng") }}</a
        >
        <a href="//siiway.top" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("siiway") }}</a
        >
      </section>
      <section class="section">
        <h2>{{ t("other") }}</h2>
        <a href="//src.xiaoyuan151.net/pub.gpg" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("gpg") }}</a
        >
        <a href="//swarm.xiaoyuan151.com" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("swarm") }}</a
        >
        <a href="//img.xiaoyuan151.net/neuro" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="lg" />
          {{ t("neuro") }}</a
        >
      </section>
    </div>
  </main>
  <footer>
    <p>
      &copy; {{ t("copy") }} <span ref="year"></span> {{ t("owner") }}
      <a v-if="cn" href="https://beian.miit.gov.cn" target="_blank">{{
        t("beian")
      }}</a>
      <a v-else href="https://icp.gov.moe/?keyword=20250319" target="_blank">{{
        t("icp")
      }}</a>
    </p>
    <p>
      <a href="/privacy">{{ t("privacy") }}</a> |
      <a href="/terms">{{ t("terms") }}</a>
    </p>
  </footer>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
  user-select: none;
}

main {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 14px 6px 38px;
}

.header {
  width: 100%;
  margin: 24px auto 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.header p {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.header a {
  font-weight: bold;
}

.header a:hover {
  color: var(--color-border-hover);
}

.title {
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.title img {
  height: 80px;
  border-radius: 10px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  user-select: none;
}

.section h2 {
  font-size: 16px;
  padding-left: 4px;
}

.section h3 {
  font-size: 10px;
  padding-left: 4px;
}

.section h2 + h3 {
  margin-top: -10px;
}

.section a {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--color-background-soft);
  transition: border-color 0.3s ease;
}

.section a:hover {
  border-color: var(--color-border-hover);
  background-color: var(--color-background-mute);
}

footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer a {
  font-weight: bold;
}

footer a:hover {
  color: var(--color-border-hover);
}
</style>
