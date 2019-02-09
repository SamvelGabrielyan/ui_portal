<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <!--<div class="col-sm-12 col-md-6">-->
                        <!--<label>Show-->
                            <!--<select v-model='perPage' @change="perPagefunc()" class=" form-control form-control-sm d-inline" style="width: 75px;">-->
                                <!--<option value="10">10</option>-->
                                <!--<option value="25">25</option>-->
                                <!--<option value="50">50</option>-->
                                <!--<option value="100">100</option>-->
                            <!--</select>-->
                            <!--entries</label>-->
                    <!--</div>-->

                    <div  class="modal fade" id="AppEditConf" tabindex="-1" role="dialog" aria-labelledby="AppEditConf" aria-hidden="true">
                        <div class="modal-dialog" role="document" style="max-width: 855px">
                            <div class="modal-content" style="width: 855px;">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="AppEditConf1">Edit </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="container">

                                    <div class="form-row pl-2 pr-2 mt-2 mb-2">
                                        <div class="col-md-4">
                                            <h4><b><label>App Name</label></b></h4>
                                        </div>
                                        <div class="col-md-8">
                                            <input v-model="app_name_edit" class="form-control" type="text">
                                        </div>
                                    </div>
                                    <div class="form-row pl-2 pr-2 mt-2 mb-2">
                                        <div class="col-md-4">
                                            <h4><b><label>Price Old</label></b></h4>
                                        </div>
                                        <div class="col-md-8">
                                            <input v-model="price_old_edit" class="form-control" min="0" type="number" step="any">
                                        </div>
                                    </div>
                                    <div class="form-row pl-2 pr-2 mt-2 mb-2">
                                        <div class="col-md-4">
                                            <h4><b><label >Price New</label></b></h4>
                                        </div>
                                        <div class="col-md-8">
                                            <input v-model="price_new_edit" class="form-control" min="0" type="number" step="any">
                                        </div>
                                    </div>
                                    <div class="form-row pl-2 pr-2 mt-2 mb-2">
                                        <div class="col-md-4">
                                            <h4><b><label>Keywords</label></b></h4>
                                        </div>
                                        <div class="col-md-6" id="DivForKeywords">
                                            <input class="form-control"  type="text" v-model="keywords_edit.join(',')">
                                        </div>
                                    </div>

                                    <div class="form-row pl-2 pr-2 mt-2 mb-2">
                                        <div class="col-md-4">
                                            <h4><b><label>Days</label></b></h4>
                                        </div>
                                        <div class="col-md-8">
                                            <input v-model="minimum_wait_days_edit" class="form-control" type="text">
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-info" data-dismiss="modal" @click="SaveTable(uuid_edit)">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-striped table-bordered" style="font-size: .875rem;">
                            <thead>
                            <tr>
                                <th @click = "boolsort = !boolsort,SortColumns('app_name')" style="cursor: pointer;">Name <i class="fa fa-sort" aria-hidden="true"></i></th>
                                <th @click = "boolsort = !boolsort,SortColumns('price_old')" style="cursor: pointer;">Old Price <i class="fa fa-sort" aria-hidden="true"></i></th>
                                <th @click = "boolsort = !boolsort,SortColumns('price_new')" style="cursor: pointer;">New Price <i class="fa fa-sort" aria-hidden="true"></i></th>
                                <th @click = "boolsort = !boolsort,SortColumns('minimum_wait_days')" style="cursor: pointer;">Wait days <i class="fa fa-sort" aria-hidden="true"></i></th>
                                <th>Keywords</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for = "table in Tables" :key =
                                    "table.uuid">
                                <td>{{ table.app_name }}</td>
                                <td>{{ table.price_old }}</td>
                                <td>{{ table.price_new }}</td>
                                <td>{{ table.minimum_wait_days }}</td>
                                <td><span v-for="keyword in table.keywords" style="background: grey;color: white" class="ml-2 p-1">{{ keyword }}</span></td>
                                <td>
                                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#AppEditConf" :uuid = table.uuid @click="EditTable(table.uuid)">Edit</button>
                                    <button class="btn btn-danger" data-toggle="modal" data-target="#deleteManagement" @click="showDeleteModal(table.uuid)">Delete</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--:uuid = table.uuid @click="DeleteTable(table.uuid)"-->
                    <!--<div class="row">-->
                        <!--<div class="col-sm-12 col-md-5">-->
                            <!--<div class="dataTables_info" id="zero_config_info" role="status" aria-live="polite">-->
                                <!--Showing {{ count1 }} to {{ count }} of {{ num }} entries-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<nav class="col-sm-12 col-md-7">-->
                            <!--<ul class="pagination justify-content-end" @click="paginationTables()">-->
                                <!--<v-pagination :total="total" v-model="currentPage"></v-pagination>-->
                            <!--</ul>-->
                        <!--</nav>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
        <div class="modal fade" id="deleteManagement" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Please confirm to expire this order.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                        <button type="button" class="btn btn-danger" @click="DeleteTable()">Delete</button>
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
        name: "AdminApp",
        data:function(){
            return{
                token:VueCookies.get('admintoken'),
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
                filterColumn:'',
                filterColumnStartTime:'',
                filterColumnEndTime:'',
                Tables:[],
                app_name_edit:'',
                keywords_edit:[],
                minimum_wait_days_edit:'',
                price_old_edit:'',
                price_new_edit:'',
                uuid_edit:'',
                deletedManId:'',
                users:[],
                filterColumnWait:'',
                filterColumnApp:'',
                filterColumnOld:'',
                filterColumnNew:'',

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
        methods: {

            getTables: function () {
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/app/list", {
                    params:{
                        app_gt:this.filterColumnApp,
                        old_lt:this.filterColumnOld,
                        new_lt:this.filterColumnNew,
                        wait_lt:this.filterColumnWait,
                        // per_page:this.perPage,
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.Tables = res.data.payload.items
                })
            },
            SortColumns:function(item){
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                this.sortItem = item
                axios.get("http://88.198.106.121/api_gsim/v1/app/list",{
                    params:{
                        app_gt:this.filterColumnApp,
                        old_lt:this.filterColumnOld,
                        new_lt:this.filterColumnNew,
                        wait_lt:this.filterColumnWait,
                        order_by:item,
                        order_dir:order_dir,
                        // per_page:this.perPage,
                        // page:this.currentPage-1
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },
                }).then((res)=>{
                    this.Tables = res.data.payload.items
                })
            },
            DeleteTable:function () {
                var uuid = this.deletedManId;
                axios.delete(`http://88.198.106.121/api_gsim/v1/app/${uuid}`,{
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=> {
                    this.getTables();
                    this.deletedManId = '';
                })
            },
            showDeleteModal:function(item){
                this.deletedManId = item;
            },
            EditTable:function (uuid) {
                axios.get(`http://88.198.106.121/api_gsim/v1/app/${uuid}`,{
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=> {
                    // console.log(res)
                    this.uuid_edit = res.data.payload.uuid;
                    this.app_name_edit = res.data.payload.app_name;
                    this.keywords_edit = res.data.payload.keywords;
                    this.price_new_edit = res.data.payload.price_new;
                    this.price_old_edit = res.data.payload.price_old;
                    this.minimum_wait_days_edit = res.data.payload.minimum_wait_days;
                })
            },
            SaveTable:function (uuid_edit) {
                axios.patch(`http://88.198.106.121/api_gsim/v1/app/${uuid_edit}`, {
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.getTables();
                    alert("Success")
                }, () => {
                    alert("Error")
                })
            }

        },
        created(){
            this.getTables();
        },
    }
</script>

<style scoped>

</style>