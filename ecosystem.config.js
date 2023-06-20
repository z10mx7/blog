module.exports = {
  apps: [
    {
      name: "Blog",
      cwd: "./",
      script: "npm",
      args: "start ",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

    },

    // optionally a second project
  ],
};