const coverage = require('./coverage.json')

const { createReporter } = require('istanbul-api')
const libCoverage = require('istanbul-lib-coverage')
const map = libCoverage.createCoverageMap(coverage)
const summary = libCoverage.createCoverageSummary();

const cleanName = (filePath) => {
  return filePath.replace(process.cwd(), '')
}

const mapStats = (data, mapFn) => Object.keys(data).reduce((statMap, key) => {
  if (!['lines', 'statements', 'functions', 'branches'].includes(key)) {
    return statMap
  }
  return ({
    ...statMap,
    [key]: mapFn(data[key])
  })
}, {})

const pctOnly = ({ total, covered, skipped, pct }) => pct

const files = map.files().map(f => {
  const fileCoverage = map.fileCoverageFor(f)
  const fileSummary = fileCoverage.toSummary()

  summary.merge(fileSummary)

  return {
    ...mapStats(fileSummary.data, pctOnly),
    file: cleanName(f)
  }
})

files.shift({
  ...mapStats(summary.data, pctOnly),
  file: 'All files'
})

console.log(files, map.files())
console.table(files)

const reporter = createReporter()
reporter.add('html')
reporter.write(map)

// console.log(summary)
