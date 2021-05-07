const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose")

// Bring in Models & Helpers
const Product = require("../../models/product");
const Brand = require("../../models/brand");
const Category = require("../../models/category");
const auth = require("../../middleware/auth");
const role = require("../../middleware/role");

/*
post /add
get /list
get /
get /:id
get /item/:slug
get /list/category/:slug
get /list/brand/:slug
get /list/select
put /:id
put /:id/active
delete /delete/:id
  
*/

// Configure file upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.png`);
  },
});

var upload = multer({ storage: storage }).any();

router.post(
  "/add",
  auth,
  role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),
  upload,
  (req, res) => {
    try {
      const name = req.body.name;
      const description = req.body.description;
      const quantity = req.body.quantity;
      const price = req.body.price;
      const isActive = req.body.isActive;
      // This should be brand Id
      // const brand = req.body.brand != 0 ? req.body.brand : null; 
      if (!req.files || !req.files[0].filename) {
        return res.status(400).json({ error: "You must add an image." });
      }

      const image = `/uploads/${req.files[0].filename}`;

      if (!description || !name) {
        return res
          .status(400)
          .json({ error: "You must enter description & name." });
      }

      if (!quantity) {
        return res.status(400).json({ error: "You must enter a quantity." });
      }

      if (!price) {
        return res.status(400).json({ error: "You must enter a price." });
      }


      let imageUrl = image;
      let imageKey = "";

      const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        description: description,
        quantity: quantity,
        price: price,
        isActive: isActive,
        // brand: brand,
        imageUrl: imageUrl,
        imageKey: imageKey,
      });

      product.save((err, newProduct) => {
        if(err) {
          console.log('error here', err)
          res.status(400).json({error: "Error adding product"})
        }
        res.status(200).json({
          success: true,
          message: `Product has been successfully added!`,
          data: newProduct,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: "Your request could not be processed. Please try again. Or maybe you don't fill all the form?",
      });
    }
  }
);

// fetch store products api
router.get("/list", async (req, res) => {
  try {
    const products = await Product.find({ isActive: true }).populate(
      "brand",
      "name"
    );
    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// fetch products api
router.get(
  "/",
  auth,
  role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),
  async (req, res) => {
    try {
      let products = [];

      if (req.user.merchant) {
        const brands = await Brand.find({
          merchant: req.user.merchant,
        }).populate("merchant", "_id");

        const brandId = brands[0]["_id"];

        products = await Product.find({})
          .populate({
            path: "brand",
            populate: {
              path: "merchant",
              model: "Merchant",
            },
          })
          .where("brand", brandId);
      } else {
        products = await Product.find({}).populate({
          path: "brand",
          populate: {
            path: "merchant",
            model: "Merchant",
          },
        });
      }

      res.status(200).json({
        products,
      });
    } catch (error) {
      res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
);

// fetch product api
router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const productDoc = await Product.findOne({ _id: productId }).populate(
      "brand"
    );

    if (!productDoc) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    res.status(200).json({
      product: productDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// fetch product slug api
router.get("/item/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const productDoc = await Product.findOne({ slug, isActive: true }).populate(
      "brand"
    );

    if (!productDoc) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    res.status(200).json({
      product: productDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// fetch all products by category api
router.get("/list/category/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const categoryDoc = await Category.findOne(
      { slug, isActive: true },
      "products -_id"
    ).populate("products");

    if (!categoryDoc) {
      return res.status(404).json({
        message: "No products found.",
      });
    }

    res.status(200).json({
      products: categoryDoc ? categoryDoc.products : categoryDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// fetch all products by brand api
router.get("/list/brand/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const brand = await Brand.find({ slug, isActive: true });

    if (brand.length <= 0) {
      return res.status(404).json({
        message: `Cannot find brand with the slug: ${slug}.`,
      });
    }

    const products = await Product.find({ brand: brand[0]._id }).populate(
      "brand",
      "name"
    );

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.get("/list/select", auth, async (req, res) => {
  try {
    const products = await Product.find({}, "name");

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.put(
  "/:id",
  auth,
  role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),
  async (req, res) => {
    try {
      const productId = req.params.id;
      const update = req.body.product;
      const query = { _id: productId };

      await Product.findOneAndUpdate(query, update, {
        new: true,
      });

      res.status(200).json({
        success: true,
        message: "Product has been updated successfully!",
      });
    } catch (error) {
      res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
);

router.put(
  "/:id/active",
  auth,
  role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),
  async (req, res) => {
    try {
      const productId = req.params.id;
      const update = req.body.product;
      const query = { _id: productId };

      await Product.findOneAndUpdate(query, update, {
        new: true,
      });

      res.status(200).json({
        success: true,
        message: "Product has been updated successfully!",
      });
    } catch (error) {
      res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
);

router.delete(
  "/delete/:id",
  auth,
  role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),
  async (req, res) => {
    try {
      const product = await Product.deleteOne({ _id: req.params.id });

      res.status(200).json({
        success: true,
        message: `Product has been deleted successfully!`,
        product,
      });
    } catch (error) {
      res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
);

module.exports = router;
