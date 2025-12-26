module.exports = {
    apps: [
      {
        name: "extended-portfolio",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: "max", // Use all available CPUs
        exec_mode: "cluster",
        watch: false,
        max_memory_restart: "2G",
        env: {
          NODE_ENV: "production",
          PORT: 3003
        }
      }
    ]
  };