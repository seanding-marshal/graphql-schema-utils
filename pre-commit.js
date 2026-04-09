const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Pre-commit hook to validate GraphQL schema
function validateGraphQLSchema() {
  try {
    // Run GraphQL validation script
    execSync('npx graphql-schema-validator --schema ./schema.graphql', { stdio: 'inherit' });
  } catch (error) {
    console.error('GraphQL schema validation failed. Aborting commit.\n');
    process.exit(1);
  }
}

// Pre-commit hook to check code formatting
function checkCodeFormatting() {
  try {
    // Run ESLint for code formatting
    execSync('npx eslint . --ext .js,.ts', { stdio: 'inherit' });
  } catch (error) {
    console.error('Code formatting check failed. Aborting commit.\n');
    process.exit(1);
  }
}

// Pre-commit hook to verify Git hooks are up to date
function verifyGitHooks() {
  const hooksDir = path.resolve(__dirname, '.git/hooks');
  const hookFile = path.resolve(hooksDir, 'pre-commit');

  if (!fs.existsSync(hookFile)) {
    console.error('Git hook not found. Please install hooks.\n');
    process.exit(1);
  }

  try {
    const hookContent = fs.readFileSync(hookFile, 'utf-8');
    if (!hookContent.includes('node pre-commit.js')) {
      console.error('Git hook is outdated. Please reinstall hooks.\n');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error reading Git hook file.\n');
    process.exit(1);
  }
}

// Main function to run all pre-commit hooks
function runPreCommitHooks() {
  console.log('Running pre-commit hooks...\n');

  validateGraphQLSchema();
  checkCodeFormatting();
  verifyGitHooks();

  console.log('All pre-commit hooks passed.\n');
}

runPreCommitHooks();