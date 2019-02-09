<template>
<div>
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
                    <div class="mb-3 ml-2 mt-1">
                        <div class="form-row">
                            <span>Paid Between</span>
                            <div class="col-md-2">
                                  <date-picker v-model= "filterColumnPaidFrom" :config="options" placeholder="From"></date-picker>
                            </div>
                            <span><b>-</b></span>
                            <div class="col-md-2">
                                  <date-picker v-model= "filterColumnPaidTo" :config="options" placeholder="To"></date-picker>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-info"  @click="filterColumnOrder()">Search <i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table id="zero_config" class="table table-striped table-bordered" style="font-size: .875rem;">
                            <thead>
                                <tr>
                                    <th @click = "boolsort = !boolsort,SortColumns('paid_on')" style="cursor: pointer;">Date <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('order_uuid')">Order #</th>
                                    <th>Pay With</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in payment_list" :key = "item.uuid">
                                    <td>{{ item.paid_on.split('T').join(' ').split('+').shift().split('.').shift() }}</td>
                                    <td>{{ item.order_uuid }}</td>
                                    <td>{{ item.payment_gateway }}</td>
                                    <td>{{ item.amount }}</td>  
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
    import axios from "axios"
    import VueCookies from 'vue-cookies'
    import VuePagination from 'vue-bs-pagination'
    import datePicker from 'vue-bootstrap-datetimepicker';

    
    export default {
        data:function(){
            return{
                token:VueCookies.get('token'),
                payment_list:[],
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

                filterColumnPaidFrom:'',
                filterColumnPaidTo:'',

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
                axios.get("http://88.198.106.121/api_gsim/v1/user/payment/list",{
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    console.log(res)
                    this.payment_list = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/user/payment/list",{
                    params: {
                        paid_on_gt:this.filterColumnPaidFrom,
                        paid_on_lt:this.filterColumnPaidTo,
                        order_uuid_gt:this.filterColumnPaidFrom,
                        order_uuid_lt:this.filterColumnPaidTo,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    // console.log(res)
                    this.payment_list = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/user/payment/list",{
                    params: {
                        paid_on_gt:this.filterColumnPaidFrom,
                        paid_on_lt:this.filterColumnPaidTo,
                        order_uuid_gt:this.filterColumnPaidFrom,
                        order_uuid_lt:this.filterColumnPaidTo,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.payment_list = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/user/payment/list",{
                    params:{
                        paid_on_gt:this.filterColumnPaidFrom,
                        paid_on_lt:this.filterColumnPaidTo,
                        order_uuid_gt:this.filterColumnPaidFrom,
                        order_uuid_lt:this.filterColumnPaidTo,
                        order_by:item,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.payment_list = res.data.payload.items
                })
            },
            filterColumnOrder:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/user/payment/list",{
                    params:{
                        paid_on_gt:this.filterColumnPaidFrom,
                        paid_on_lt:this.filterColumnPaidTo,
                        order_uuid_gt:this.filterColumnPaidFrom,
                        order_uuid_lt:this.filterColumnPaidTo,
                        per_page:this.perPage,
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.payment_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                    // console.log(res)
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