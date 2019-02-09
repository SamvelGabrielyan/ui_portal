<template>
    <div class="auth-box" style="padding: 30px;">
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="logo">
						<span class="db">
							<img src="assets/images/logo-icon.png" alt="logo">
						</span>
                        <h5 class="font-medium m-b-20">Recover Password</h5>
                    </div>
                    <div>
                        <div class="col-12">
                            <!--<div class="form-group row">-->
                                <!--<div class="input-group-prepend">-->
									<!--<span id="basic-addon1" class="input-group-text">-->
										<!--<i class="ti-user"></i>-->
									<!--</span>-->
                                <!--</div>-->
                                <!--<input type="text" placeholder="Name" name="user_name" required="required" class="form-control form-control-lg" v-model="name">-->
                            <!--</div>-->
                            <div class="form-group row">
                                <div class="input-group-prepend">
									<span id="basic-addon1" class="input-group-text">
										<i class="ti-user"></i>
									</span>
                                </div>
                                <input type="text" placeholder="Email" name="user_name" required="required" class="form-control form-control-lg" v-model="email">
                            </div>

                            <div class="form-group text-center ">
                                <div class="col-xs-12 p-b-20 ">
                                    <button type="submit " class="btn btn-block btn-lg btn-info" @click.prevent="ResetPass()">Reset Password</button>
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
    import axios from 'axios'
    import VueCookies from 'vue-cookies'

    export default {
        data(){
            return{
                email:'',
                name:'',
                token: VueCookies.get('token'),

            }
        },
        methods:{
            ResetPass(){
                axios.post(`http://88.198.106.121/api_gsim/v1/auth/reset_email`,{
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    console.log(res)
                    alert('The email sent')
                })
            }
        }
    }
</script>

<style scoped>

</style>