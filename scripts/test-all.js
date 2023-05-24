const glob = require("fast-glob");
const { spawn } = require("child_process");
const { dirname } = require("path");

glob
  .sync("packages/**/*/package.json", {
    ignore: ["**/node_modules"],
  })
  .reduce(async (acc, pkg) => {
    await acc;
    return new Promise((resolve, reject) => {
      const cp = spawn("npm", ["run", "test"], {
        cwd: dirname(pkg),
        stdio: "inherit",
      });
      cp.on("exit", resolve);
      cp.on("error", reject);
    });
  }, Promise.resolve());
