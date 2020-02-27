// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['*', 'js', 'json', 'jsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).(js|jsx)?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  moduleNameMapper: {
    "^@src(.*)$": "<rootDir>/src$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@assets(.*)$": "<rootDir>/assets$1",
    "^@contexts(.*)$": "<rootDir>/src/components/contexts$1",
    "^@constans(.*)$": "<rootDir>/src/constans$1",
    "^@reducers(.*)$": "<rootDir>/src/reducers$1",
    "^@constType(.*)$": "<rootDir>/src/constType$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@actions(.*)$": "<rootDir>/src/actions$1",
    ".*\\.less$": "<rootDir>/__mocks__/fileMock.js"
  },

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
    ".+\\.(css|styl|less|sass|scss|less)$": "<rootDir>/node_modules/jest-css-modules-transform",
    "^.+\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js"
    // "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    // "^.+\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};