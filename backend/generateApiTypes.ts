import { $ } from "bun";
import { watch } from "fs";

const watcher = watch(
  import.meta.dir + "/src",
  { recursive: true },
  async () => {
    await $`bunx dts-bundle-generator -o ../frontend/src/generated/api.d.ts --project tsconfig.json --no-check  src/index.ts`;
    console.log("Updating api types");
  }
);

process.on("SIGINT", () => {
  watcher.close();
  process.exit(0);
});
