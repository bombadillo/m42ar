// Generated by CoffeeScript 1.9.0
(function() {
  var content, sidebar;

  sidebar = document.getElementById('sidebar');

  content = document.getElementById('content');

  sidebar.style.display = 'none';

  content.style.marginRight = '0px';

  window.dispatchEvent(new Event('resize'));

}).call(this);
