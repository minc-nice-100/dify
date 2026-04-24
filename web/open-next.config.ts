// dify/web/open-next.config.ts
import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";
import cache from "@opennextjs/cloudflare/kvCache";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      // 启用缓存，使用 KV
      incrementalCache: "dummy",
      tagCache: "dummy", // 缓存标签暂不实现
      queue: "dummy",    // 队列暂不实现
    },
  },

  // 最关键的部分：配置外部中间件为 edge 运行时
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
