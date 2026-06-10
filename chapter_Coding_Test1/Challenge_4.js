// Challenge: Create a standard label for a test run dashboard

function createTestRunLabel(suiteName, environment, buildNumber) {
    // 1. Trim the suite name
    const trimmedSuite = suiteName.trim();
    
    // 2. Lowercase the environment
    const lowerEnv = environment.toLowerCase();
    
    // 3. Append build number as build-N
    const buildLabel = `build-${buildNumber}`;
    
    // 4. Join the three parts with " | "
    return `${trimmedSuite} | ${lowerEnv} | ${buildLabel}`;
}

// Example usage
console.log(createTestRunLabel("  Regression Suite  ", "STAGING", 42));
// Output: "Regression Suite | staging | build-42"

console.log(createTestRunLabel("Smoke Tests", "PROD", 1));
// Output: "Smoke Tests | prod | build-1"

console.log(createTestRunLabel("E2E Flow", "Dev", 105));
// Output: "E2E Flow | dev | build-105"
