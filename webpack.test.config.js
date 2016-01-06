// This is needed for karma to locate the test files dynamically
const context = require.context('./app', true, /-test\.js$/);

context.keys().forEach(context);
