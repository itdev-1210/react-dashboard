function loadHeader() {
  var headerHTML = `<div class="brand mr-md">
  <a href="#">Egret React</a>
  <small>v1.0.0</small>
</div>
<button type="button" class="sidebar-toggle btn rounded-circle btn-raised btn-raised-default btn-icon" aria-label="Close">
  <i class="ti-menu"></i>
  <i class="ti-close"></i>
</button>
<span class="flex-grow-1"></span>
<a href="http://egret-react.ui-lib.com/" class="btn btn-link btn-link-secondary mr-md d-none d-sm-block">Live Preview</a>
<a href="https://ui-lib.com/github-access/" class="btn btn-link btn-link-secondary mr-md d-none d-sm-block">Request GitHub Access</a>

<a href="https://themeforest.net/item/egret-react-redux-material-design-admin-dashboard-template/24673283" class="btn btn-raised btn-raised-success">Buy</a>`;

  $(".doc-header").html(headerHTML);

  // Collapsible sidebar
  $(".sidebar-toggle").on("click", function() {
    $(".wrapper").toggleClass("sidebar-open");
  });
}
