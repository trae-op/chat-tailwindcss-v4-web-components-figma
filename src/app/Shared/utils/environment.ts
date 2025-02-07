export function getEnvironment(key: "DEV" | "PROD"): boolean {
  return import.meta.env[key];
}
