var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');  // optional
script.setAttribute('src', '//cdn.ckeditor.com/4.5.2/standard/ckeditor.js');
document.getElementsByTagName('head')[0].appendChild(script);

var adapter = document.createElement('script');
adapter.setAttribute('type', 'text/javascript');  // optional
adapter.setAttribute('src', '//cdn-source.ckeditor.com/4.5.2/standard/adapters/jquery.js');
document.getElementsByTagName('head')[0].appendChild(adapter);
