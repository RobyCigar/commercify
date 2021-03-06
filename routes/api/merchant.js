const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Bring in Models & Helpers
const Merchant = require('../../models/merchant');
const User = require('../../models/user');
const Brand = require('../../models/brand');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

/*
post "/add"
get "/list"
put "/approve/:merchantId"
put "/reject/:merchantId"
post "/signup/:token"
*/


router.post('/add', async (req, res) => {
  try {
    const name = req.body.name;
    const business = req.body.business;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const brand = req.body.brand;

    if (!name || !email) {
      return res
        .status(400)
        .json({ error: 'You must enter your name and email.' });
    }

    if (!business) {
      return res
        .status(400)
        .json({ error: 'You must enter a business description.' });
    }

    if (!phoneNumber || !email) {
      return res
        .status(400)
        .json({ error: 'You must enter a phone number and an email address.' });
    }

    const merchant = new Merchant({
      name,
      email,
      business,
      phoneNumber,
      brand
    });

    const merchantDoc = await merchant.save();

    res.status(200).json({
      success: true,
      message: `We received your request! we will reach you on your phone number ${phoneNumber}!`,
      merchant: merchantDoc
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

// fetch all merchants api
router.get(
  '/list',
  auth,
  role.checkRole(role.ROLES.Admin),
  async (req, res) => {
    try {
      const merchants = await Merchant.find({}).sort('-created');

      res.status(200).json({
        merchants
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  }
);

// approve merchant
router.put('/approve/:merchantId', auth, async (req, res) => {
  try {
    const merchantId = req.params.merchantId;

    const query = { _id: merchantId };
    const update = {
      status: 'Approved',
      isActive: true
    };

    const merchantDoc = await Merchant.findOneAndUpdate(query, update, {
      new: true
    });

    await createMerchantUser(merchantDoc.email, merchantId, req.headers.host);
    await createMerchantBrand(merchantDoc);

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

// reject merchant
router.put('/reject/:merchantId', auth, async (req, res) => {
  try {
    const merchantId = req.params.merchantId;

    const query = { _id: merchantId };
    const update = {
      status: 'Rejected'
    };

    await Merchant.findOneAndUpdate(query, update, {
      new: true
    });

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

router.post('/signup/:token', async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'You must enter an email address.' });
    }

    if (!firstName || !lastName) {
      return res.status(400).json({ error: 'You must enter your full name.' });
    }

    if (!password) {
      return res.status(400).json({ error: 'You must enter a password.' });
    }

    const userDoc = await User.findOne({
      email,
      resetPasswordToken: req.params.token
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const query = { _id: userDoc._id };
    const update = {
      email,
      firstName,
      lastName,
      password: hash,
      resetPasswordToken: undefined
    };

    await User.findOneAndUpdate(query, update, {
      new: true
    });

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

const createMerchantBrand = async ({ _id, brand, business }) => {
  const newBrand = new Brand({
    name: brand,
    description: business,
    merchant: _id
  });

  return await newBrand.save();
};

const createMerchantUser = async (email, merchant, host) => {
  const firstName = '';
  const lastName = '';

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const query = { _id: existingUser._id };
    const update = {
      merchant,
      role: role.ROLES.Merchant
    };

    return await User.findOneAndUpdate(query, update, {
      new: true
    });
  } else {
    const buffer = await crypto.randomBytes(48);
    const resetToken = buffer.toString('hex');
    const resetPasswordToken = resetToken;

    const user = new User({
      email,
      firstName,
      lastName,
      resetPasswordToken,
      merchant,
      role: role.ROLES.Merchant
    });
    
    return await user.save();
  }
};

module.exports = router;
