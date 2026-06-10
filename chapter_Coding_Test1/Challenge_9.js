function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  // write your code here
  let trimSui = suiteName.trim();
  let newEnv = environment.toLowerCase();
  let newBuild = `build-${buildNumber}`;

  return `${trimSui} | ${newEnv} | ${newBuild}`;

}

console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42));
console.log(buildJsBasicsRunLabel("Regression", "PROD", 7));
