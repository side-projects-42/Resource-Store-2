const { hasRequiredDeps, hasRequiredFiles, getYarnOrNPMCommand, scanScripts } = require('./utils/jsdetect')

const FRAMEWORK_PORT = 5000

module.exports = function detector() {
  // REQUIRED FILES
  if (!hasRequiredFiles(['package.json'])) return false
  // REQUIRED DEPS
  if (!hasRequiredDeps(['svelte'])) return false
  // AVOID FALSE-POSITIVES (having their own detectors and to avoid duplication https://github.com/netlify/cli/issues/347)
  if (hasRequiredDeps(['@sveltejs/kit'])) return false
  if (hasRequiredDeps(['sapper'])) return false

  /** everything below now assumes that we are within svelte */

  const possibleArgsArrs = scanScripts({
    preferredScriptsArr: ['dev', 'start', 'run'],
    preferredCommand: 'npm run dev',
  })

  return {
    framework: 'svelte',
    command: getYarnOrNPMCommand(),
    frameworkPort: FRAMEWORK_PORT,
    possibleArgsArrs,
    dist: 'public',
  }
}
