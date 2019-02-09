<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <div class="ml-1 form-row sms-recording-buttons" style="margin-bottom: 10px;">
                            <div class="col-auto pull-left">
                                <button @click="type = 1,changeActive(true),bool = false,getTables()" class="btn btn-record"
                                        v-bind:class="{ 'btn-danger': isActive }">SMS</button>
                            </div>
                            <div class="col-auto">
                                <button @click="type = 2,changeActive(false),bool = true,getTables()" class="btn btn-record"
                                        v-bind:class="{ 'btn-danger': !isActive }">Recording</button>
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
                                <span>Caller ID</span>
                                <div class="col-md-2">
                                      <input type="text" class="form-control" v-model= "filterColumnCallerId">
                                </div>
                                <span>From</span>
                                <div class="col-md-2">
                                    <date-picker v-model= "filterColumnFrom" :config="options" placeholder="From"></date-picker>     
                                </div>
                                <span>To</span>
                                <div class="col-md-2">
                                    <date-picker v-model= "filterColumnTo" :config="options" placeholder="To"></date-picker> 
                                </div>
                                <div class="col-md-2">
                                    <button class="btn btn-info"  @click="filterColumnOrder()">Search <i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered" style="font-size: .875rem;">
                            <thead>
                                  <tr>
                                      <th @click = "boolsort = !boolsort,SortColumns('to')" style="cursor: pointer;">Number <i class="fa fa-sort" aria-hidden="true"></i></th>
                                      <!--<th @click = "boolsort = !boolsort,SortColumns('uuid')" style="cursor: pointer;">Order uuid</th>-->
                                      <th @click = "boolsort = !boolsort,SortColumns('from_id')" style="cursor: pointer;">Caller ID <i class="fa fa-sort" aria-hidden="true"></i></th>
                                      <th @click = "boolsort = !boolsort,SortColumns('created_on')" style="cursor: pointer;">Date <i class="fa fa-sort" aria-hidden="true"></i></th>
                                      <th v-show="type == 1">Message</th>
                                      <th v-show="type == 2">Recording</th>
                                  </tr>
                            </thead>
                            <tbody>
                                <tr v-for = "item in sms_records" :key = "item.uuid">

                                    <td>{{ item.to }}</td>
                                    <!--<td>{{ item.uuid }}</td>-->
                                    <td>{{ item.from_id }}</td>
                                    <td>{{ item.created_on.split('T').join(' ').split('+').shift().split('.').shift() }}</td>
                                    <td v-show="type == 1">{{ item.msg }}</td>
                                    <td v-show="type == 2" style="width: 25%">
                                        <div class="row">
                                            <div class="col-md-8 col-lg-8">
                                                <button class="btn btn-block"><span class="h6">Download</span></button>
                                                <button class="btn btn-block"><span class="h6">Play</span></button>
                                            </div>
                                        </div>
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
                isActive:true,
                type:1,
                bool:false,
                pagesCount:'',
                sms_records:[],
                total:1,
                currentPage:1,
                perPage: 10,
                eachSide: 1,
                num:0,
                count:10,
                count1:1,
                boolsort:false,
                sortItem:'',

                filterColumnNumber:'',
                filterColumnCallerId:'',
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

        },
        methods:{
            changeActive:function(active){
                this.isActive = active
            },
            getTables: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/sms/list",{ 
                    params:{
                        is_file:this.bool,
                        created_on_gt:this.filterColumnFrom,
                        created_on_lt:this.filterColumnTo,
                        from_id:this.filterColumnCallerId,
                        to:this.filterColumnNumber,
                        per_page:this.perPage,
                    },   
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    console.log(res);
                    this.sms_records = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/sms/list",{
                    params: {
                        is_file:this.bool,
                        created_on_gt:this.filterColumnFrom,
                        created_on_lt:this.filterColumnTo,
                        from_id:this.filterColumnCallerId,
                        to:this.filterColumnNumber,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.sms_records = res.data.payload.items
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
                axios.get("http://88.198.106.121/api_gsim/v1/sms/list",{
                    params: {
                        is_file:this.bool,
                        created_on_gt:this.filterColumnFrom,
                        created_on_lt:this.filterColumnTo,
                        from_id:this.filterColumnCallerId,
                        to:this.filterColumnNumber,
                        order_by:this.sortItem,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.sms_records = res.data.payload.items
                    this.count = Number(this.currentPage*this.perPage)
                    this.count1 = Number(this.count - this.perPage + 1)

                })
            } ,
            SortColumns:function(item){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                this.sortItem = item
                axios.get("http://88.198.106.121/api_gsim/v1/sms/list",{
                    params:{
                        is_file:this.bool,
                        created_on_gt:this.filterColumnFrom,
                        created_on_lt:this.filterColumnTo,
                        from_id:this.filterColumnCallerId,
                        to:this.filterColumnNumber,
                        order_by:item,
                        order_dir:order_dir,
                        per_page:this.perPage,
                        page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.sms_records = res.data.payload.items
                })
            },
            filterColumnOrder:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/sms/list",{
                    params:{
                        is_file:this.bool,
                        created_on_gt:this.filterColumnFrom,
                        created_on_lt:this.filterColumnTo,
                        from_id:this.filterColumnCallerId,
                        to:this.filterColumnNumber,
                        per_page:this.perPage,
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.sms_records = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num/Number(this.perPage))
                })
            }, 
        },
        created(){
            this.getTables(false);
        }
    }
</script>
<style>
</style>