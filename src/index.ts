export type DependencyManager = "npm" | "yarn" | "pnpm"

export default function detectCreatePackageManager(
    env = process.env,
  ): DependencyManager {
    if (env.npm_config_user_agent?.includes('yarn')) {
      return "yarn"
    } else if (env.npm_config_user_agent?.includes('pnpm')) {
      return "pnpm"
    } else {
      return "npm"
    }
  }