<template>
	<div class="auth-box" style="padding: 30px;">
		<div class="row">
			<div class="col-12">
				<form>
					<div class="logo">
						<span class="db">
							<img src="assets/images/logo-icon.png" alt="logo">
						</span>
						<h5 class="font-medium m-b-20">Sign In</h5>
					</div>
					<div>
						<div class="col-12">
							<div class="form-group row">
								<div class="input-group-prepend">
									<span id="basic-addon1" class="input-group-text">
										<i class="ti-user"></i>
									</span>
								</div>
								<input type="text" placeholder="Email" name="user_name" required="required" class="form-control form-control-lg" v-model="login">
							</div>
							<div class="form-group row">
								<div class="input-group-prepend">
									<span id="basic-addon" class="input-group-text">
										<i class="ti-user"></i>
									</span>
								</div>
								<input type="password" placeholder="Password" name="password" required="required" class="form-control form-control-lg" v-model="password">
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1">
										<label class="custom-control-label" for="customCheck1" style="margin-left: 10px;">Remember me</label>
										<!--<a href="javascript:void(0)" id="to-recover" class="text-dark float-right"><i class="fa fa-lock m-r-5"></i> Forgot pwd?</a>-->
										<router-link to="/forget_pass" class="text-info m-l-5" style="margin-left: 90px">
											<b style="color: #0D3459">Forgot Password?</b>
										</router-link>
									</div>
								</div>
							</div>
							<!--<div class="form-group row">-->
								<!--<div class="col-md-12">-->
									<!--<div class="custom-control custom-checkbox">-->
										<!--<input type="checkbox" class="custom-control-input" id="customCheck1">-->
										<!--<label class="custom-control-label" for="customCheck1">Remember me</label>-->
										<!--<a href="javascript:void(0)" id="to-recover" class="text-dark float-right"><i class="fa fa-lock m-r-5"></i> Forgot pwd?</a>-->
									<!--</div>-->
								<!--</div>-->
							<!--</div>-->
							<div class="form-group text-center ">
								<span style="color: red;" v-show="error != ''">{{error}}</span>
								<div class="col-xs-12 p-b-20 ">
									<button type="submit " class="btn btn-block btn-lg btn-info" @click.prevent="LogIn()">Log in</button>
								</div>
								<div class="col-sm-12 text-center ">
                                    Don't have an account?
                                    <a href="/register" class="text-info m-l-5 ">
                                    	<b style="color: #0d4982">Sign up</b>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
	import axios from "axios"
	import VueCookies from 'vue-cookies'
	import router_user from './router_user.js'
	import router_admin from './router_admin.js'
export default {

	data:function (){
		return{
			admintoken:'',
			token:'',
			login:'',
			password:'',
			error:''
		}
	},
	methods:{
		LogIn:function(){
			axios.post('http://88.198.106.121/api_gsim/v1/auth',{
				user_name : this.login,
				password  : this.password
			}
			).then((res)=>{
				if(res.data.success == true){
					if(res.data.payload.user_type == 'user'){
						this.token = res.data.payload.token
						VueCookies.set('token', this.token)
						VueCookies.set('useremail', this.login)

						router_user.push({ name: 'usermenue' })
						location.reload();
					}
					if(res.data.payload.user_type == 'admin'){
						this.admintoken = res.data.payload.token
						VueCookies.set('admintoken', this.admintoken)
						VueCookies.set('adminemail', this.login)
						
						router_admin.push({ name: 'adminmenue' })
						location.reload();
					}
				}
			},(error)=> {
				this.error = 'Login or Password are incorrect'

			})
		}
	}
    
}

</script>
