Package.describe({
  name: "madhan5000:ckeditor",
  summary: " CKEditor loaded via CDN & JQuery Adapter",
  version: "4.5.2_3",
  git: "https://github.com/madhan5000/meteor-ckeditor.git"
});

Package.onUse(function (api){
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles('load.js', 'web.browser');
});
