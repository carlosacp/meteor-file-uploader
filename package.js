Package.describe({
  name: 'carlosacp:file-uploader',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple and unobtrusive file uploader that does not use DDP',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteorhacks:picker', 'pfafman:multer'],'server', {weak: false, unordered: false});
  api.use(['reactive-var'],'client', {weak: false, unordered: false});
  api.addFiles('file-uploader.js');
  api.export(['Picker', 'multer', 'ReactiveVar']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('carlosacp:file-uploader');
  api.addFiles('file-uploader-tests.js');
});
