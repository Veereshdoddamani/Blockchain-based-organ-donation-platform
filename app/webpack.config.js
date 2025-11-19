const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([
      // HTML files
      { from: "./src/index.html", to: "index.html" },
      { from: "./src/html/starting.html", to: "starting.html" },
      { from: "./src/html/mainregister.html", to: "mainregister.html" },
      { from: "./src/html/mainlogin.html", to: "mainlogin.html" },
      { from: "./src/html/donar-recipient.html", to: "donar-recipient.html" },
      { from: "./src/html/forgotpass.html", to: "forgotpass.html" },
      { from: "./src/html/about-us.html", to: "about-us.html" },
      { from: "./src/html/contact.html", to: "contact.html" },
      { from: "./src/html/awareness.html", to: "awareness.html" },
      { from: "./src/html/donor-registration.html", to: "donor-registration.html" },
      { from: "./src/html/donor-pledge.html", to: "donor-pledge.html" },
      { from: "./src/html/patient-registration.html", to: "patient-registration.html" },
      { from: "./src/html/verify-pledges.html", to: "verify-pledges.html" },
      { from: "./src/html/view-donors.html", to: "view-donors.html" },
      { from: "./src/html/view-pledges.html", to: "view-pledges.html" },
      { from: "./src/html/view-patients.html", to: "view-patients.html" },
      { from: "./src/html/transplant-matching.html", to: "transplant-matching.html" },
      // Copy whole folders (CSS, images)
      { from: "./src/css", to: "css" },
      { from: "./src/images/abhijith.jpg", to: "abhijith.jpg" },
      { from: "./src/images/Tarun.jpg", to: "Tarun.jpg" },
      { from: "./src/images/shashank.jpg", to: "shashank.jpg" },
      { from: "./src/images/Veeresh.jpg", to: "Veeresh.jpg" },
      { from: "./src/images/save life.png", to: "save life.png"},
      { from: "./src/images/our_system.jpg", to: "our_system.jpg"}
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    openPage:"starting.html",
    open: true,
    hot: true,
  },
};
