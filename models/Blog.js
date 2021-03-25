const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blog = new Schema(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    countryName: {
      type: Array,
      required: true,
    },
    cityName: {
      type: Array,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    imageSrc: {
      type: String,
      required: true,
    },

    keywords: {
      type: Array,
    },
    subHeading1: {
      type: String,
    },
    content1: {
      type: String,
      maxlength: 100000,
    },
    imageSrc1: {
      type: String,
      require: true,
    },
    subHeading2: {
      type: String,
    },
    content2: {
      type: String,
      maxlength: 100000,
    },
    imageSrc2: {
      type: String,
      require: true,
    },
    subHeading3: {
      type: String,
    },
    content3: {
      type: String,
      maxlength: 100000,
    },
    imageSrc3: {
      type: String,
      require: true,
    },
    subHeading4: {
      type: String,
    },
    content4: {
      type: String,
      maxlength: 100000,
    },
    imageSrc4: {
      type: String,
      require: true,
    },
    subHeading5: {
      type: String,
    },
    content5: {
      type: String,
      maxlength: 100000,
    },
    imageSrc5: {
      type: String,
      require: true,
    },
    subHeading6: {
      type: String,
    },
    content6: {
      type: String,
      maxlength: 100000,
    },
    imageSrc6: {
      type: String,
      require: true,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("Blog", Blog);
