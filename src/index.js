/**
 * It detects the package manager being used to run the "create"
 * command that it's commonly used to initialize new projects.
 * @param env {env} Object that contains the environment variables.
 * @returns {DependencyManager} Dependency manager used to run the create workflow.
 */
export default function detectCreatePackageManager(env = process.env) {
    if (env.npm_config_user_agent?.includes("yarn")) {
        return "yarn";
    }
    else if (env.npm_config_user_agent?.includes("pnpm")) {
        return "pnpm";
    }
    else {
        return "npm";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxPQUFPLFVBQVUsMEJBQTBCLENBQ2hELEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRztJQUVqQixJQUFJLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDL0MsT0FBTyxNQUFNLENBQUM7S0FDZjtTQUFNLElBQUksR0FBRyxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN0RCxPQUFPLE1BQU0sQ0FBQztLQUNmO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyJ9