import { describe, it, expect } from "vitest";
import detectCreatePackageManager from "./index";

describe("detectCreatePackageManager", () => {
  it("returns yarn when the npm_config_user_agent env. variable includes yarn", () => {
    // Given
    const env = { npm_config_user_agent: "yarn" };

    // When
    const got = detectCreatePackageManager(env);

    // Then
    expect(got).toEqual("yarn");
  });

  it("returns pnpm when the npm_config_user_agent env. variable includes pnpm", () => {
    // Given
    const env = { npm_config_user_agent: "pnpm" };

    // When
    const got = detectCreatePackageManager(env);

    // Then
    expect(got).toEqual("pnpm");
  });

  it("returns npm by default", () => {
    // Given
    const env = { npm_config_user_agent: "npm" };

    // When
    const got = detectCreatePackageManager(env);

    // Then
    expect(got).toEqual("npm");
  });
});
