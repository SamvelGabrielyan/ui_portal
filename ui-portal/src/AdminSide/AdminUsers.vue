<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="col-sm-12 col-md-6">
                        <label>Show
                        <select v-model='perPage' @change="perPagefunc()" class=" form-control form-control-sm d-inline" style="width: 75px;">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        entries</label>
                    </div>
                    <div class="mb-3">
                        <div class="form-row">
                            <span>User</span>
                            <div class="col-3">
                                <input list="browsers" class="form-control" v-model= "filterUser">

                                <datalist id="browsers">
                                    <option v-for = "user in users">{{user.email}}</option>
                                </datalist>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-info"  @click="FilterUserFunc(filterUser)">Search <i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered" style="font-size: .875rem;">
                            <thead>
                                <tr>
                                    <th rowspan="2" @click = "boolsort = !boolsort,SortColumns('email')" style="cursor: pointer;">Email <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th rowspan="2">Registered-On</th>
                                    <th rowspan="2">Status</th>
                                    <th rowspan="2">Last Login</th>
                                    <th colspan="3">Payment History</th>
                                    <th colspan="5">Order History</th>
                                    <th colspan="4">Current Number Assigned</th>
                                    <th colspan="5">Message History</th>
                                    <th rowspan="2">Action</th>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>#Number</th>
                                    <th>Date</th>
                                    <th>Order uuid</th>
                                    <th># of Number</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Number</th>
                                    <th>Order uuid</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Date</th>
                                    <th>Order uuid</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in user_list">
                                    <td>{{ item.email }}</td>
                                    <td></td>
                                    <td>{{ item.user_type }}</td>
                                    <td>{{ item.last_login }}</td>
                                    <!--<td></td>-->
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>17</td>
                                    <td>17</td>
                                    <td>
                                        <button class="btn btn-danger mr-2" @click="DeleteEditUser(item.user_id)" data-toggle="modal" data-target="#DeleteUser"><i class="mdi mdi-delete"></i></button>
                                        <button class="btn btn-info" @click="DeleteEditUser(item.user_id)" data-toggle="modal" data-target="#EditUser"><i class="mdi mdi-pencil"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="row" v-if="num > 10">
                        <div class="col-sm-12 col-md-5">
                            <div class="dataTables_info" id="zero_config_info" role="status" aria-live="polite">
                            Showing {{ count1 }} to {{ count }} of {{ num }} entries
                            </div>
                        </div>
                        <nav class="col-sm-12 col-md-7">
                          <ul class="pagination justify-content-end" @click="paginationTables()">
                            <v-pagination :total="total" v-model="currentPage"></v-pagination>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="DeleteUser" tabindex="-1" role="dialog" aria-labelledby="DeleteUserLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="DeleteUserLabel">Confirmation</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Please confirm to expire this order.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                <button type="button" class="btn btn-danger" @click="ConfirmDelUser()" data-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="EditUser" tabindex="-1" role="dialog" aria-labelledby="EditUser" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="EditUser">Edit User</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>Email</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="UserEmail" class="form-control" type="Email" name="email">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>Password</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="UserPass" class="form-control" type="password" name="email">
                </div>
              </div>
              <div class="form-row pl-2 mt-2 mb-3">
                <div class="col-md-4">
                    <h4><b><label>Type</label></b></h4>
                </div>
                <div class="col" @click="UserType = !UserType">
                    <input type="checkbox" checked data-toggle="toggle" data-on="Admin" data-off="User" data-onstyle="info" data-offstyle="info" data-width="100"> 
                </div>
                <div class="col" @click="UserActive = !UserActive">
                    <input type="checkbox" checked data-toggle="toggle" data-on="Active" data-off="Inactive" data-onstyle="info" data-offstyle="info" data-width="100"> 
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal" @click="EditUser()">Edit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import VueCookies from 'vue-cookies'
    import VuePagination from 'vue-bs-pagination'
    
    export default {
        data:function(){
            return{
                token:VueCookies.get('admintoken'),
                adminEmail:VueCookies.get('adminemail'),
                user_list:[],
                active_list:[],
                pagesCount:'',
                total: 1,
                currentPage:1,
                perPage: 10,
                eachSide: 1,
                num:0,
                count:10,
                count1:1,
                boolsort:false,
                sortItem:'',
                filterUser:'',

                user_id:Number,

                UserPass:'',
                UserEmail:'',
                UserActive:true,
                UserType:true,

                users:[]
            }
        },
        components:{
            'v-pagination':VuePagination
        },
        methods:{
            getTables: function () {
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params:{
                        email:this.filterUser,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    // console.log(res)
                    this.user_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
            getActive:function(){
              axios.get(`http://88.198.106.121/api_gsim/v1/user/payment/list?user_name=samvel.gabrielyan100@gmail.com`,{
                  headers:{
                      'X-Auth-Token': this.token,
                  }
              }).then((res)=>{
                  // console.log(res.data)
              })
            },
            // getPayment:function(email){
            //     var newstr = email.replace('@', '%40');
            //     // console.log(newstr)
            //     axios.get(`http://88.198.106.121/api_gsim/v1/user/number/list?is_active=true&user_name=274278678%40qq.com`,{
            //         headers:{
            //             'X-Auth-Token': this.token,
            //         }
            //     }).then((res)=>{
            //         console.log(res.data)
            //     })
            // },
            perPagefunc:function(){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params: {
                        email:this.filterUser,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.user_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                    this.count = Number(this.currentPage*this.perPage)
                    this.count1 = Number(this.count - this.perPage + 1)
                })
            },
            paginationTables:function(){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params: {
                        email:this.filterUser,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.user_list = res.data.payload.items
                    this.count = Number(this.currentPage*this.perPage)
                    this.count1 = Number(this.count - this.perPage + 1)

                })
            },
            SortColumns:function(item){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                this.sortItem = item
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params:{
                        email:this.filterUser,
                        order_by:item,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.user_list = res.data.payload.items
                })
            },
            FilterUserFunc(user){
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params:{
                        email:this.filterUser
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.user_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
            DeleteEditUser:function(id){
                this.user_id = id
            },
            ConfirmDelUser:function(){
                axios.delete("http://88.198.106.121/api_gsim/v1/user/"+this.user_id,{
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.getTables();
                    alert("Success")
                },()=>{
                    alert("Error")
                })
            },
            EditUser:function(){
                axios.patch("http://88.198.106.121/api_gsim/v1/user/"+this.user_id,{
                    
                        is_active: this.UserActive,
                        passwd: this.UserPass,
                        email: this.UserEmail,
                        is_admin: this.UserType
                    },
                    {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.getTables()
                    alert('Success')
                },()=>{
                    alert('Error')
                })
            },
            GetUsers:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params:{
                        per_page:1000
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.users = res.data.payload.items
                })
            },
        },
        created(){
            this.getTables();
            this.GetUsers();
            this.getActive();
        },
    }
</script>
<style>
  
</style>