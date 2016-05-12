System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "Eonasdan/bootstrap-datetimepicker": "github:Eonasdan/bootstrap-datetimepicker@4.17.37",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.4",
    "jquery": "npm:jquery@2.2.3",
    "moment": "npm:moment@2.13.0",
    "npm:aurelia-polyfills@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    }
  }
});
