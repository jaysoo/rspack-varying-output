# Rspack

This repo shows an Rspack app that has outputs differ based on `CI` and `NODE_ENV` environment variables.

```
# This goes to build/__ci_build__
CI=true nx build

# This goes to build/__prod_build__
nx build

# This goes to build/__dev_build__
NODE_ENV=development nx build
```

This works because `outputs` in `project.json` has all three paths specified, and we've set `CI` and `NODE_ENV` as inputs to `build` in `nx.json`.

