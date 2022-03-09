/** Package manager */
export type DependencyManager = "npm" | "yarn" | "pnpm";

/**
 * It detects the package manager being used to run the "create"
 * command that it's commonly used to initialize new projects.
 * @param env {env} Object that contains the environment variables.
 * @returns {DependencyManager} Dependency manager used to run the create workflow.
 */
export default function detectCreatePackageManager(
  env = process.env
): DependencyManager {
  if (env.npm_config_user_agent?.includes("yarn")) {
    return "yarn";
  } else if (env.npm_config_user_agent?.includes("pnpm")) {
    return "pnpm";
  } else {
    return "npm";
  }
}
