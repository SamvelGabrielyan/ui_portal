<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="ml-1 form-row sms-recording-buttons" style="margin-bottom: 10px;">
                        <div class="col-auto">
                            <button @click="type = 0" class="btn btn-record">Order Table</button>
                        </div>
                        <div class="col-auto pull-left">
                            <button @click="type = 1" class="btn btn-record">Import Numbers</button>
                        </div>
                        <div class="col-auto">
                            <button @click="type = 2" class="btn btn-record">Manual Entry</button>
                        </div>
                    </div>
                    <form v-show="type == 1" enctype="multipart/form-data">
                        <div class="row">
                            <div class="row ml-2 mt-2">
                                <h4>Import File</h4>
                                <div class="col-3">
                                    <input  type="file" id="file" ref="file" placeholder="File name" @change="handleFileUpload()">
                                </div>
                            </div>
                            <div class="col-md-1 mt-2">
                                <h4>OR</h4>
                            </div>
                            <div class="row ml-2 mt-2">
                                <h4>Enter Range</h4>
                                <div class="col-4">
                                  <input type="text" class="form-control">
                                </div>
                                <span><h4>to</h4></span>
                                <div class="col-4">
                                  <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>



                        <div class="row mt-4">
                            <div class="row ml-2 mt-2">
                                <h4>User</h4>
                                <div class="col">
                                    <select class="form-control" v-model = "email" @change="GetUsersId()">
                                        <option v-for="items in users">{{ items.email }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row ml-2 mt-2">
                                <h4>App</h4>
                                <div class="col">
                                    <select class="form-control" v-model = "app">
                                    <option v-for="items in apps">{{ items.app_name }}</option>
                                </select>
                                </div>
                            </div>
                            <div class="row ml-2 mt-2">
                                <h4>Duration</h4>
                                <div class="col">
                                  <input class="form-control" type="text" v-model="order_duration">
                                </div>
                            </div>
                            <div class="row ml-2 mt-2">
                                <div class="col" @click="UserActive = !UserActive">
                                    <input type="checkbox" checked data-toggle="toggle" data-on="Skip" data-off="Override" data-onstyle="info" data-offstyle="info" data-width="100">
                                </div>
                            </div>
                            <!--<div class="row ml-2 mt-2">-->
                                <!--<div class="col" @click="UserActive = !UserActive">-->
                                    <!--<input type="checkbox" checked data-toggle="toggle" data-on="Override" data-off="off" data-onstyle="info" data-offstyle="info" data-width="100">-->
                                <!--</div>-->
                            <!--</div>-->
                            <button class="btn ml-4 mt-2" @click.prevent="UploadFile()">Upload</button>
                        </div>
                    </form>
                    <div v-show="type == 2">
                        <br>
                        <div class="row mt-2" style="width: 300px">
                            <h4>Number</h4>
                            <div class="col">
                                <input @input="Decimal()" v-model="FirstInput" min=1 class="form-control" type="text">
                            </div>
                        </div>
                        <button class="btn ml-4 mt-2" @click.prevent="UploadFile()">Upload</button>

                    </div>
                </div>

                <div v-show="type == 0" class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                    <label>Show
                                    <select v-model='perPage' @change="perPagefunc()" class=" form-control form-control-sm d-inline" style="width: 75px;">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    entries</label>
                                    <div class="mb-3">
                                        <div class="form-row">
                                            <span>User</span>
                                            <div class="col-3">
                                              <input list="browsers" class="form-control" v-model = 'filterColumnUser' @change="GetId()">

                                              <datalist id="browsers">
                                                  <option v-for = "user in users">{{user.email}}</option>
                                              </datalist>
                                            </div>
                                            <span>Status</span>
                                            <div class="col-3">
                                                <select type="text" class="form-control" v-model="filterColumnStatus">
                                                    <option></option>
                                                    <option>initial</option>
                                                    <option>busy</option>
                                                    <option>success</option>
                                                    <option>fail</option>
                                                </select>
                                            </div>
                                            <div class="col-md-2">
                                                <button class="btn btn-info" @click="filterColumnFunc()">Search <i class="faSMS Summary fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" style="font-size: .875rem;">
                                        <thead>
                                           <tr>
                                               <th @click = "boolsort = !boolsort,SortColumns('file')" style="cursor: pointer;">File Name <i class="fa fa-sort" aria-hidden="true"></i></th>
                                               <th @click = "boolsort = !boolsort,SortColumns('user_id')" style="cursor: pointer;">User <i class="fa fa-sort" aria-hidden="true"></i></th>
                                               <th @click = "boolsort = !boolsort,SortColumns('status')" style="cursor: pointer;">Status <i class="fa fa-sort" aria-hidden="true"></i></th>
                                               <th @click = "boolsort = !boolsort,SortColumns('result')" style="cursor: pointer;">Order # <i class="fa fa-sort" aria-hidden="true"></i></th>
                                               <th @click = "boolsort = !boolsort,SortColumns('date')" style="cursor: pointer;">Date <i class="fa fa-sort" aria-hidden="true"></i></th>
                                               <th @click = "boolsort = !boolsort,SortColumns('time')" style="cursor: pointer;">Time <i class="fa fa-sort" aria-hidden="true"></i></th>
                                               <th @click = "boolsort = !boolsort,SortColumns('line')" style="cursor: pointer;">Line Count <i class="fa fa-sort" aria-hidden="true"></i></th>
                                               <th @click = "boolsort = !boolsort,SortColumns('imported')" style="cursor: pointer;">Imported <i class="fa fa-sort" aria-hidden="true"></i></th>
                                           </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in file_list">
                                                <td>{{ item.file }}</td>
                                                <td>{{ item.user_id }}</td>
                                                <td>{{ item.status }}</td>
                                                <td>{{ item.result }}</td>
                                                <td>{{ item.date }}</td>
                                                <td>{{ item.time }}</td>
                                                <td>{{ item.line }}</td>
                                                <td>{{ item.imported }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    import VuePagination from 'vue-bs-pagination'

    export default {
        data:function () {
            return{
                admintoken:VueCookies.get('admintoken'),
                file_list:[],
                users:[],
                file:'',
                email:'',
                app:'',
                isActive:true,
                type:0,
                apps:[],
                user_id:'',
                user_id1:'',
                order_duration:'',
                imported:'',
                date:'',
                time:'',
                FirstInput:'',
                // from_number:'',
                // to_number:''

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

                filterColumnStatus:'',
                filterColumnUser:'',

                UserActive:true
            }
        },
        components:{
            'v-pagination':VuePagination
        },
        methods:{
            changeActive:function(active){
                this.isActive = active
            },
            GetUsers:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params:{
                        per_page:1000
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    }
                }).then((res)=>{
                    this.users = res.data.payload.items
                })
            },
            GetUsersId:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params:{
                        email:this.email,
                        per_page:1000
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    }
                }).then((res)=>{
                    this.user_id = res.data.payload.items[0].user_id
                })
            },
            UploadFile:function(){
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('order_duration',this.order_duration);
                formData.append('user_id',this.user_id)
                // console.log(this.file);
                // console.log(this.order_duration);
                // formData.append('from_number',this.from_number)
                // formData.append('to_number',this.to_number)
                axios.post("http://88.198.106.121/api_gsim/v1/file/import",
                    formData,
                    {                    
                        headers: {
                            'X-Auth-Token': this.admintoken,
                            'Content-Type': 'multipart/form-data'
                        }
                }).then((res)=>{
                    console.log(res)
                    this.GetFiles()
                })
            },
            handleFileUpload(){
               this.file = this.$refs.file.files[0];
            },

            GetFiles:function(){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/file/list",{
                    params: {
                        user_id:this.user_id1,
                        status:this.filterColumnStatus,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers: {
                        'X-Auth-Token': this.admintoken,
                    }
                }).then((res)=>{

                    console.log(res);

                    this.file_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
            perPagefunc:function(){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/file/list",{
                    params: {
                        user_id:this.user_id1,
                        status:this.filterColumnStatus,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    },
                }).then((res)=>{
                    this.file_list = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/file/list",{
                    params: {
                        user_id:this.user_id1,
                        status:this.filterColumnStatus,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    },
                }).then((res)=>{
                    this.file_list = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/file/list",{
                    params:{
                        user_id:this.user_id1,
                        status:this.filterColumnStatus,
                        order_by:item,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    },
                }).then((res)=>{
                    this.file_list = res.data.payload.items
                })
            },
            filterColumnFunc:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/file/list",{
                    params:{
                        user_id:this.user_id1,
                        status:this.filterColumnStatus,
                        per_page:this.perPage,
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    },
                }).then((res)=>{
                    this.file_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
            Decimal:function(){
                if (this.FirstInput != '') {
                    var regex = /[0-9]/;
                    if (!this.FirstInput[this.FirstInput.length - 1].match(regex)) {
                        this.FirstInput = this.FirstInput.slice(0, -1)
                    }
                    else {
                        return
                    }
                }

            },
            GetId:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/user/list",{
                    params:{
                        email:this.filterColumnUser,
                        per_page:1000
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    }
                }).then((res)=>{
                    if (res.data.payload.items.length == 1)
                        this.user_id1 = res.data.payload.items[0].user_id
                    else{
                        this.user_id1 = ''
                    }
                })
            },
            GetApp:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/app/list",{
                    params:{
                        per_page:1000
                    },
                    headers:{
                        'X-Auth-Token': this.admintoken,
                    },
                }).then((res)=>{
                    this.apps = res.data.payload.items
                })
            }
        },
        created(){
            this.GetUsers()
            this.GetFiles()
            this.GetApp()
        }
    }

</script>
<style>
  
</style>
