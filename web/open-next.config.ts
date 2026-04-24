// 直接导出一个包含完整配置的静态对象，避免构建时查找依赖
import cache from "@opennextjs/cloudflare/kvCache"; // 缓存依然可以按需导入

const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      // 使用 KV 缓存，或者改成 "dummy" 禁用持久缓存
      incrementalCache: async () => cache,
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
};

export default config;
