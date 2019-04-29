const { createReporter} = require('istanbul-api')
const coverageRaw = require('./coverage.json')

const reporter = createReporter()

reporter.add('html')

reporter.write(coverageRaw)
