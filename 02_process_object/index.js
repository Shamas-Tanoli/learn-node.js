// process_demo.js

const path = require('path');

console.log("===== PROCESS OBJECT DEMO =====\n");

// 1️⃣ Basic process info
console.log("Process ID (pid):", process.pid);
console.log("Node.js version:", process.version);
console.log("Node dependencies versions:", process.versions);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Current working directory:", process.cwd());
console.log("Execution path (process.execPath):", process.execPath);

// 2️⃣ Command-line arguments
console.log("\nCommand-line arguments (process.argv):", process.argv);

// 3️⃣ Environment variables
console.log("\nEnvironment variables (process.env):");
console.log("NODE_ENV:", process.env.NODE_ENV || "not set");
console.log("PATH:", process.env.PATH);

// 4️⃣ Memory usage
console.log("\nMemory usage (process.memoryUsage()):");
console.log(process.memoryUsage());

// 5️⃣ Uptime
console.log("\nProcess uptime (seconds):", process.uptime());

// 6️⃣ File info using path
console.log("\nCurrent file info:");
console.log("Full path (__filename):", __filename);
console.log("Directory (__dirname):", __dirname);
console.log("File name:", path.basename(__filename));
console.log("File name without extension:", path.parse(__filename).name);

// 7️⃣ Process exit and signals
console.log("\nPress CTRL+C to trigger SIGINT signal.\n");

process.on('SIGINT', () => {
    console.log("Caught SIGINT (CTRL+C). Exiting gracefully...");
    process.exit(0);
});

process.on('exit', (code) => {
    console.log(`Process is exiting with code: ${code}`);
});

process.on('beforeExit', (code) => {
    console.log(`Process beforeExit event triggered with code: ${code}`);
});

// 8️⃣ Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1);
});

// Example of throwing an error to test uncaughtException
// setTimeout(() => { throw new Error("Test uncaught exception!"); }, 5000);

// Keep process alive
setInterval(() => {
    console.log("Process is still running... (press CTRL+C to exit)");
}, 5000);
