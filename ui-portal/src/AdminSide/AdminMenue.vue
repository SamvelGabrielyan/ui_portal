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
		                <!--<a class="navbar-brand" href="/admin" style="height: 64px;">-->
		                    <!-- Logo icon -->
		                    <b class="logo-icon" style="vertical-align: center;">
		                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
		                        <!-- Dark Logo icon -->
								<a href="/admin"><img src="../../public/assets/admin/assets/images/logo1.png" style="width: 200px;height: 65px" alt="homepage" class="dark-logo" /></a>
		                        <!-- Light Logo icon -->
		                        <!--<img src="../../public/assets/admin/assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />-->
		                    </b>
		                    <!--End Logo icon -->
		                    <!-- Logo text -->
		                    <!--<span class="logo-text">-->
		                         <!--&lt;!&ndash; dark Logo text &ndash;&gt;-->
		                         <!--&lt;!&ndash;<img src="../../public/assets/admin/assets/images/logo-text.png" alt="homepage" class="dark-logo" />&ndash;&gt;-->
		                         <!--&lt;!&ndash; Light Logo text &ndash;&gt;-->
		                         <!--&lt;!&ndash;<img src="../../public/assets/admin/assets/images/logo-light-text.png" class="light-logo" alt="homepage" />&ndash;&gt;-->
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
		                    <!-- mega menu -->
		                    <!-- ============================================================== -->
		                    <!--<li class="nav-item dropdown mega-dropdown"><a class="nav-link dropdown-toggle waves-effect waves-dark" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
		                        <!--<span class="d-none d-md-block">Contact Us <i class="fa fa-angle-down"></i></span>-->
		                         <!--<span class="d-block d-md-none"><i class="mdi mdi-dialpad font-24"></i></span>-->
		                        <!--</a>-->
		                        <!--<div class="dropdown-menu animated bounceInDown">-->
		                            <!--<div class="mega-dropdown-menu row">-->


		                                <!-- <div class="col-lg-3 col-xlg-2 m-b-30">
		                                    <h4 class="m-b-20">CAROUSEL</h4>
		                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
		                                        <div class="carousel-inner" role="listbox">
		                                            <div class="carousel-item active">
		                                                <div class="container p-0"> <img class="d-block img-fluid" src="../../public/assets/admin/assets/images/big/img1.jpg" alt="First slide"></div>
		                                            </div>
		                                            <div class="carousel-item">
		                                                <div class="container p-0"><img class="d-block img-fluid" src="../../public/assets/admin/assets/images/big/img2.jpg" alt="Second slide"></div>
		                                            </div>
		                                            <div class="carousel-item">
		                                                <div class="container p-0"><img class="d-block img-fluid" src="../../public/assets/admin/assets/images/big/img3.jpg" alt="Third slide"></div>
		                                            </div>
		                                        </div>
		                                        <a class="carousel-control-prev" href="index.html#carouselExampleControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
		                                        <a class="carousel-control-next" href="index.html#carouselExampleControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
		                                    </div>
		                                </div> -->



		                                <!--<div class="col-lg-3 m-b-30">-->
		                                    <!--<h4 class="m-b-20">ACCORDION</h4>-->
		                                    <!--&lt;!&ndash; Accordian &ndash;&gt;-->
		                                    <!--<div id="accordion">-->
		                                        <!--<div class="card m-b-5">-->
		                                            <!--<div class="card-header" id="headingOne">-->
		                                                <!--<h5 class="mb-0">-->
		                                            <!--<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">-->
		                                              <!--Collapsible Group Item #1-->
		                                            <!--</button>-->
		                                          <!--</h5>-->
		                                            <!--</div>-->
		                                            <!--<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">-->
		                                                <!--<div class="card-body">-->
		                                                    <!--Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.-->
		                                                <!--</div>-->
		                                            <!--</div>-->
		                                        <!--</div>-->
		                                        <!--<div class="card m-b-5">-->
		                                            <!--<div class="card-header" id="headingTwo">-->
		                                                <!--<h5 class="mb-0">-->
		                                            <!--<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">-->
		                                              <!--Collapsible Group Item #2-->
		                                            <!--</button>-->
		                                          <!--</h5>-->
		                                            <!--</div>-->
		                                            <!--<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">-->
		                                                <!--<div class="card-body">-->
		                                                    <!--Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.-->
		                                                <!--</div>-->
		                                            <!--</div>-->
		                                        <!--</div>-->
		                                        <!--<div class="card m-b-5">-->
		                                            <!--<div class="card-header" id="headingThree">-->
		                                                <!--<h5 class="mb-0">-->
		                                            <!--<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">-->
		                                              <!--Collapsible Group Item #3-->
		                                            <!--</button>-->
		                                          <!--</h5>-->
		                                            <!--</div>-->
		                                            <!--<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">-->
		                                                <!--<div class="card-body">-->
		                                                    <!--Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.-->
		                                                <!--</div>-->
		                                            <!--</div>-->
		                                        <!--</div>-->
		                                    <!--</div>-->
		                                <!--</div>-->
		                                <!--<div class="col-lg-3  m-b-30">-->
		                                    <!--<h4 class="m-b-20">CONTACT US</h4>-->
		                                    <!--&lt;!&ndash; Contact &ndash;&gt;-->
		                                    <!--<form>-->
		                                        <!--<div class="form-group">-->
		                                            <!--<input type="text" class="form-control" id="exampleInputname1" placeholder="Enter Name"> </div>-->
		                                        <!--<div class="form-group">-->
		                                            <!--<input type="email" class="form-control" placeholder="Enter email"> </div>-->
		                                        <!--<div class="form-group">-->
		                                            <!--<textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>-->
		                                        <!--</div>-->
		                                        <!--<button type="submit" class="btn btn-info">Submit</button>-->
		                                    <!--</form>-->
		                                <!--</div>-->
		                                <!--<div class="col-lg-3 col-xlg-4 m-b-30">-->
		                                    <!--<h4 class="m-b-20">List style</h4>-->
		                                    <!--&lt;!&ndash; List style &ndash;&gt;-->
		                                    <!--<ul class="list-style-none">-->
		                                        <!--<li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> You can give link</a></li>-->
		                                        <!--<li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Give link</a></li>-->
		                                        <!--<li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another Give link</a></li>-->
		                                        <!--<li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Forth link</a></li>-->
		                                        <!--<li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another fifth link</a></li>-->
		                                    <!--</ul>-->
		                                <!--</div>-->
		                            <!--</div>-->
		                        <!--</div>-->
		                    <!--</li>-->
		                    <!-- ============================================================== -->
		                    <!-- End mega menu -->
		                    <!-- ============================================================== -->
		                    <!-- ============================================================== -->
		                    <!-- create new -->
		                    <!-- ============================================================== -->
		                    <li class="nav-item dropdown">
		                        <a class="nav-link dropdown-toggle" href="index.html#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                         <span class="d-none d-md-block">Create <i class="fa fa-angle-down"></i></span>
		                         <span class="d-block d-md-none"><i class="fa fa-plus" style="line-height: 64px;"></i></span>   
		                        </a>
		                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		                            <a class="dropdown-item"  data-toggle="modal" data-target="#ModalCreateUser" style="cursor: pointer;">Create User</a>
		                            <a class="dropdown-item"  data-toggle="modal" data-target="#ModalCreateNumber" style="cursor: pointer;">Create Number</a>
		                            <a class="dropdown-item"  data-toggle="modal" data-target="#ModalCreateApp" style="cursor: pointer;">Create App</a>
									<a class="dropdown-item"  data-toggle="modal" data-target="#ModalAutoGenerated" style="cursor: pointer;">Auto generated
									</a>
									<a class="dropdown-item"  data-toggle="modal" data-target="#ModalManualUpload" style="cursor: pointer;">Manual Upload
									</a>
		                        </div>
		                    </li>
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
		                    <!-- create new -->
		                    <!-- ============================================================== -->
		                    <!--<li class="nav-item dropdown">-->
		                        <!--<a class="nav-link dropdown-toggle" href="index.html#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
		                          <!--<i class="flag-icon flag-icon-us" style="line-height: 64px;"></i>-->
		                        <!--</a>-->
		                        <!--<div class="dropdown-menu dropdown-menu-right  animated bounceInDown" aria-labelledby="navbarDropdown2">-->
		                            <!--<a class="dropdown-item" href="index.html#"><i class="flag-icon flag-icon-us"></i> English</a>-->
		                            <!--<a class="dropdown-item" href="index.html#"><i class="flag-icon flag-icon-fr"></i> French</a>-->
		                            <!--<a class="dropdown-item" href="index.html#"><i class="flag-icon flag-icon-es"></i> Spanish</a>-->
		                            <!--<a class="dropdown-item" href="index.html#"><i class="flag-icon flag-icon-de"></i> German</a>-->
		                        <!--</div>-->
		                    <!--</li>-->
		                    <!-- ============================================================== -->
		                    <!-- Comment -->
		                    <!-- ============================================================== -->
		                    <li class="nav-item dropdown">
		                        <a class="nav-link dropdown-toggle waves-effect waves-dark" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell font-24"></i>
		                            
		                        </a>
		                        <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown w-25">
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
		                                                <h5 class="message-title">{{ item.subject }}</h5>
														<span class="mail-desc">{{ item.content }}</span>
														<span class="time">{{item.sent_on}}</span>
													</div>
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
		                    <!-- Messages -->
		                    <!-- ============================================================== -->
		                    <!--<li class="nav-item dropdown">-->
		                        <!--<a class="nav-link dropdown-toggle waves-effect waves-dark" href="index.html" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="font-24 mdi mdi-comment-processing"></i>-->
		                            <!---->
		                        <!--</a>-->
		                        <!--<div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown" aria-labelledby="2">-->
		                            <!--<span class="with-arrow"><span class="bg-danger"></span></span>-->
		                            <!--<ul class="list-style-none">-->
		                                <!--<li>-->
		                                    <!--<div class="drop-title text-white bg-danger">-->
		                                        <!--<h4 class="m-b-0 m-t-5">5 New</h4>-->
		                                        <!--<span class="font-light">Messages</span>-->
		                                    <!--</div>-->
		                                <!--</li>-->
		                                <!--<li>-->
		                                    <!--<div class="message-center message-body">-->
		                                        <!--&lt;!&ndash; Message &ndash;&gt;-->
		                                        <!--<a href="javascript:void(0)" class="message-item">-->
		                                            <!--<span class="user-img"> <img src="../../public/assets/admin/assets/images/users/1.jpg" alt="user" class="rounded-circle"> <span class="profile-status online pull-right"></span> </span>-->
		                                            <!--<div class="mail-contnet">-->
		                                                <!--<h5 class="message-title">Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span> </div>-->
		                                        <!--</a>-->
		                                        <!--&lt;!&ndash; Message &ndash;&gt;-->
		                                        <!--<a href="javascript:void(0)" class="message-item">-->
		                                            <!--<span class="user-img"> <img src="../../public/assets/admin/assets/images/users/2.jpg" alt="user" class="rounded-circle"> <span class="profile-status busy pull-right"></span> </span>-->
		                                            <!--<div class="mail-contnet">-->
		                                                <!--<h5 class="message-title">Sonu Nigam</h5> <span class="mail-desc">I've sung a song! See you at</span> <span class="time">9:10 AM</span> </div>-->
		                                        <!--</a>-->
		                                        <!--&lt;!&ndash; Message &ndash;&gt;-->
		                                        <!--<a href="javascript:void(0)" class="message-item">-->
		                                            <!--<span class="user-img"> <img src="../../public/assets/admin/assets/images/users/3.jpg" alt="user" class="rounded-circle"> <span class="profile-status away pull-right"></span> </span>-->
		                                            <!--<div class="mail-contnet">-->
		                                                <!--<h5 class="message-title">Arijit Sinh</h5> <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span> </div>-->
		                                        <!--</a>-->
		                                        <!--&lt;!&ndash; Message &ndash;&gt;-->
		                                        <!--<a href="javascript:void(0)" class="message-item">-->
		                                            <!--<span class="user-img"> <img src="../../public/assets/admin/assets/images/users/4.jpg" alt="user" class="rounded-circle"> <span class="profile-status offline pull-right"></span> </span>-->
		                                            <!--<div class="mail-contnet">-->
		                                                <!--<h5 class="message-title">Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>-->
		                                        <!--</a>-->
		                                    <!--</div>-->
		                                <!--</li>-->
		                                <!--<li>-->
		                                    <!--<a class="nav-link text-center link" href="javascript:void(0);"> <b>See all e-Mails</b> <i class="fa fa-angle-right"></i> </a>-->
		                                <!--</li>-->
		                            <!--</ul>-->
		                        <!--</div>-->
		                    <!--</li>-->
		                    <!-- ============================================================== -->
		                    <!-- End Messages -->
		                    <!-- ============================================================== -->
		                    <!-- ============================================================== -->
		                    <!-- User profile and search -->
		                    <!-- ============================================================== -->
		                    <li class="nav-item dropdown">
		                        <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../public/assets/admin/assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31" style="margin-top: 15px;"></a>
		                        <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
		                            <span class="with-arrow"><span class="bg-primary"></span></span>
		                            <div class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
		                                <!--<div class=""><img src="../../public/assets/admin/assets/images/users/1.jpg" alt="user" class="img-circle" width="60"></div>-->
		                                <div class="ml-3 mt-2">
		                                    <!--<h4 class="m-b-0">Steave Jobs</h4>-->
		                                    <p class=" m-b-0">{{ admin_email }}</p>
		                                </div>
		                            </div>
		                            <div class="dropdown-divider"></div>
									<a class="dropdown-item" href="javascript:void(0)" data-toggle="modal" data-target="#MailConf"><i class="fa fa-envelope m-r-5 m-l-5"></i> Mail Configuration</a>
		                            <a class="dropdown-item" href="javascript:void(0)" @click = "LogOut()"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
		                            
		                        </div>
		                    </li>
		                    <!-- ============================================================== -->
		                    <!-- User profile and search -->
		                    <!-- ============================================================== -->
		                </ul>
		            </div>
		        </nav>
		    </header>
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
		                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('orders')" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Orders </span></a>
		                    </li>

		                    <li class="sidebar-item"> <a class="sidebar-link two-column waves-effect waves-dark" @click = "ChangeComponent('payments')"><i class="mdi mdi-message"></i><span class="hide-menu">Payments</span></a>
		                    </li>

		                    <li class="sidebar-item mega-dropdown"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('numbers')" aria-expanded="false"><i class="mdi mdi-widgets"></i><span class="hide-menu">Numbers</span></a>
		                    </li>

		                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('import')" aria-expanded="false"><i class="mdi mdi-collage"></i><span class="hide-menu">Create Order</span></a>
		                    </li>

		                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('users')" aria-expanded="false"><i class="mdi mdi-human"></i><span class="hide-menu">Users</span></a>
		                    </li>

							<li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('import_number')" aria-expanded="false"><i class="mdi mdi-format-list-numbers"></i><span class="hide-menu">Import Number</span></a>
							</li>

							<li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark" @click = "ChangeComponent('app')" aria-expanded="false"><i class="mdi mdi-format-wrap-tight"></i><span class="hide-menu">APP Management</span></a>
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
		    	            <h4 class="page-title" v-if = "comp_name == 'orders'">Orders</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'payments'">Payments</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'numbers'">Numbers</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'import'">Import</h4>
		    	            <h4 class="page-title" v-if = "comp_name == 'users'">Users</h4>
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

		        	<!-- ============================================================== -->
		        	<!-- Modal  -->
		        	<!-- ============================================================== -->

		        	<div class="modal fade" id="ModalCreateUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		        	  <div class="modal-dialog" role="document">
		        	    <div class="modal-content">
		        	      <div class="modal-header">
		        	        <h5 class="modal-title" id="exampleModalLabel">Create User</h5>
		        	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        	          <span aria-hidden="true">&times;</span>
		        	        </button>
		        	      </div>
		        	      <div class="form-row pl-2 pr-2 mt-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label for="email">Email</label></b></h4>
		        	      	</div>
		        	      	<div class="col-md-8">
		        	      		<input v-model="UserEmail" class="form-control" type="Email" name="email" id="email">
		        	      	</div>
		        	      </div>
		        	      <div class="form-row pl-2 pr-2 mt-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label for="password">Password</label></b></h4>
		        	      	</div>
		        	      	<div class="col-md-8">
		        	      		<input v-model="UserPass" class="form-control" type="password" name="email" id="password">
		        	      	</div>
		        	      </div>
		        	      <div class="form-row pl-2 mt-2 mb-3">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label for="password">Type</label></b></h4>
		        	      	</div>
		        	      	<div class="col" @click="UserType = !UserType">
		        	      		<input type="checkbox" checked data-toggle="toggle" data-on="Admin" data-off="User" data-onstyle="info" data-offstyle="info" data-width="100"> 
		        	      	</div>
		        	      	<div class="col" @click="UserActive = !UserActive">
		        	      		<input type="checkbox" checked data-toggle="toggle" data-on="Active" data-off="Inactive" data-onstyle="info" data-offstyle="info" data-width="100"> 
		        	      	</div>
		        	      </div>
		        	      <div class="modal-footer">
		        	        <button type="button" class="btn btn-info" data-dismiss="modal" @click="CreateUser()">Submit</button>
		        	      </div>
		        	    </div>
		        	  </div>
		        	</div>

		        	<div class="modal fade" id="ModalCreateNumber" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		        	  <div class="modal-dialog" role="document">
		        	    <div class="modal-content">
		        	      <div class="modal-header">
		        	        <h5 class="modal-title" id="exampleModalLabelNumber">Create Number</h5>
		        	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        	          <span aria-hidden="true">&times;</span>
		        	        </button>
		        	      </div>
		        	      <div class="form-row pl-2 pr-2 mt-2 mb-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label for="email"> Start Number</label></b></h4>
		        	      	</div>
		        	      	<div class="col-md-8">
		        	      		<input v-model="NumberUuid" class="form-control" type="number" name="email">
		        	      	</div>
		        	      </div>
							<div class="form-row pl-2 pr-2 mt-2 mb-2">
								<div class="col-md-4">
									<h4><b><label for="email">End Number</label></b></h4>
								</div>
								<div class="col-md-8">
									<input v-model="NumberUuid1" class="form-control" type="number" name="email">
								</div>
							</div>
		        	      <div class="modal-footer">
		        	        <button type="button" class="btn btn-info" data-dismiss="modal" @click="CreateNumber()">Submit</button>
		        	      </div>
		        	    </div>
		        	  </div>
		        	</div>

		        	<div class="modal fade" id="ModalCreateApp" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		        	  <div class="modal-dialog" role="document">
		        	    <div class="modal-content" id="model-content-id">
		        	      <div class="modal-header">
		        	        <h5 class="modal-title" id="exampleModalLabelApp">Create App</h5>
		        	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        	          <span aria-hidden="true">&times;</span>
		        	        </button>
		        	      </div>

		        	      <div class="form-row pl-2 pr-2 mt-2 mb-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label>App Name</label></b></h4>
		        	      	</div>
		        	      	<div class="col-md-8">
		        	      		<input v-model="AppName" class="form-control" type="text">
		        	      	</div>
		        	      </div>
		        	      <div class="form-row pl-2 pr-2 mt-2 mb-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label>Price Old</label></b></h4>
		        	      	</div>
		        	      	<div class="col-md-8">
		        	      		<input v-model="AppPriceOld" class="form-control" min="0" type="number" step="any">
		        	      	</div>
		        	      </div>
		        	      <div class="form-row pl-2 pr-2 mt-2 mb-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label >Price New</label></b></h4>
		        	      	</div>
		        	      	<div class="col-md-8">
		        	      		<input v-model="AppPriceNew" class="form-control" min="0" type="number" step="any">
		        	      	</div>
		        	      </div>
		        	      <div class="form-row pl-2 pr-2 mt-2 mb-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label>Keywords</label></b></h4>
		        	      	</div>
	        	      		<div class="col-md-6" id="DivForKeywords">
	        	      			<input class="form-control" type="text" v-model="AppKeywords[0]">
	        	      		</div>
	        	      		<div class="col-md-2">
	        	      	  		<button class="btn btn-info" @click = "count++">+</button>
	        	      	  	</div>
		        	      </div>
		        	      	<admin-input v-for = "(count,index) in count"
		        	      				 v-model = "AppKeywords[index+1]"
		        	      				 @DelInp = 'DelInp(index)'
		        	      				 :id="'a_'+index"
		        	      				 :key = "index"
		        	      				 ></admin-input>
		        	      <div class="form-row pl-2 pr-2 mt-2 mb-2">
		        	      	<div class="col-md-4">
		        	      		<h4><b><label>Days</label></b></h4>
		        	      	</div>
		        	      	<div class="col-md-8">
		        	      		<input v-model="AppDays" class="form-control" type="text">
		        	      	</div>
		        	      </div>
		        	      
		        	      <div class="modal-footer">
		        	        <button type="button" class="btn btn-info" data-dismiss="modal" @click="CreateApp()">Submit</button>
		        	      </div>
		        	    </div>
		        	  </div>
		        	</div>


		        	<!-- ============================================================== -->
		        	<!-- End Modal  -->
		        	<!-- ============================================================== -->

		        	<admin-import v-show = "comp_name == 'import'"></admin-import>
		        	<admin-order v-show = "comp_name == 'orders'"></admin-order>
		        	<admin-payment v-if = "comp_name == 'payments'"></admin-payment>
		        	<admin-numbers v-if = "comp_name == 'numbers'"></admin-numbers>
		        	<admin-users v-show = "comp_name == 'users'"></admin-users>
					<admin-app v-show = "comp_name == 'app'"></admin-app>
					<admin-mail></admin-mail>
					<admin-notification :item_not = item_not></admin-notification>
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
		<aside class="customizer">
		    <a href="javascript:void(0)" class="service-panel-toggle"><i class="fa fa-spin fa-cog"></i></a>
		    <div class="customizer-body">
		        <ul class="nav customizer-tab" role="tablist">
		            <li class="nav-item">
		                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="index.html#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="mdi mdi-wrench font-20"></i></a>
		            </li>
		            <li class="nav-item">
		                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="index.html#chat" role="tab" aria-controls="chat" aria-selected="false"><i class="mdi mdi-message-reply font-20"></i></a>
		            </li>
		            <li class="nav-item">
		                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="index.html#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="mdi mdi-star-circle font-20"></i></a>
		            </li>
		        </ul>
		        <div class="tab-content" id="pills-tabContent">
		            <!-- Tab 1 -->
		            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
		                <div class="p-15 border-bottom" style="padding: 15px;">
		                    <!-- Sidebar -->
		                    <h5 class="font-medium m-b-10 m-t-10">Layout Settings</h5>
		                    <div class="custom-control custom-checkbox m-t-10">
		                        <input type="checkbox" class="custom-control-input" name="theme-view" id="theme-view">
		                        <label class="custom-control-label" for="theme-view" style="margin-bottom: 10px;">Dark Theme</label>
		                    </div>
		                    <div class="custom-control custom-checkbox m-t-10">
		                        <input type="checkbox" class="custom-control-input" name="sidebar-position" id="sidebar-position">
		                        <label class="custom-control-label" for="sidebar-position" style="margin-bottom: 10px;">Fixed Sidebar</label>
		                    </div>
		                    <div class="custom-control custom-checkbox m-t-10">
		                        <input type="checkbox" class="custom-control-input" name="header-position" id="header-position">
		                        <label class="custom-control-label" for="header-position" style="margin-bottom: 10px;">Fixed Header</label>
		                    </div>
		                    <div class="custom-control custom-checkbox m-t-10">
		                        <input type="checkbox" class="custom-control-input" name="boxed-layout" id="boxed-layout">
		                        <label class="custom-control-label" for="boxed-layout" style="margin-bottom: 10px;">Boxed Layout</label>
		                    </div>
		                </div>
		                <div class="p-15 border-bottom"  style="padding: 15px;">
		                    <!-- Logo BG -->
		                    <h5 class="font-medium m-b-10 m-t-10">Logo Backgrounds</h5>
		                    <ul class="theme-color">
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin1"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin2"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin3"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin4"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin5"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin6"></a></li>
		                    </ul>
		                    <!-- Logo BG -->
		                </div>
		                <div class="p-15 border-bottom"  style="padding: 15px;">
		                    <!-- Navbar BG -->
		                    <h5 class="font-medium m-b-10 m-t-10">Navbar Backgrounds</h5>
		                    <ul class="theme-color">
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin1"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin2"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin3"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin4"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin5"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin6"></a></li>
		                    </ul>
		                    <!-- Navbar BG -->
		                </div>
		                <div class="p-15 border-bottom"  style="padding: 15px;">
		                    <!-- Logo BG -->
		                    <h5 class="font-medium m-b-10 m-t-10">Sidebar Backgrounds</h5>
		                    <ul class="theme-color">
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin1"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin2"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin3"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin4"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin5"></a></li>
		                        <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin6"></a></li>
		                    </ul>
		                    <!-- Logo BG -->
		                </div>
		            </div>
		            <!-- End Tab 1 -->
		            <!-- Tab 2 -->
		            <div class="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="pills-profile-tab">
		                <ul class="mailbox list-style-none m-t-20">
		                    <li>
		                        <div class="message-center chat-scroll">
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_1' data-user-id='1'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/1.jpg" alt="user" class="rounded-circle"> <span class="profile-status online pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_2' data-user-id='2'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/2.jpg" alt="user" class="rounded-circle"> <span class="profile-status busy pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Sonu Nigam</h5> <span class="mail-desc">I've sung a song! See you at</span> <span class="time">9:10 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_3' data-user-id='3'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/3.jpg" alt="user" class="rounded-circle"> <span class="profile-status away pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Arijit Sinh</h5> <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_4' data-user-id='4'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/4.jpg" alt="user" class="rounded-circle"> <span class="profile-status offline pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Nirav Joshi</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                            <!-- Message -->
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_5' data-user-id='5'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/5.jpg" alt="user" class="rounded-circle"> <span class="profile-status offline pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Sunil Joshi</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                            <!-- Message -->
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_6' data-user-id='6'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/6.jpg" alt="user" class="rounded-circle"> <span class="profile-status offline pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Akshay Kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                            <!-- Message -->
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_7' data-user-id='7'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/7.jpg" alt="user" class="rounded-circle"> <span class="profile-status offline pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                            <!-- Message -->
		                            <a href="javascript:void(0)" class="message-item" id='chat_user_8' data-user-id='8'>
		                                <span class="user-img"> <img src="../../public/assets/admin/assets/images/users/8.jpg" alt="user" class="rounded-circle"> <span class="profile-status offline pull-right"></span> </span>
		                                <div class="mail-contnet">
		                                    <h5 class="message-title">Varun Dhavan</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
		                            </a>
		                            <!-- Message -->
		                        </div>
		                    </li>
		                </ul>
		            </div>
		            <!-- End Tab 2 -->
		            <!-- Tab 3 -->
		            <div class="tab-pane fade p-15" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
		                <h6 class="m-t-20 m-b-20">Activity Timeline</h6>
		                <div class="steamline">
		                    <div class="sl-item">
		                        <div class="sl-left bg-success"> <i class="ti-user"></i></div>
		                        <div class="sl-right">
		                            <div class="font-medium">Meeting today <span class="sl-date"> 5pm</span></div>
		                            <div class="desc">you can write anything </div>
		                        </div>
		                    </div>
		                    <div class="sl-item">
		                        <div class="sl-left bg-info"><i class="fas fa-image"></i></div>
		                        <div class="sl-right">
		                            <div class="font-medium">Send documents to Clark</div>
		                            <div class="desc">Lorem Ipsum is simply </div>
		                        </div>
		                    </div>
		                    <div class="sl-item">
		                        <div class="sl-left"> <img class="rounded-circle" alt="user" src="../../public/assets/admin/assets/images/users/2.jpg"> </div>
		                        <div class="sl-right">
		                            <div class="font-medium">Go to the Doctor <span class="sl-date">5 minutes ago</span></div>
		                            <div class="desc">Contrary to popular belief</div>
		                        </div>
		                    </div>
		                    <div class="sl-item">
		                        <div class="sl-left"> <img class="rounded-circle" alt="user" src="../../public/assets/admin/assets/images/users/1.jpg"> </div>
		                        <div class="sl-right">
		                            <div><a href="javascript:void(0)">Stephen</a> <span class="sl-date">5 minutes ago</span></div>
		                            <div class="desc">Approve meeting with tiger</div>
		                        </div>
		                    </div>
		                    <div class="sl-item">
		                        <div class="sl-left bg-primary"> <i class="ti-user"></i></div>
		                        <div class="sl-right">
		                            <div class="font-medium">Meeting today <span class="sl-date"> 5pm</span></div>
		                            <div class="desc">you can write anything </div>
		                        </div>
		                    </div>
		                    <div class="sl-item">
		                        <div class="sl-left bg-info"><i class="fas fa-image"></i></div>
		                        <div class="sl-right">
		                            <div class="font-medium">Send documents to Clark</div>
		                            <div class="desc">Lorem Ipsum is simply </div>
		                        </div>
		                    </div>
		                    <div class="sl-item">
		                        <div class="sl-left"> <img class="rounded-circle" alt="user" src="../../public/assets/admin/assets/images/users/4.jpg"> </div>
		                        <div class="sl-right">
		                            <div class="font-medium">Go to the Doctor <span class="sl-date">5 minutes ago</span></div>
		                            <div class="desc">Contrary to popular belief</div>
		                        </div>
		                    </div>
		                    <div class="sl-item">
		                        <div class="sl-left"> <img class="rounded-circle" alt="user" src="../../public/assets/admin/assets/images/users/6.jpg"> </div>
		                        <div class="sl-right">
		                            <div><a href="javascript:void(0)">Stephen</a> <span class="sl-date">5 minutes ago</span></div>
		                            <div class="desc">Approve meeting with tiger</div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <!-- End Tab 3 -->
		        </div>
		    </div>
		</aside>
		<div class="chat-windows"></div>
	</div>
</template>
<script>
	import axios from 'axios'
	import VueCookies from 'vue-cookies'
	import router from '../router.js'

	import AdminImport  from './AdminImport.vue'
	import AdminOrder   from './AdminOrder.vue'
	import AdminPayment from './AdminPayment.vue'
	import AdminNumbers from './AdminNumbers.vue'
	import AdminUsers   from './AdminUsers.vue'
	import Input   from './Input.vue'
	import AdminMail from './AdminMail.vue'
	import AdminNotification from './AdminNotification.vue'
	import AdminApp from './AdminApp'

	

    export default {
    	data:function (){
    		return{
    			admin_email:VueCookies.get('adminemail'),
    			token:VueCookies.get('admintoken'),
    			comp_name:'orders',
    			
    			UserPass:'',
    			UserEmail:'',
    			UserActive:true,
    			UserType:true,

    			NumberUuid:'',
    			NumberUuid1:'',

    			AppKeywords:[],
    			AppDays:'',
    			AppPriceOld:'',
    			AppPriceNew:'',
    			AppName:'',
    			count:0,

    			notifications:[],
    			total_not:'',
                item_not:''

    		}
    	},
        components:{
        	'admin-import' : AdminImport,
        	'admin-order'  : AdminOrder,
        	'admin-payment': AdminPayment,
        	'admin-numbers': AdminNumbers,
        	'admin-users'  : AdminUsers,
        	'admin-input'  : Input,
			'admin-mail'   : AdminMail,
			'admin-notification': AdminNotification,
			'admin-app': AdminApp,
        },
        methods:{
        	ChangeComponent:function(comp_name){
        		this.comp_name = comp_name
        	},
        	CreateUser:function(){

        		axios.post("http://88.198.106.121/api_gsim/v1/user/create",{
        			
        			passwd: this.UserPass,
        			is_active: this.UserActive,
        			email: this.UserEmail,
        			is_admin: this.UserType,
				},
				{
        			headers:{
        		    	'X-Auth-Token': this.token,
        			}

        		}).then((res)=>{
        			// console.log(res)
        		})
        	},
        	CreateNumber:function(){
        		axios.post("http://88.198.106.121/api_gsim/v1/number/create",{

        			number_uuid: this.NumberUuid,
        			number_uuid1: this.NumberUuid1,
        		},
        		{
    				headers:{
    			    	'X-Auth-Token': this.token,
    				}
        		}).then((res)=>{
        			// console.log(res)
        		})
        	},
        	CreateApp:function(){
      	 		var temp = [];

        		for(let i of this.AppKeywords)
        		    i && temp.push(i); 

        		this.AppKeywords = temp;

        		axios.post("http://88.198.106.121/api_gsim/v1/app/create",{

        			keywords:this.AppKeywords,
        			minimum_wait_days:this.AppDays,
        			price_old:this.AppPriceOld,
        			price_new:this.AppPriceNew,
        			app_name:this.AppName

        		},
        		{
    				headers:{
    			    	'X-Auth-Token': this.token,
    				}
        		}).then((res)=>{
        		    console.log(res)
        			if(res.data.success){
        			    alert("success")
                        this.AppName = ''
                        this.AppPriceNew = ''
                        this.AppPriceOld = ''
                        this.AppDays = ''
                        this.AppKeywords = []
						this.comp_name = 'app'
						this.count = 0
						// console.log(this.AppKeywords)
					}
        		},(error1)=>{
        		    alert('Error!')
                })
        	},
        	DelInp:function(index){
        		var element = document.getElementById("model-content-id");
        		var child = document.getElementById("a_"+index);
        		element.removeChild(child);
        		
        		this.AppKeywords.splice(index+1,1,null)
        	},
        	GetNotifications:function(){
        		axios.get("http://88.198.106.121/api_gsim/v1/notification/list",{
        			headers:{
        				'X-Auth-Token':this.token
        			}
        		}).then((res)=>{
        		    // console.log(res)
        			this.notifications = res.data.payload.items
        			this.total_not = res.data.payload.total
        		})
        	},
        	LogOut:function(){
        		VueCookies.remove('admintoken');
        		VueCookies.remove('adminemail');
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