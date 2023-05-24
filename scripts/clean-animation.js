const glob = require("fast-glob");
const rm = require("rimraf").default;
const path = require("path");

glob
  .sync("**", {
    ignore: ["**/node_modules"],
    cwd: path.join(__dirname, "../packages/animations/src"),
    deep: 1,
    markDirectories: true,
    onlyFiles: false,
  })
  .forEach((animation) => {
    if (animation.endsWith(".ts")) {
      rm(
        path.join(
          __dirname,
          `../packages/animations/${path.basename(animation, ".ts")}.d.ts`
        )
      );
      rm(
        path.join(
          __dirname,
          `../packages/animations/${path.basename(animation, ".ts")}.js`
        )
      );
    } else {
      rm(path.join(__dirname, `../packages/animations/${animation}`));
    }
  });
