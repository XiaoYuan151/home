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
        <h1>隐私政策</h1>
      </div>
      <p>最后更新时间：2025年9月24日</p>
      <a href="/"><- 返回首页</a>
    </div>
    <div class="content">
      <p>
        欢迎访问
        <a href="//www.xiaoyuan151.com">www.xiaoyuan151.com</a
        >（以下简称“我们”或“本网站”）。我们非常重视您的隐私，并致力于保护您的个人信息。本隐私政策说明了我们在您使用本网站时如何收集、使用、披露和保护您的信息。请仔细阅读以下内容。
      </p>
      <h2>1. 我们收集的信息</h2>
      <p>我们可能收集以下类型的个人信息：</p>
      <ul>
        <li>
          <strong>您提供的信息</strong
          >：如您通过联系表单、注册或评论功能提供的姓名、电子邮件地址或其他信息。
        </li>
        <li>
          <strong>自动收集的信息</strong>：当您访问本网站时，我们可能通过
          Cookies 或类似技术自动收集信息，包括 IP
          地址、浏览器类型、设备信息、访问时间和页面浏览记录。
        </li>
        <li>
          <strong>第三方来源</strong
          >：如您通过社交媒体或其他第三方平台与本网站互动，我们可能从这些平台获取有限信息。
        </li>
      </ul>
      <h2>2. 我们如何使用您的信息</h2>
      <p>我们可能将收集的信息用于以下目的：</p>
      <ul>
        <li>提供和优化本网站的服务和功能。</li>
        <li>响应您的询问或提供客户支持。</li>
        <li>分析网站使用情况以改进用户体验。</li>
        <li>发送与本网站相关的通知或更新（如有订阅）。</li>
        <li>遵守法律义务或保护我们的合法权益。</li>
      </ul>
      <h2>3. 信息共享与披露</h2>
      <p>
        我们不会出售或租赁您的个人信息给第三方，但可能在以下情况下共享您的信息：
      </p>
      <ul>
        <li>
          与提供服务的第三方（如网站托管、数据分析）合作，这些第三方仅在必要范围内使用您的信息，并受保密义务约束。
        </li>
        <li>根据法律要求或政府命令披露信息。</li>
        <li>为保护本网站、用户或其他方的权利、财产或安全而需要披露信息。</li>
      </ul>
      <h2>4. Cookies 和跟踪技术</h2>
      <p>
        本网站可能使用 Cookies
        和类似技术来提升用户体验和分析网站流量。您可以通过浏览器设置禁用
        Cookies，但这可能会影响网站的部分功能。
      </p>
      <h2>5. 数据安全</h2>
      <p>
        我们采取合理的技术和组织措施保护您的个人信息，防止未经授权的访问、丢失或篡改。然而，互联网传输并非完全安全，我们无法绝对保证数据的安全性。
      </p>
      <h2>6. 您的权利</h2>
      <p>根据适用法律，您可能享有以下权利：</p>
      <ul>
        <li>访问我们持有的您的个人信息。</li>
        <li>要求更正或删除您的个人信息。</li>
        <li>反对或限制我们处理您的信息。</li>
        <li>请求将您的信息转移至其他服务提供商。</li>
      </ul>
      <p>
        如需行使这些权利，请通过
        <a href="mailto:contact@xiaoyuan151.com">contact@xiaoyuan151.com</a>
        联系我们。
      </p>
      <h2>7. 第三方链接</h2>
      <p>
        本网站可能包含指向第三方网站的链接。这些网站有其独立的隐私政策，我们不对其内容或做法负责。请审阅您访问的任何第三方网站的隐私政策。
      </p>
      <h2>8. 儿童隐私</h2>
      <p>
        本网站不面向 13
        岁以下的儿童。我们不会故意收集儿童的个人信息。如发现我们无意中收集了儿童信息，请联系我们，我们将尽快删除相关信息。
      </p>
      <h2>9. 隐私政策的变更</h2>
      <p>
        我们可能不时更新本隐私政策。任何更改将在本页面发布，并更新“最后更新日期”。请定期查看本政策以了解最新信息。
      </p>
      <h2>10. 联系我们</h2>
      <p>如您对本隐私政策有任何疑问或意见，请通过以下方式联系我们：</p>
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
