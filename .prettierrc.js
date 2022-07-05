module.exports = {
  printWidth: 100, // Single line output （ No break ） Of （ Maximum ） length
  tabWidth: 2, // Number of spaces per indentation level
  tabs: false, // Use tabs (tab) Zoom in instead of spaces (space).
  semi: false, // Whether to print a semicolon at the end of the statement
  singleQuote: true, // Whether to use single quotation marks
  quoteProps: 'as-needed', // Add quotation marks around object properties only if necessary
  jsxSingleQuote: false, // jsx Don't use single quotes , Use double quotes
  trailingComma: 'none', // Remove the comma following the last element of the object
  bracketSpacing: true, // Whether to add spaces to object properties
  jsxBracketSameLine: true, // take > Multiple lines JSX Element at the end of the last line , Not on the next line alone （ Not for autistic elements ）, Default false, Choose here > Don't start another line
  arrowParens: 'always', // Arrow function , When there is only one parameter , You also need brackets
  proseWrap: 'always', // When exceeding print width（ There is this parameter above ） Break the line when
  htmlWhitespaceSensitivity: 'ignore', // Appoint HTML Global white space sensitivity of the file , "ignore" - Spaces are considered insensitive
  vueIndentScriptAndStyle: false, // stay VUE Don't indent scripts and style tags in files
  stylelintIntegration: true,
  endOfLine: 'auto',
};
