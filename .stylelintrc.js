module.exports = {
  extends: ["stylelint-config-standard",
            "stylelint-config-rational-order",
            "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "selector-class-pattern": null,
    "property-no-vendor-prefix": true,
    "declaration-block-no-duplicate-properties": true,
    "string-quotes": "double",
    "value-no-vendor-prefix": true,
    "declaration-empty-line-before": null,
    "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": true,
      "empty-line-between-groups": true,
    }]
  }
};