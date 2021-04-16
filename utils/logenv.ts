export default function logEnv(): void {
  console.clear();
  console.log("Logging console arguments --------------");
  process.argv.forEach((arg) => console.log(arg));
  console.log("Logged console arguments --------------");
}
