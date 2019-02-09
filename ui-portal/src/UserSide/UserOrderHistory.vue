<template>
<div>
    <div class="row">
        <div v-show="type == 0" class="col-12">
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
                    <div class="modal fade" id="ModalNumbers" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Show Numbers</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody v-for="array in numbersArray">
                                        <tr>
                                            <td>{{array.number_uuid}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 ml-2 mt-1">
                        <div class="form-row">
                            <span>Date</span>
                            <div class="col-md-2">
                                  <date-picker v-model= "filterColumnDateFrom" :config="options" placeholder="From"></date-picker>
                            </div>
                            <span><b>-</b></span>
                            <div class="col-md-2">
                                  <date-picker v-model= "filterColumnDateTo" :config="options" placeholder="To"></date-picker>
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
                                    <th @click = "boolsort = !boolsort,SortColumns('created_on')" style="cursor: pointer;">App <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('created_on')" style="cursor: pointer;">Date <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click= "boolsort = !boolsort,SortColumns('uuid')" style="cursor: pointer;">Order # <i class="fa fa-sort" aria-hidden="true"></i>
                                    </th>
                                    <th @click = "boolsort = !boolsort,SortColumns('duration_type')" style="cursor: pointer;">Type <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('numbers_count')" style="cursor: pointer;">Number Count <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th>Amount</th>
                                    <th @click = "boolsort = !boolsort,SortColumns('payment_typ')" style="cursor: pointer;">Pay With</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Unit Price</th>
                                    <th>Active/Inactive</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for = "item in order_list" :key = "item.uuid" >
                                    <td>{{item.apps[0].app_name}}</td>
                                    <td>{{ item.created_on.split('T').join(' ').split('+').shift().split('.').shift() }}</td>
                                    <td>{{ item.uuid }}</td>
                                    <td>{{ item.duration_type }}</td>
                                    <td><a href="javascript:void(0)"  @click="showNumbers(item.uuid),type = 1">{{ item.numbers_count }}</a></td>
                                    <td>{{ item.cost }}</td>
                                    <td>{{ item.payment_type }}Paypal</td>
                                    <td>{{item.start_date.split('T').join(' ').split('+').shift().split('.').shift()}}</td>
                                    <td>{{item.use_till.split('T').join(' ').split('+').shift().split('.').shift()}}</td>
                                    <td></td>
                                    <td>{{item.enabled}}</td>
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

        <div v-show="type == 1" class="container">
            <button @click="type = 0" class="btn btn-danger">Back to Orders</button>
            <br><br>
            <h2>Numbers Table</h2>
            <table class="table">
                <thead>
                <tr>
                    <th>Number</th>
                </tr>
                </thead>
                <tbody v-for="array in numbersArray">
                <tr>
                    <td>{{array.number_uuid}}</td>
                </tr>
                </tbody>
            </table>
        </div>


        </div>
    </div>
</div>
</template>
<script>
    import axios from "axios"
    import VueCookies from 'vue-cookies'
    import VuePagination from 'vue-bs-pagination'
    import datePicker from 'vue-bootstrap-datetimepicker';
    import UserMyNumbers from './UserMyNumbers.vue'
    // import UserOrderHistory from  './UserOrderHistory.vue'

    export default{
        data:function(){
            return{
                comp_name:'',
                token:VueCookies.get('token'),
                order_list:[],
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
                numbersArray:[],
                type:0,

                filterColumnDateFrom:'',
                filterColumnDateTo:'',
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
            datePicker,
            'user-my-numbers1' 		: UserMyNumbers,
            // 'user-order-history1' 		: UserOrderHistory,
        },
        methods:{
            ChangeComponent:function(comp_name){
                this.comp_name = comp_name
            },
            getTables: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list",{
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    console.log(res);
                    this.order_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
            showNumbers:function(uuid){
                axios.get(`http://88.198.106.121/api_gsim/v1/user/number/list?order_uuid=${uuid}`,{
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    // console.log(res)
                    this.numbersArray = res.data.payload.items;
                    // this.comp_name = 'mynumbers1'
                })
            },
            perPagefunc:function(){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list",{
                    params: {
                        created_on_gt:this.filterColumnDateFrom,
                        created_on_lt:this.filterColumnDateTo,
                        use_till_gt:this.filterColumnFrom,
                        use_till_lt:this.filterColumnTo,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.order_list = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list",{
                    params: {
                        created_on_gt:this.filterColumnDateFrom,
                        created_on_lt:this.filterColumnDateTo,
                        use_till_gt:this.filterColumnFrom,
                        use_till_lt:this.filterColumnTo,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.order_list = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list",{
                    params:{
                        created_on_gt:this.filterColumnDateFrom,
                        created_on_lt:this.filterColumnDateTo,
                        use_till_gt:this.filterColumnFrom,
                        use_till_lt:this.filterColumnTo,
                        order_by:item,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.order_list = res.data.payload.items
                })
            },
            filterColumnOrder:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list",{
                    params:{
                        created_on_gt:this.filterColumnDateFrom,
                        created_on_lt:this.filterColumnDateTo,
                        use_till_gt:this.filterColumnFrom,
                        use_till_lt:this.filterColumnTo,
                        per_page:this.perPage,
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.order_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            },
        },
        created(){
            this.getTables();
        },
    }
    
</script>
<style>
</style>