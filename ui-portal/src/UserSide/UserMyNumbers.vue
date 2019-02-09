<template>
<div>
<!-- <div class="col-auto">
<button class="btn btn">Renew</button>
</div>
<br>
<div class="col-auto">
<button class="btn btn">Modify</button>
</div> -->
  
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="ml-2" style="margin-bottom: 10px;">
                        <div class="form-row my-number-pages-buttons">
                            <div class="col-auto">
                                <button class="btn btn" @click="is_active = true,getTables()"
                                        v-bind:class="{ 'btn-danger': is_active }">Active</button>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn" @click="is_active = false,getTables()"
                                        v-bind:class="{ 'btn-danger': !is_active }">Expired</button>
                            </div>
                        </div>
                    </div>

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
                                        <tbody v-for="item in items" :key="item.uuid">
                                        <tr>
                                            <td>{{item.number_uuid}}</td>
                                            <td>{{item.order_uuid}}</td>
                                            <td></td>
                                            <td>{{item.app_uuid}}</td>
                                            <td>{{item.end_date.split('T').join(' ').split('+').shift().split('.').shift()}}</td>
                                            <td>{{item.start_date.split('T').join(' ').split('+').shift().split('.').shift()}}</td>
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
                    <div class="mb-3 ml-2 mt-1">
                        <div class="form-row">
                            <span>Number</span>
                            <div class="col-md-2">
                                  <input type="text" class="form-control" v-model= "filterColumnNumber">
                            </div>
                            <span>Active Between</span>
                            <div class="col-md-2">
                                <date-picker v-model= "filterColumnFrom" :config="options" placeholder="From"></date-picker>  
                            </div>
                            <span><b>-</b></span>
                            <div class="col-md-2">
                                <date-picker v-model= "filterColumnTo" :config="options" placeholder="To"></date-picker> 
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-info"  @click="filterColumnOrder()">Search <i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered" style="font-size: .875rem;">
                           <thead>
                               <tr>
                                   <th class="align-top" rowspan="2">Action</th>
                                  <th class="align-top" rowspan="2" @click = "boolsort = !boolsort,SortColumns('app_uuid')" style="cursor: pointer;">App <i class="fa fa-sort" aria-hidden="true"></i></th>
                                  <th class="align-top" rowspan="2" @click = "boolsort = !boolsort,SortColumns('number_uuid')" style="cursor: pointer;">Number <i class="fa fa-sort" aria-hidden="true"></i></th>
                                  <th class="align-top" rowspan="2" @click = "boolsort = !boolsort,SortColumns('order_num')" style="cursor: pointer;">Order Number <i class="fa fa-sort" aria-hidden="true"></i></th>
                                  <th class="align-top" rowspan="2" @click = "boolsort = !boolsort,SortColumns('order_uuid')" style="cursor: pointer;">Ordered On</th>
                                  <th class="align-top" rowspan="2" @click = "boolsort = !boolsort,SortColumns('start_date')" style="cursor: pointer;">Start Time <i class="fa fa-sort" aria-hidden="true"></i></th>
                                  <th class="align-top" rowspan="2" @click = "boolsort = !boolsort,SortColumns('end_date')" style="cursor: pointer;">End Time <i class="fa fa-sort" aria-hidden="true"></i></th>
                                  <th colspan="4">SMS Delivery</th>
                                  <th colspan="4">Recording Delivery</th>
                               </tr>
                               <tr>
                                   <th>Email</th>
                                   <th>Whatsapp</th>
                                   <th>HTTP</th>
                                   <th>SMPP</th>
                                   <th>Email</th>
                                   <th>Whatsapp</th>
                                   <th>HTTP</th>
                                   <th>SMPP</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr  v-for = "number in numbers" :key = 
                               "number.uuid">
                                   <td><button data-toggle="modal" data-target="#NumberHistoryConf" @click="getSmsHistory(number.order_uuid,number.number_uuid)" type="button" class="btn btn-outline-secondary">Show Messages</button></td>
                                   <td>{{number.app_uuid}}</td>
                                   <td>{{ number.number_uuid }}</td>
                                   <td>{{ number.order_uuid }}</td>
                                   <td>{{ number.ordered_on.split('T').join(' ').split('+').shift().split('.').shift() }}</td>
                                   <td>{{ number.start_date.split('T').join(' ').split('+').shift().split('.').shift() }}</td>
                                   <td>{{ number.end_date.split('T').join(' ').split('+').shift().split('.').shift() }}</td>

                                   <td><p v-if="item.delivery == 'sms' && item.type == 'email'" v-for="item in number.forwardings">{{item.url}}</p>
                                       <button v-if="item.delivery == 'sms' && item.type == ''" v-for="item in number.forwardings">Button</button>
                                   </td>
                                   <td></td>
                                   <td><p v-if="item.delivery == 'sms' && item.type == 'http_get'" v-for="item in number.forwardings">{{item.url}}</p>
                                       <!-- <button v-if="item.delivery == 'null' && item.type == 'null'" v-for="item in number.forwardings">Button</button> -->
                                   </td>
                                   <td></td>

                                   <td>
                                       <p v-if="item.delivery == 'recording' && item.type == 'email'" v-for="item in number.forwardings">{{item.url}}</p>
                                       <button v-if="item.delivery == 'recording' && item.type == ''" v-for="item in number.forwardings">Button</button>
                                   </td>
                                   <td></td>
                                   <td>
                                       <p v-if="item.delivery == 'recording' && item.type == 'http_get'" v-for="item in number.forwardings">{{item.url}}</p>
                                       <!-- <button v-if="item.delivery == 'null' && item.type == 'null'" v-for="item in number.forwardings">Button</button> -->
                                   </td>
                                   <td></td>
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
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    import VuePagination from 'vue-bs-pagination'
    import datePicker from 'vue-bootstrap-datetimepicker';

    export default {
        data:function (){
            return{
              token:VueCookies.get('token'),
              numbers:[],
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
              is_active:true,
              order:'',
              items:'',

              filterColumnNumber:'',
              filterColumnFrom:'',
              filterColumnTo:'',

              options: {
                format: 'MM/DD/YYYY',
                useCurrent: false,
              } 
            }
        },
        components:{
            'v-pagination':VuePagination,
            datePicker
        },
        methods:{
            getTables: function () {
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                  params:{
                    is_active:this.is_active,
                    end_date_gt:this.filterColumnFrom,
                    end_date_lt:this.filterColumnTo,
                    number_uuid:this.filterColumnNumber,
                    per_page:this.perPage,
                  }, 
                  headers:{
                      'X-Auth-Token': this.token,
                  }
                }).then((res)=>{
                  console.log(res)
                    this.numbers = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },

            getSmsHistory:function(created_on,number_uuid){
                // alert(created_on);
                // alert(number_uuid);
                axios.get(`http://88.198.106.121/api_gsim/v1/sms/list`,{

                    headers:{
                        'X-Auth-Token': this.token,
                    },
                    params:{
                     order_by : created_on,
                     to : number_uuid
                    }
                }).then((res)=>{
                    console.log(res)
                })
            },
            getSms:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/sms/list",{

                    headers:{
                        'X-Auth-Token': this.token,
                    }
                    }).then((res)=>{
                        // console.log(res)
                })
            },
            // getOrder:function () {
            //     axios.get("http://88.198.106.121/api_gsim/v1/number/list",{
            //         headers:{
            //             'X-Auth-Token': this.token,
            //         }
            //     }).then((res)=>{
            //         console.log(res.data.payload)
            //         this.order = res.data.payload.items;
            //         // this.numbers = res.data.payload.items
            //         // this.num = res.data.payload.total
            //         // this.total = Math.ceil(this.num/Number(this.perPage))
            //     })
            //
            // },
            perPagefunc:function(){
              if(this.boolsort == false){
                  var order_dir = 'desc'
              }else{
                  var order_dir = 'asc'
              }
              axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                  params: {
                    is_active:this.is_active,
                    end_date_gt:this.filterColumnFrom,
                    end_date_lt:this.filterColumnTo,
                    number_uuid:this.filterColumnNumber,
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
                      is_active:this.is_active,
                      end_date_gt:this.filterColumnFrom,
                      end_date_lt:this.filterColumnTo,
                      number_uuid:this.filterColumnNumber,
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
                        is_active:this.is_active,
                        end_date_gt:this.filterColumnFrom,
                        end_date_lt:this.filterColumnTo,
                        number_uuid:this.filterColumnNumber,
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
            filterColumnOrder:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                    params:{
                        is_active:this.is_active,
                        end_date_gt:this.filterColumnFrom,
                        end_date_lt:this.filterColumnTo,
                        number_uuid:this.filterColumnNumber,
                        per_page:this.perPage,
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.numbers = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
        },
        mounted(){
            this.getTables();
            this.getSms();

        },
        // created(){
        //     this.getOrder()
        // }
    }

</script>
<style>

</style>