"use strict";

function loadHeader() {
  var headerHTML = "<div class=\"brand mr-md\">\n  <a href=\"#\">Egret React</a>\n  <small>v1.0.0</small>\n</div>\n<button type=\"button\" class=\"sidebar-toggle btn rounded-circle btn-raised btn-raised-default btn-icon\" aria-label=\"Close\">\n  <i class=\"ti-menu\"></i>\n  <i class=\"ti-close\"></i>\n</button>\n<span class=\"flex-grow-1\"></span>\n<a href=\"http://egret-react.ui-lib.com/\" class=\"btn btn-link btn-link-secondary mr-md d-none d-sm-block\">Live Preview</a>\n<a href=\"https://ui-lib.com/github-access/\" class=\"btn btn-link btn-link-secondary mr-md d-none d-sm-block\">Request GitHub Access</a>\n\n<a href=\"https://themeforest.net/item/egret-react-redux-material-design-admin-dashboard-template/24673283\" class=\"btn btn-raised btn-raised-success\">Buy</a>";

  $(".doc-header").html(headerHTML);

  // Collapsible sidebar
  $(".sidebar-toggle").on("click", function () {
    $(".wrapper").toggleClass("sidebar-open");
  });
}