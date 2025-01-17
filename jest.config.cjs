module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  globals: {
    "babel-jest": {
      useESM: true,
    },
  },
};
