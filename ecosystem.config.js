module.exports = {
  apps: [
    {
      name: "Blog",
      cwd: "./",
      script: "npm",
      args: "start ",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },

    },

    // optionally a second project
  ],
};