<template>
    <div class="row">To Be Released
        <div class="col-12">
            <div class="card">
                <div class="card-body">

                    <div  class="modal fade" id="NumberHistoryConf" tabindex="-1" role="dialog" aria-labelledby="NumberHistoryConf" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document" style="max-width: 1500px">
                            <div class="modal-content" style="width: 1500px;">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="NumberHistoryConf1">View History Order</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>Number uuid</th>
                                            <th>Order uuid</th>
                                            <th>Created on</th>
                                            <th>App</th>
                                            <th>End Date</th>
                                            <th>Start Date</th>
                                            <th>Email</th>
                                        </tr>
                                        </thead>
                                        <tbody v-for="item in items">
                                        <tr>
                                            <td>{{item.number_uuid}}</td>
                                            <td>{{item.order_uuid}}</td>
                                            <td></td>
                                            <td>{{item.app_uuid}}</td>
                                            <td>{{item.end_date.split('T').join(' ').split('+').shift()}}</td>
                                            <td>{{item.start_date.split('T').join(' ').split('+').shift()}}</td>
                                            <td>{{item.user_name}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


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
                              <input list="browsers" class="form-control" v-model="FilterEmail">

                              <datalist id="browsers">
                                  <option v-for = "user in users">{{user.email}}</option>
                              </datalist>
                            </div>
                            <span>Number</span>
                            <div class="col-3">
                                  <input type="text" list="browser1" class="form-control" v-model="FilterNumber">
                                <datalist id="browser1">
                                    <option v-for = "number in numbers">{{number.number_uuid}}</option>
                                </datalist>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-info" @click="filterColumnOrder()">Search <i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered" style="font-size: .875rem;">
                            <thead>
                                <tr>
                                    <th @click = "boolsort = !boolsort,SortColumns('number_uuid')" style="cursor: pointer;">Number <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('created_on')" style="cursor: pointer;">Entered On <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th>Last Released On</th>
                                    <th @click = "boolsort = !boolsort,SortColumns('is_active')" style="cursor: pointer;">Status <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('user_name')" style="cursor: pointer;">Email <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('end_date')" style="cursor: pointer;">To Be Released <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th>View History Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for = "number in numbers" :key = 
                               "number.uuid">
                                    <td>{{ number.number_uuid }}</td>
                                    <td>{{ number.created_on }}</td>
                                    <td></td>  
                                    <td  v-if =" number.is_active == true" >Utilized</td>  
                                    <td  v-if =" number.is_active == false" >Idle</td>  
                                    <td>{{ number.user_name }}</td>
                                    <td>{{ number.end_date.split('T').join(' ').split('+').shift() }}</td>
                                    <td><button data-toggle="modal" data-target="#NumberHistoryConf" @click="getNumbersHistory(number.number_uuid)" type="button" class="btn btn-outline-secondary">view history</button></td>
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
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    import VuePagination from 'vue-bs-pagination'

    export default {
        data:function (){
            return{
              token:VueCookies.get('admintoken'),
              numbers:[],
              pagesCount:'',
              total: 1,
              currentPage:1,
              perPage: 10,
              eachSide: 1,
              num:0,
                filterColumn: '',
                filterColumnStartTime: '',
                filterColumnEndTime: '',
                FilterEmail:'',
                searchOrder: '',
                number:'',
                FilterNumber:'',

              count:10,
              count1:1,
              boolsort:false,
              sortItem:'',
              is_active:true,
              numberCount: 0,
              items:[],

              users:[],
            }
        },
        components:{
            'v-pagination':VuePagination
        },
        methods:{
            changeActive:function(active){
                this.is_active = active
            },
            getTables: function (bool) {
                axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                  params:{
                    is_active:bool,
                    per_page:this.perPage,
                  }, 
                  headers:{
                      'X-Auth-Token': this.token,
                  }
                }).then((res)=>{
                    // console.log(res)
                    this.numbers = res.data.payload.items;
                    this.num = res.data.payload.total;
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
            filterColumnOrder: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/user/number/list", {
                    params: {
                        // created_on_gt: this.filterColumnStartTime,
                        // created_on_lt: this.filterColumnEndTime,
                        user_name: this.FilterEmail,
                        // per_page: this.perPage,
                        number_uuid: this.FilterNumber
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.numbers = res.data.payload.items;
                    this.num = res.data.payload.total;
                    this.total = Math.ceil(this.num / Number(this.perPage))
                })
            },
            getNumbersHistory: function (number_uuid) {
                axios.get(`http://88.198.106.121/api_gsim/v1/user/number/list?number_uuid=%2B${number_uuid.split('+').join('')}`,{
                    params:{
                        // is_active:bool,
                        per_page:this.perPage,
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    // console.log(res)
                    this.items = res.data.payload.items

                })
            },
            perPagefunc:function(){
              if(this.boolsort == false){
                  var order_dir = 'desc'
              }else{
                  var order_dir = 'asc'
              }
              axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                  params: {
                      order_by:this.sortItem,
                      order_dir:order_dir,
                      per_page:this.perPage,
                      page:this.currentPage-1
                  },
                  headers:{
                      'X-Auth-Token': this.token,
                  },
              }).then((res)=>{
                  this.numbers = res.data.payload.items
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
              axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                  params: {
                      order_by:this.sortItem,
                      order_dir:order_dir,
                      per_page:this.perPage,
                      page:this.currentPage-1
                  },
                  headers:{
                      'X-Auth-Token': this.token,
                  },
              }).then((res)=>{
                  this.numbers = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                    params:{
                        order_by:item,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.numbers = res.data.payload.items
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
        mounted(){
            this.getTables();
            this.GetUsers();
        },
    }
</script>
<style>
  
</style>