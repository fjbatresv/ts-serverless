require('dotenv').config()
const scanner = require('sonarqube-scanner')

const exclusions = [
  '**/*.spec.ts',
  '**/interfaces/**',
  '**/interface.ts',
  '**/*.schema.ts',
  '**/*.js',
  '**/*.dto.ts',
  '**/*.constants.ts',
  '**/dto/**',
  '**/constants.ts',
  '**/__mocks__/**',
  '**/__tests__/**',
  '**/*.stub.ts',
  '**/*.model.ts',
  '**/index.ts',
]

scanner(
  {
    serverUrl: process.env.SONAR_URL,
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectKey': process.env.SONAR_PROJECT_KEY,
      'sonar.sources': './src',
      'sonar.exclusions': exclusions.join(', '),
      'sonar.tests': './src',
      'sonar.test.inclusions': '**/*.spec.ts',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
    },
  },
  () => process.exit(),
)
