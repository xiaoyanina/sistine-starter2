import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

// 加载环境变量
dotenv.config({ path: ".env.local" });

// 检查 DATABASE_URL 是否配置
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error(
    "❌ DATABASE_URL 环境变量未设置！\n" +
    "请在 .env.local 文件中设置 DATABASE_URL，格式如下：\n" +
    'DATABASE_URL="postgresql://用户名:密码@主机:端口/数据库名?sslmode=require"\n' +
    "例如：DATABASE_URL=\"postgresql://user:password@localhost:5432/mydb\""
  );
}

// 检查是否是占位符值
if (databaseUrl.includes("@host") || databaseUrl.includes("://host") || databaseUrl === "postgresql://user:password@host/db?sslmode=require") {
  throw new Error(
    "❌ DATABASE_URL 配置不正确！\n" +
    "检测到占位符值，请将 'host' 替换为实际的数据库主机地址。\n" +
    "当前值：" + databaseUrl + "\n" +
    "请检查 .env.local 文件中的 DATABASE_URL 配置。"
  );
}

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
} satisfies Config;