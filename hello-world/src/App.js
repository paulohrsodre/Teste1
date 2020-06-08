const express = require('express');
const app = exress();

app.use((req, res, next) => {
  res.status(200).send ({
    mensagem: 'Its Ok!'
  });
});

module.exports = app;