const express = require("express");
const { sendEmail } = require("../handlers/emailFunction");

const router = express.Router();

router.post("/send_email", (req, res) => {
  const { nom, prenom, email, text } = req.body;
  sendEmail(nom, prenom, email, text)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = router;
