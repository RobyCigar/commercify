const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto-js");
const passport = require("passport");
const chalk = require("chalk");

const auth = require("../../middleware/auth");

// Bring in Models & Helpers
const User = require("../../models/user");
const keys = require("../../config/keys");

const { secret, tokenLife } = keys.jwt;

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: "You must enter an email address." });
  }

  if (!password) {
    return res.status(400).json({ error: "You must enter a password." });
  }

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res
        .status(400)
        .send({ error: "No user found for this email address." });
    }

    if (!user) {
      return res
        .status(400)
        .send({ error: "No user found for this email address." });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
        };

        jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
          res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              role: user.role,
            },
          });
        });
      } else {
        res.status(400).json({
          success: false,
          error: "Password Incorrect",
        });
      }
    });
  });
});

router.post("/register", (req, res) => {
  const { email, firstName, lastName, password, isSubscribed } = req.body;

  if (!email) {
    return res.status(400).json({ error: "You must enter an email address." });
  }

  if (!firstName || !lastName) {
    return res.status(400).json({ error: "You must enter your full name." });
  }

  if (!password) {
    return res.status(400).json({ error: "You must enter a password." });
  }

  User.findOne({ email }, async (err, existingUser) => {
    if (err) {
      next(err);
    }

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "That email address is already in use." });
    }

    let subscribed = false;

    const user = new User({
      email,
      password,
      firstName,
      lastName,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return res.status(400).json({
            error: "Your request could not be processed. Please try again.",
          });
        }

        user.password = hash;

        user.save(async (err, user) => {
          if (err) {
            return res.status(400).json({
              error: "Your request could not be processed. Please try again.",
            });
          }

          const payload = {
            id: user.id,
          };

          jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
            res.status(200).json({
              success: true,
              subscribed,
              token: `Bearer ${token}`,
              user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
              },
            });
          });
        });
      });
    });
  });
});

router.post("/forgot", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ error: "You must enter an email address." });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err || existingUser === null) {
      return res.status(400).json({
        error:
          "Your request could not be processed as entered. Please try again.",
      });
    }

    crypto.randomBytes(48, (err, buffer) => {
      const resetToken = buffer.toString("hex");
      if (err) {
        return res.status(400).json({
          error: "Your request could not be processed. Please try again.",
        });
      }

      existingUser.resetPasswordToken = resetToken;
      existingUser.resetPasswordExpires = Date.now() + 3600000;

      existingUser.save(async (err) => {
        if (err) {
          return res.status(400).json({
            error: "Your request could not be processed. Please try again.",
          });
        }

        res.status(200).json({
          success: true,
          message:
            "Please check your email for the link to reset your password.",
        });
      });
    });
  });
});

router.post("/reset/:token", (req, res) => {
  const password = req.body.password;

  if (!password) {
    return res.status(400).json({ error: "You must enter a password." });
  }

  User.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    },
    (err, resetUser) => {
      if (!resetUser) {
        return res.status(400).json({
          error:
            "Your token has expired. Please attempt to reset your password again.",
        });
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            return res.status(400).json({
              error:
                "Your request could not be processed as entered. Please try again.",
            });
          }
          req.body.password = hash;

          resetUser.password = req.body.password;
          resetUser.resetPasswordToken = undefined;
          resetUser.resetPasswordExpires = undefined;

          resetUser.save(async (err) => {
            if (err) {
              return res.status(400).json({
                error:
                  "Your request could not be processed as entered. Please try again.",
              });
            }

            res.status(200).json({
              success: true,
              message:
                "Password changed successfully. Please login with your new password.",
            });
          });
        });
      });
    }
  );
});

router.post("/reset", auth, (req, res) => {
  const email = req.user.email;
  const password = req.body.password;

  if (!password) {
    return res.status(400).json({ error: "You must enter a password." });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err || existingUser === null) {
      return res.status(400).json({
        error:
          "Your request could not be processed as entered. Please try again.",
      });
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          return res.status(400).json({
            error:
              "Your request could not be processed as entered. Please try again.",
          });
        }
        req.body.password = hash;

        existingUser.password = req.body.password;

        existingUser.save(async (err) => {
          if (err) {
            return res.status(400).json({
              error:
                "Your request could not be processed as entered. Please try again.",
            });
          }

          res.status(200).json({
            success: true,
            message:
              "Password changed successfully. Please login with your new password.",
          });
        });
      });
    });
  });
});


router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    const payload = {
      id: req.user.id,
    };

    jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
      if(err) {
        console.log('error', err)
      }
      const jwt = `Bearer ${token}`;
      console.log('ini token', token)

      const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('token', '${jwt}');
        // Redirect browser to root of application
        window.location.href = 'https://google.com';
      </script>
    </html>       
    `;

      res.send(htmlWithEmbeddedJWT);
    });
  }
);


// router.get(
//   "/facebook",
//   passport.authenticate("facebook", {
//     session: false,
//     scope: ["public_profile", "email"],
//   })
// );

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     failureRedirect: "/",
//     session: false,
//   }),
//   (req, res) => {
//     const payload = {
//       id: req.user.id,
//     };

//     jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
//       const jwt = `Bearer ${token}`;

//       const htmlWithEmbeddedJWT = `
//     <html>
//       <script>
//         // Save JWT to localStorage
//         window.localStorage.setItem('token', '${jwt}');
//         // Redirect browser to root of application
//         window.location.href = '/auth/success';
//       </script>
//     </html>       
//     `;

//       res.send(htmlWithEmbeddedJWT);
//     });
//   }
// );

module.exports = router;
