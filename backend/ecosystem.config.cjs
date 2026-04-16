module.exports = {
  apps: [
    {
      name: "resort-api",
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
    },
  ],
};

