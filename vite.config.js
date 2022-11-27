import { defineConfig } from "vite";

export default defineConfig({
  // @ts-ignore
  test: {
    clearMocks: true,
    mockReset: true,
  },
});
