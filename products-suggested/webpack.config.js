const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const ProductSuggestedModuleFederationConfigPlugin = withModuleFederationPlugin(
  {
    name: "products-suggested",

    exposes: {
      "./ProductsSuggestedModule":
        "./src/app/products-suggested/products-suggested.module.ts",
    },

    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      }),
    },
  }
);

ProductSuggestedModuleFederationConfigPlugin.output.publicPath =
  "http://localhost:4202/";
module.exports = ProductSuggestedModuleFederationConfigPlugin;
