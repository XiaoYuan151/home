<script setup>
import { onMounted, ref } from "vue";

const avatar = ref(null);
const year = ref(null);
const cn = ref(false);
if (location.hostname.endsWith(".cn")) {
  cn.value = true;
}
onMounted(() => {
  sha256("xiaoyuan151@outlook.com").then((hash) => {
    avatar.value.src = `https://www.gravatar.com/avatar/${hash}`;
  });
  const start = 2024;
  const current = new Date().getFullYear();
  year.value.textContent = start === current ? current : `${start}–${current}`;
});

async function sha256(email) {
  const encoder = new TextEncoder();
  const data = encoder.encode(email);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const array = Array.from(new Uint8Array(buffer));
  return array.map((b) => b.toString(16).padStart(2, "0")).join("");
}
</script>

<template>
  <main>
    <div class="header">
      <div class="title">
        <img ref="avatar" alt="avatar" src="" />
        <h1>使用条款</h1>
      </div>
      <p>最后更新时间：2025年9月24日</p>
      <a href="/"><- 返回首页</a>
    </div>
    <div class="content">
      <p>
        欢迎访问
        <a href="//www.xiaoyuan151.com">www.xiaoyuan151.com</a
        >（以下简称“本网站”或“我们”）。本使用条款（以下简称“条款”）规定了您使用本网站及其服务、内容和功能的条件。使用本网站即表示您同意遵守这些条款。如不同意，请勿使用本网站。
      </p>
      <h2>1. 条款接受</h2>
      <p>
        本条款是您与本网站之间的法律协议，适用于您对本网站的所有访问和使用。我们可能随时更新条款，更新版本将在本页面发布，注明“最后更新日期”。继续使用本网站即表示您接受更新条款。
      </p>
      <h2>2. 使用权限</h2>
      <p>
        我们授予您有限的、非独占的、不可转让的权限，仅限个人、非商业用途访问和使用本网站。您不得：
      </p>
      <ul>
        <li>从事任何非法或未经授权的活动。</li>
        <li>干扰本网站的正常运行或安全性。</li>
        <li>未经许可复制、修改或分发本网站内容。</li>
      </ul>
      <h2>3. 用户责任</h2>
      <p>您同意在使用本网站时：</p>
      <ul>
        <li>不发布违法、冒犯性或侵犯他人权利的内容。</li>
        <li>不使用自动化工具未经授权获取本网站数据。</li>
        <li>不尝试未经许可访问本网站的后台系统。</li>
      </ul>
      <p>我们保留监控用户行为并在必要时限制或终止访问的权利。</p>
      <h2>4. 知识产权</h2>
      <p>
        本网站的所有内容（包括文本、图像、代码等）受版权、商标或其他法律保护，归本网站或其许可方所有。未经书面许可，您不得使用、复制或分发这些内容。
      </p>
      <h2>5. 第三方链接</h2>
      <p>
        本网站可能包含第三方网站链接。我们不对这些网站的可用性、内容或做法负责。您需自行承担访问第三方网站的风险。
      </p>
      <h2>6. 免责声明</h2>
      <p>
        本网站按“现状”提供，不提供任何明示或暗示的保证，包括适销性或特定用途适用性的保证。我们不对以下情况负责：
      </p>
      <ul>
        <li>因使用本网站导致的任何损失或损害。</li>
        <li>本网站内容的准确性或完整性。</li>
        <li>因技术问题导致的服务中断。</li>
      </ul>
      <h2>7. 终止使用</h2>
      <p>
        我们可随时暂停或终止您对本网站的访问，无需事先通知，原因包括但不限于违反本条款或保护网站安全的需求。
      </p>
      <h2>8. 适用法律</h2>
      <p>
        本条款受中华人民共和国法律管辖。任何争议应提交至本网站运营方所在地有管辖权的人民法院解决。
      </p>
      <h2>9. 条款更新</h2>
      <p>
        我们可能不时更新本条款，更新将在本页面发布。请定期查看以了解最新条款。继续使用本网站即表示您接受更新。
      </p>
      <h2>10. 联系方式</h2>
      <p>如有疑问，请通过以下方式联系我们：</p>
      <p>
        电子邮件：<a href="mailto:contact@xiaoyuan151.com"
          >contact@xiaoyuan151.com</a
        >
      </p>
      <p>我们将尽快回应您的请求。</p>
    </div>
  </main>
  <footer>
    <p>
      &copy; 版权所有 <span ref="year"></span> 小源151 | 保留所有权利 |
      <a v-if="cn" href="https://beian.miit.gov.cn" target="_blank"
        >桂ICP备2025072112号</a
      >
      <a v-else href="https://icp.gov.moe/?keyword=20250319" target="_blank"
        >萌ICP备20250319号</a
      >
    </p>
    <p><a href="/privacy">隐私政策</a> | <a href="/terms">使用条款</a></p>
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
  gap: 6px;
}

footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
