<template>
    <div class="row">
        <div v-if="comp_name != 'message'" class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-md-flex align-items-center">
                        <div>
                            <h4 class="card-title">SMS Summary</h4>
                            <h5 class="card-subtitle">Overview of Latest Month</h5>
                        </div>
                        <div class="ml-auto d-flex no-block align-items-center">
                            <ul class="list-inline font-12 dl m-r-15 m-b-0" style="margin-top: 15px;padding-right: 10px;">
                                <li class="list-inline-item text-info"><i class="fa fa-circle"></i> Sms</li>
                                <li class="list-inline-item text-primary"><i class="fa fa-circle"></i> Recordings</li>
                            </ul>
                            <div class="dl">
                                <select class="custom-select">
                                    <option value="1" selected>Daily</option>
                                    <option value="2">Weekly</option>
                                    <option value="0">Monthly</option>
                                    <option value="3">Yearly</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- column -->
                        <div class="col-lg-4">
                            <h1 class="m-b-0 m-t-30">{{items.msg_count_24h}}</h1>
                            <h6 class="font-light text-muted">Last 24 hour SMS</h6><h6 class="font-light text-muted">{{datetime1}} to {{datetime}}</h6>
                            <h1 class="m-t-30 m-b-0">{{items.msg_count_30d}}</h1>
                            <h6 class="font-light text-muted">Last 30 days SMS</h6><h6 class="font-light text-muted">{{datetime2}} to {{datetime}}</h6>
                            <button class="btn btn-info m-t-20 p-15 p-l-25 p-r-25 m-b-20" @click = "ChangeComponent('message')" >SMS History</button>
                        </div>
                        <!-- column -->
                        <div class="col-lg-8">
                            <div class="campaign ct-charts"></div>
                        </div>
                        <!-- column -->
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- Info Box -->
                <!-- ============================================================== -->
                <div class="card-body border-top">
                    <div class="row m-b-0">
                        <!-- col -->
                        <div class="col-lg-2 col-md-6 ml-5">
                            <div class="d-flex align-items-center">
                                <div class="m-r-10"><span class="text-orange display-5"><i class="mdi mdi-format-list-numbers"></i></span></div>
                                <div><span>Active Numbers</span>
                                    <h3 class="font-medium m-b-0">{{items.active_numbers}}</h3>
                                </div>
                            </div>
                        </div>
                        <!-- col -->
                        <!-- col -->
                        <div class="col-lg-2 col-md-6 ml-5">
                            <div class="d-flex align-items-center">
                                <div class="m-r-10"><span class="text-cyan display-5"><i class="mdi mdi-star-circle"></i></span></div>
                                <div><span>Number of SMS</span>
                                    <h3 class="font-medium m-b-0">{{items.sms_count}}</h3>
                                </div>
                            </div>
                        </div>
                        <!-- col -->
                        <!-- col -->
                        <div class="col-lg-2 col-md-6 ml-5">
                            <div class="d-flex align-items-center">
                                <div class="m-r-10"><span class="text-info display-5"><i class="mdi mdi-shopping"></i></span></div>
                                <div><span>Number of recording</span>
                                    <h3 class="font-medium m-b-0">{{items.rec_count}}</h3></div>
                            </div>
                        </div>
                        <!-- col -->
                        <!-- col -->
                        <div class="col-lg-2 col-md-6 ml-5">
                            <div class="d-flex align-items-center">
                                <div class="m-r-10"><span class="text-primary display-5"><i class="mdi mdi-currency-usd"></i></span></div>
                                <div><span>Inactive Numbers</span>
                                    <h3 class="font-medium m-b-0">{{items.inactive_numbers}}</h3>
                                </div>
                            </div>
                        </div>
                        <!-- col -->
                        <div class="col-lg-2 col-md-6 ml-5">
                            <div class="d-flex align-items-center">
                                <div class="m-r-10"><span class="text-primary display-5"><i class="mdi mdi-format-list-numbers"></i></span></div>
                                <div><span>Active Orders</span>
                                    <h3 class="font-medium m-b-0">{{items.active_numbers}}</h3>
                                </div>
                            </div>
                        </div>
                        <!-- col -->
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid" >
            <user-messages v-if = "comp_name == 'message'"></user-messages>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    import UserMessages   		from './UserMessages.vue'

    export default {
        data:function () {
            return{
                token:VueCookies.get('token'),
                items:[],
                datetime:'',
                datetime1:'',
                datetime2:'',
                type:0,
                comp_name:'dashboard',
            }
        },
        components:{
            'user-messages'         : UserMessages,
        },

        methods:{
            ChangeComponent:function(comp_name){
                this.comp_name = comp_name
            },
            getDashboard:function(){
                axios.get('http://88.198.106.121/api_gsim/v1/dashboard',{
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    // console.log(res);
                    var date = new Date();
                    this.datetime = ((date.getFullYear()) + '-' + date.getMonth() + '-' +  date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()+':'+date.getSeconds());
                    this.datetime1 = ((date.getFullYear()) + '-' + date.getMonth() + '-' +  (date.getDate()-1) + ' ' + date.getHours() + ':' + date.getMinutes()+':'+date.getSeconds());
                    this.datetime2 = ((date.getFullYear()) + '-' + (date.getMonth()-1) + '-' +  date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()+':'+date.getSeconds());
                    this.items = res.data.payload
                })
                
            }
        },
        mounted(){
            this.getDashboard();
        }    
    }

</script>
<style>
  
</style>