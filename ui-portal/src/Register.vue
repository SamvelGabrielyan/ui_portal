<template>
    <div id="app">
    <div class="auth-box" style="padding: 30px;">
        <div class="row">
            <div class="error">

            </div> 
                <div class="col-12">
                    <form>
                        <div class="logo">
                            <span class="db">
                                <img src="assets/images/logo-icon.png" alt="logo">
                            </span> 
                            <h5 class="font-medium m-b-20">Register</h5>
                        </div>
                            <div>
                                <div class="col-12">
                                    <div class="form-group row ">
                                        <label for="name">
                                            <!--<b>Name</b>-->
                                        </label>
                                        <input type="text" placeholder="Name" name="name" required="required" class="form-control form-control-lg" v-model="register_user_data.name">
                                    </div>
                                    <div class="form-group row ">
                                        <label for="email">
                                            <!--<b>Email</b>-->
                                        </label> 
                                        <input type="text" placeholder="Email" name="email" required="required" class="form-control form-control-lg" v-model="register_user_data.email">
                                    </div> 
                                    <div class="form-group row ">
                                        <label for="psw">
                                            <!--<b>Password</b>-->
                                        </label> 
                                        <input type="password" placeholder="Password" name="password" required="required" class="form-control form-control-lg" v-model="register_user_data.password">
                                    </div>
                                    <div class="form-group row ">
                                        <label for="psw1">
                                            <!--<b>Password</b>-->
                                        </label>
                                        <input type="password" placeholder="Confirm Password" name="password" required="required" class="form-control form-control-lg" v-model="register_user_data.password1">
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12 ">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                <label class="custom-control-label" for="customCheck1" style="margin-left: 10px;">I agree to all <a href="javascript:void(0)" style="color: #0b0b0b; margin-left: 5px">Terms</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group text-center ">
                                        <span style="color: red;" v-show="register_user_data.error != ''">{{register_user_data.error}}</span>
                                        <span style="color: green;" v-show="register_user_data.success != ''">{{register_user_data.success}}</span>
                                        <div class="col-xs-12 p-b-20 ">
                                            <button type="submit" class="btn btn-block btn-lg btn-info" @click.prevent="RegisterUser()">SIGN UP</button>
                                        </div>
                                        <div class="col-sm-12 text-center ">Already have an account? 
                                            <a href="/login" class="text-info m-l-5 ">
                                                <b style="color: #0b0b0b">Sign In</b>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from './router';
export default {
    data:function(){
        return{
            register_user_data:{
                email:'',
                password:'',
                error:'',
                success:'',
                name:'',
                password1:''
            },

        }
    },
    methods:{
        RegisterUser:function(){

            axios.post('http://88.198.106.121/api_gsim/v1/registration/create',{
                email     : this.register_user_data.email,      
                password  : this.register_user_data.password,
                name      : this.register_user_data.name,
                password1 : this.register_user_data.password1,
            }
            ).then((res)=>{
                console.log(res);
                this.register_user_data.success = 'Thank you for signup. Please confirm the link sent on your registered Email';

                setTimeout(function () {
                    router.push({name:'login'});
                    location.reload()
                },3000)
            },(error)=>{
                    if (Array.isArray(error.response.data.errors)) {
                        this.register_user_data.error = error.response.data.errors[0].email[0];
                    } else {
                        // this.register_user_data.error = error.response.data.error.message;
                        this.register_user_data.error = 'Email already exist !';
                    }
            })
        }
    }      
}
</script>
<style>
.form-group{
  margin-bottom:1rem;
}
form{
    padding: 20px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
}
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}


input{
    padding: .5rem 1rem;
    font-size: 1.09375rem;
    line-height: 1.5;
    border-radius: 2px
}
.form-control{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #4F5467;
    background-color: #fff;
    border: 1px solid #e9ecef;
    border-radius: 2px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
form .logo {
    text-align: center;
}

.btn-info {
    color: #fff;
    background-color: #2962FF;
    border-color: #2962FF;
}
.btn-group-lg>.btn, .btn-lg {
  margin-top: 10px;
    padding: 1.5rem 1rem;
    font-size: 1.09375rem;
    line-height: 1.5;
    border-radius: 2px;
   
}
</style>

