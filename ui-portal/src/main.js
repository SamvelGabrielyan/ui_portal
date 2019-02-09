import Vue from 'vue'
import App from './App.vue'
import User from './UserSide/User'
import Admin from './AdminSide/Admin'
import router from './router'
import router_user from './router_user'
import router_admin from './router_admin'

Vue.config.productionTip = false

if (window.location.href.split('/').pop().match(/^.*admin.*$/)) {
	new Vue({
			router:router_admin,
		 	mode: 'history',
		  	render: function (h) {
		  	  $('head').html(
		  	  	'<title>Admin</title>' +
		  	  	'<meta charset="UTF-8">' +
		  	  	'<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		  	  	'<meta name="viewport" content="width=device-width, initial-scale=1">'+
		  	  	'<meta name="description" content="">'+
		  	  	'<meta name="author" content="">'+
		  	  	'<link rel="icon" type="image/png" sizes="16x16" href="assets/admin/images/logo-new.ico">'+
		  	  	// '<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">'+
		  	  	'<link href="assets/admin/assets/libs/chartist/dist/chartist.min.css" rel="stylesheet">'+
		  	  	'<link href="assets/admin/assets/extra-libs/c3/c3.min.css" rel="stylesheet">'+
		  	  	'<link rel="stylesheet" href="css/admin/style.min.css">'+
		  	  	'<link rel="stylesheet" type="text/css" href="./assets/admin/assets/extra-libs/css-chart/css-chart.css">'+
		  	  	'<script src="assets/admin/assets/libs/jquery/dist/jquery.min.js"></script>'+
		  	  	'<script src="assets/admin/assets/libs/jquery/dist/jquery.cookie.js" type="text/javascript"></script>'+
		  	  	'<script src="assets/admin/assets/libs/popper.js/dist/umd/popper.min.js"></script>'+
    			'<script src="assets/admin/assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>'+
    			'<script src="assets/admin/dist/js/app.min.js"></script>'+
    			'<script src="assets/admin/dist/js/app.init.horizontal-fullwidth.js"></script>'+
    			// '<script src="assets/admin/dist/js/app-style-switcher.horizontal.js"></script>'+
    			'<script src="assets/admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>'+
    			'<script src="assets/admin/assets/extra-libs/sparkline/sparkline.js"></script>'+
    			'<script src="assets/admin/dist/js/waves.js"></script>'+
    			'<script src="assets/admin/dist/js/sidebarmenu.js"></script>'+
    			'<script src="assets/admin/dist/js/custom.min.js"></script>'+
    			'<script src="assets/admin/assets/libs/chartist/dist/chartist.min.js"></script>'+
    			'<script src="assets/admin/assets/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js"></script>'+
    			'<script src="assets/admin/assets/extra-libs/c3/d3.min.js"></script>'+
    			'<script src="assets/admin/assets/extra-libs/c3/c3.min.js"></script>'+
    			'<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js"></script>'+
    			'<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>'
		  	  );
			  return h(Admin)
			}
		}).$mount('#app')	
}

else if (window.location.href.split('/').pop().match(/^.*user.*$/)) {
	new Vue({
			router:router_user,
		 	mode: 'history',
		  	render: function (h) {
		  	  $('head').html(
		  	  	'<title>User</title>' +
		  	  	'<meta charset="UTF-8">' +
		  	  	'<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		  	  	'<meta name="viewport" content="width=device-width, initial-scale=1">'+
		  	  	'<meta name="description" content="">'+
		  	  	'<meta name="author" content="">'+
		  	  	'<link rel="icon" type="image/png" sizes="16x16" href="assets/admin/images/logo-new.ico">'+
		  	  	'<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">'+
		  	  	'<link href="assets/admin/assets/libs/chartist/dist/chartist.min.css" rel="stylesheet">'+
		  	  	'<link href="assets/admin/assets/extra-libs/c3/c3.min.css" rel="stylesheet">'+
		  	  	'<link rel="stylesheet" href="css/admin/style.min.css">'+
		  	  	'<link rel="stylesheet" type="text/css" href="./assets/admin/assets/extra-libs/css-chart/css-chart.css">'+
		  	  	'<script src="assets/admin/assets/libs/jquery/dist/jquery.min.js"></script>'+
		  	  	'<script src="assets/admin/assets/libs/jquery/dist/jquery.cookie.js" type="text/javascript"></script>'+
		  	  	'<script src="assets/admin/assets/libs/popper.js/dist/umd/popper.min.js"></script>'+
    			'<script src="assets/admin/assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>'+
    			'<script src="assets/admin/dist/js/app.min.js"></script>'+
    			'<script src="assets/admin/dist/js/app.init.horizontal-fullwidth.js"></script>'+
    			'<script src="assets/admin/dist/js/app-style-switcher.horizontal.js"></script>'+
    			'<script src="assets/admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>'+
    			'<script src="assets/admin/assets/extra-libs/sparkline/sparkline.js"></script>'+
    			'<script src="assets/admin/dist/js/waves.js"></script>'+
    			'<script src="assets/admin/dist/js/sidebarmenu.js"></script>'+
    			'<script src="assets/admin/dist/js/custom.min.js"></script>'+
    			'<script src="assets/admin/assets/libs/chartist/dist/chartist.min.js"></script>'+
    			'<script src="assets/admin/assets/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js"></script>'+
    			'<script src="assets/admin/assets/extra-libs/c3/d3.min.js"></script>'+
    			'<script src="assets/admin/assets/extra-libs/c3/c3.min.js"></script>'+
    			'<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js"></script>'+
    			'<script src="assets/admin/dist/js/pages/dashboards/dashboard1.js"></script>'+
    			'<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>'
		  	  );
			  return h(User)
			}
		}).$mount('#app')	
}

else{
	new Vue({
			router,
		  	mode: 'history',
		  	render: h => h(App)
		}).$mount('#app')
}
 