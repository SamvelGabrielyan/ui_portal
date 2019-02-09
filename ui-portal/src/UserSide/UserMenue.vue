<template>
	<div>
		<div class="preloader">
		    <div class="lds-ripple">
		        <div class="lds-pos"></div>
		        <div class="lds-pos"></div>
		    </div>
		</div>
		<!-- ============================================================== -->
		<!-- Main wrapper - style you can find in pages.scss -->
		<!-- ============================================================== -->
		<div id="main-wrapper">
		    <!-- ============================================================== -->
		    <!-- Topbar header - style you can find in pages.scss -->
		    <!-- ============================================================== -->
		    <header class="topbar">
		        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
		            <div class="navbar-header">
		                <!-- This is for the sidebar toggle which is visible on mobile only -->
		                <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
		                <!-- ============================================================== -->
		                <!-- Logo -->
		                <!-- ============================================================== -->
		                <!--<a class="navbar-brand" href="/user" style="height: 64px;">-->
		                    <!-- Logo icon -->
		                    <b class="logo-icon" style="vertical-align: center;">
		                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
		                        <!-- Dark Logo icon -->
								<a href="/user"><img src="../../public/assets/admin/assets/images/logo1.png" style="width: 200px;height: 65px" alt="homepage" class="dark-logo" /></a>
		                        <!-- Light Logo icon -->
		                        <!--<img src="../../public/assets/admin/assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />-->
		                    </b>
		                    <!--End Logo icon -->
		                    <!-- Logo text -->
		                    <!--<span class="logo-text">-->
		                         <!--&lt;!&ndash; dark Logo text &ndash;&gt;-->
		                         <!--<img src="../../public/assets/admin/assets/images/logo-text.png" alt="homepage" class="dark-logo" />-->
		                         <!--&lt;!&ndash; Light Logo text &ndash;&gt;-->
		                         <!--<img src="../../public/assets/admin/assets/images/logo-light-text.png" class="light-logo" alt="homepage" />-->
		                    <!--</span>-->
		                <!--</a>-->
		                <!-- ============================================================== -->
		                <!-- End Logo -->
		                <!-- ============================================================== -->
		                <!-- ============================================================== -->
		                <!-- Toggle which is visible on mobile only -->
		                <!-- ============================================================== -->
		                <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
		            </div>
		            <!-- ============================================================== -->
		            <!-- End Logo -->
		            <!-- ============================================================== -->
		            <div class="navbar-collapse collapse" id="navbarSupportedContent">
		                <!-- ============================================================== -->
		                <!-- toggle and nav items -->
		                <!-- ============================================================== -->
		                <ul class="navbar-nav float-left mr-auto">
		                    <li class="nav-item d-none d-md-block"><a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i class="mdi mdi-menu font-24"></i></a></li>
		                    
		                    <!-- ============================================================== -->
		                    <!-- Search -->
		                    <!-- ============================================================== -->
		                    <li class="nav-item search-box"> <a class="nav-link waves-effect waves-dark" href="javascript:void(0)"><i class="ti-search" style="line-height: 64px;"></i></a>
		                        <form class="app-search position-absolute">
		                            <input type="text" class="form-control" placeholder="Search &amp; enter"> <a class="srh-btn"><i class="ti-close"></i></a>
		                        </form>
		                    </li>
		                </ul>
		                <!-- ============================================================== -->
		                <!-- Right side toggle and nav items -->
		                <!-- ============================================================== -->
		                <ul class="navbar-nav float-right">		                  
		                    <!-- ============================================================== -->
		                    <!-- Comment -->
		                    <!-- ============================================================== -->

							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle waves-effect waves-dark" @click="comp_name = 'user-add-credit'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<strong>Add Credit</strong>
								</a>
							</li>

							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle waves-effect waves-dark" @click="comp_name = 'user-credit'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<strong>Credit Remains</strong>
								</a>
							</li>

		                    <li class="nav-item dropdown">
		                        <a class="nav-link dropdown-toggle waves-effect waves-dark" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell font-24"></i>
		                            
		                        </a>
		                        <div class="dropdown-menu dropdown-menu-ri<!-- End Modal  -->ght mailbox animated bounceInDown w-25">
		                            <span class="with-arrow"><span class="bg-primary"></span></span>
		                            <ul class="list-style-none">
		                                <li>
		                                    <div class="drop-title bg-primary text-white">
		                                        <h4 class="m-b-0 m-t-5">{{total_not}} New</h4>
		                                        <span class="font-light">Notifications</span>
		                                    </div>
		                                </li>
		                                <li>
		                                    <div class="message-center notifications">
		                                        <!-- Message -->
		                                        <a href="javascript:void(0)" v-for="item in notifications" @click="item_not=item" data-toggle="modal" data-target="#NotConf" class="message-item">
		                                            <span class="btn btn-danger btn-circle"><i class="fa fa-link"></i></span>
		                                            <div class="mail-contnet">
		                                                <h5 class="message-title">{{ item.subject }}</h5> <span class="mail-desc">{{ item.content }}</span> <span class="time">{{item.sent_on}}</span> </div>
		                                        </a>
		                                    </div>
		                                </li>
		                                <li>
		                                    <a class="nav-link text-center m-b-5" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
		                                </li>
		                            </ul>
		                        </div>
		                    </li>
		                    <!-- ============================================================== -->
		                    <!-- End Comment -->
		                    <!-- ============================================================== -->
		                    <!-- ============================================================== -->
		                    <!-- User profile and search -->
		                    <!-- ============================================================== -->
		                    <li class="nav-item dropdown">
		                        <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../public/assets/admin/assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31" style="margin-top: 15px;"></a>
		                        <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
		                            <span class="with-arrow"><span class="bg-primary"></span></span>
		                            <div class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
		                                <div class=""><img src="../../public/assets/admin/assets/images/users/1.jpg" alt="user" class="img-circle" width="60"></div>
		                                <div class="ml-3 mt-2">
		                                    <!--<h4 class="m-b-0">Steave Jobs</h4>-->
		                                    <p class=" m-b-0">{{ user_email }}</p>
		                                </div>
		                            </div>
		                            
		                            <div class="dropdown-divider"></div>
		                            <a class="dropdown-item" href="javascript:void(0)" @click="LogOut()"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
		                            
		                        </div>
		                    </li>
		                    <!-- ============================================================== -->
		                    <!-- User profile and search -->
		                    <!-- ============================================================== -->
		                </ul>
		            </div>
		        </nav>
		    </header>


			<user-notification :item_not = item_not></user-notification>


		    <!-- ============================================================== -->
		    <!-- End Topbar header -->
		    <!-- ============================================================== -->
		    <!-- ============================================================== -->
		    <!-- Left Sidebar - style you can find in sidebar.scss  -->
		    <!-- ============================================================== -->
		    <aside class="left-sidebar">
		        <!-- Sidebar scroll-->
		        <div class="scroll-sidebar">
		            <!-- Sidebar navigation-->
		            <nav class="sidebar-nav">
		                <ul id="sidebarnav">
		                    <!-- User Profile-->
		                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" href="/user" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard </span></a>
		                    </li>

		                    <li class="sidebar-item"> <a class="sidebar-link two-column waves-effect waves-dark" @click = "ChangeComponent('messages')"><i class="mdi mdi-message"></i><span class="hide-menu">Messages</span></a>
		                    </li>

		                    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-collage"></i><span class="hide-menu">Buy</span></a>
		                        <ul aria-expanded="false" class="collapse first-level">

		                            <li class="sidebar-item"> 
		                            	<a class="sidebar-link waves-effect waves-dark" href="javascript:void(0)" @click = "ChangeComponent('buy')">
		                            		<i class="mdi mdi-collage"></i>
		                            		<span class="hide-menu">One Time Usage DID</span>
		                            	</a>
		                            </li>

		                            <li class="sidebar-item"> 
		                            	<a class="sidebar-link waves-effect waves-dark" href="javascript:void(0)" @click ="ChangeComponent('buy1')">
		                            		<i class="mdi mdi-receipt"></i>
		                            		<span class="hide-menu">Annual Usage DID</span>
		                            	</a>  
		                            </li>

		                            <li class="sidebar-item"> 
		                            	<a class="sidebar-link waves-effect waves-dark" href="javascript:void(0)" @click ="ChangeComponent('buy2')"> 
		                            		<i class="mdi mdi-code-equal"></i>
		                            		<span class="hide-menu">Monthly Usage DID</span>
		                            	</a>
		                            </li>

		                        </ul>
		                    </li>

		                    <li class="sidebar-item mega-dropdown"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('mynumbers')" aria-expanded="false"><i class="mdi mdi-widgets"></i><span class="hide-menu">My numbers</span></a>
		                    </li>

		                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('orderhistory')" aria-expanded="false"><i class="mdi mdi-collage"></i><span class="hide-menu">Order</span></a>    
		                    </li>
		                    
		                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('paymenthistory')" aria-expanded="false"><i class="mdi mdi-border-none"></i><span class="hide-menu">Payment History</span></a>
		                    </li>
							<li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('paypeyreceived')" aria-expanded="false"><i class="mdi mdi-border-none"></i><span class="hide-menu">Pay Pey Received</span></a>
							</li>
							<li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('apppricing')" aria-expanded="false"><i class="mdi mdi-border-none"></i><span class="hide-menu">APP Pricing</span></a>
							</li>
		                </ul>
		            </nav>
		            <!-- End Sidebar navigation -->
		        </div>
		        <!-- End Sidebar scroll-->
		    </aside>
		    <!-- ============================================================== -->
		    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
		    <!-- ============================================================== -->
		    <!-- ============================================================== -->
		    <!-- Page wrapper  -->
		    <!-- ============================================================== -->
		    <div class="page-wrapper" style="display: block;">

		    	<div class="page-breadcrumb">
		    	    <div class="row">
		    	        <div class="col-5 align-self-center">
		    	            <h4 class="page-title" v-if = "comp_name == 'dashboard'">Dashboard</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'messages'">Massages</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'buy' || comp_name == 'buy1' || comp_name == 'buy2'">Buy</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'mynumbers'">My Numbers</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'orderhistory'">Order</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'paymenthistory'">Payment History</h4>
							<h4 class="page-title" v-if = "comp_name == 'paypeyreceived'">Pay Pey Received</h4>
							<h4 class="page-title" v-if = "comp_name == 'apppricing'">APP Pricing</h4>
		    	            <div class="d-flex align-items-center">
		    	                <nav aria-label="breadcrumb">
		    	                    <ol class="breadcrumb">
		    	                        <!--<li class="breadcrumb-item"><a href="index.html#">Home</a></li>-->
		    	                        <!--<li class="breadcrumb-item active" aria-current="page">Library</li>-->
		    	                    </ol>
		    	                </nav>
		    	            </div>
		    	        </div>
		    	    </div>
		    	</div>
		        <!-- ============================================================== -->
		        <!-- Container fluid  -->
		        <!-- ============================================================== -->
		        <div class="container-fluid">
		        	<one v-show = "comp_name == 'buy'"></one>
		        	<annual v-if = "comp_name == 'buy1'"></annual>
		        	<monthly v-if = "comp_name == 'buy2'"></monthly>
		            <user-dashboard v-if= "comp_name == 'dashboard'"></user-dashboard>
		            <user-messages v-if = "comp_name == 'messages'"></user-messages>
		            <user-my-numbers v-if = "comp_name == 'mynumbers'"></user-my-numbers>
		            <user-order-history v-if = "comp_name == 'orderhistory'"></user-order-history>
		            <user-payment-history v-if = "comp_name == 'paymenthistory'"></user-payment-history>
					<user-paypey-history v-if = "comp_name == 'paypeyreceived'"></user-paypey-history>
					<user-apppricing-history v-if = "comp_name == 'apppricing'"></user-apppricing-history>
					<user-credit v-if="comp_name == 'user-credit' "></user-credit>
					<user-add-credit v-if="comp_name == 'user-add-credit' "></user-add-credit>

				</div>
		        <!-- ============================================================== -->
		        <!-- End Container fluid  -->
		        <!-- ============================================================== -->
		    </div>
		    <!-- ============================================================== -->
		    <!-- End Page wrapper  -->
		    <!-- ============================================================== -->
		</div>
		<!-- ============================================================== -->
		<!-- End Wrapper -->
		<!-- ============================================================== -->
		<!-- ============================================================== -->
		<!-- customizer Panel -->
		<!-- ============================================================== -->
		
		<div class="chat-windows"></div>
	</div>
</template>
<script>
	import axios from 'axios'
	import VueCookies from 'vue-cookies'
	import router from '../router.js'

	import One                  from './One.vue'
	import Annual               from './Annual.vue'
	import Monthly              from './Monthly.vue'
	import UserDashboard  		from './UserDashboard.vue'
	import UserMenue      		from './UserMenue.vue'
	import UserMessages   		from './UserMessages.vue'
	import UserMyNumbers  		from './UserMyNumbers.vue'
	import UserOrderHistory    	from './UserOrderHistory.vue'
	import UserPaymentHistory  	from './UserPaymentHistory.vue'
    import UserPayperHistory  	from './UserPaypeyHistory.vue'
    import UserApppricingHistory  	from './UserApppricingHistory.vue'
    import UserNotification     from './UserNotification.vue'
	import UserCredit 			from './UserCredit'
	import UserAddCredit 		from './UserAddCredit.vue'

    export default {
    	data:function (){
    		return{
    			comp_name:'dashboard',
    			user_email:VueCookies.get('useremail'),
    			token:VueCookies.get('token'),
    			notifications:[],
    			total_not:'',
                item_not:''
    		}
    	},
        components:{
    	    'one'                   : One,
    	    'annual'                : Annual,
    	    'monthly'               : Monthly,
        	'user-dashboard'        : UserDashboard,
        	'user-messages'         : UserMessages,
        	'user-my-numbers' 		: UserMyNumbers,
        	'user-order-history'    : UserOrderHistory,
        	'user-payment-history'  : UserPaymentHistory,
            'user-paypey-history'   : UserPayperHistory,
            'user-apppricing-history'  : UserApppricingHistory,
            'user-notification'     : UserNotification,
			'user-credit'			: UserCredit,
			'user-add-credit'		: UserAddCredit
        },
        methods:{
        	ChangeComponent:function(comp_name){
        		this.comp_name = comp_name
        	},
        	GetNotifications:function(){
        		axios.get("http://88.198.106.121/api_gsim/v1/notification/list",{
        			headers:{
        				'X-Auth-Token':this.token
        			}
        		}).then((res)=>{
        			this.notifications = res.data.payload.items
        			this.total_not= res.data.payload.total
        		})
        	},
        	LogOut:function(){
        		VueCookies.remove('token');
        		VueCookies.remove('useremail');
        		router.push({ name: 'home' })
				location.reload();
        	}
        },
        created(){
        	this.GetNotifications()
        }
    }
</script>
<style>

</style>