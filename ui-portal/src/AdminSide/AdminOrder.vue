<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">

                    <div  class="modal fade" id="NumberConf" tabindex="-1" role="dialog" aria-labelledby="NumberConf" aria-hidden="true">
                        <div class="modal-dialog" role="document" style="max-width: 855px">
                            <div class="modal-content" style="width: 855px;">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="NumberConf1">Numbers</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="container">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Numbers</th>
                                        </tr>
                                        </thead>
                                        <tbody v-for="number in Numbers">
                                        <tr>
                                            <td>{{number.number_uuid}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                        <label v-show="type == 0">Show
                        <select v-model='perPage' @change="perPagefunc()" class=" form-control form-control-sm d-inline" style="width: 75px;">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        entries</label>
                    <div v-show="type == 0" class="mb-3">
                        <div class="form-row">
                            <span>Order</span>
                            <div class="col-md-2">
                                <input class="form-control" v-model= "searchOrder">
                            </div>
                            <span>User</span>
                            <!--<div class="col-md-2">-->
                                <!--<input list="browsers" @click="Empty()" class="form-control" v-model= "filterColumn">-->

                                <!--<datalist id="browsers">-->
                                    <!--<option v-for = "user in users">{{user.email}}</option>-->
                                <!--</datalist>-->
                            <!--</div>-->

                            <div class="col">
                                <select class="form-control" v-model = "filterColumn">
                                    <option v-for="items in users">{{ items.email }}</option>
                                </select>
                            </div>

                            <span>Start</span>
                            <div class="col-md-2">
                                <date-picker v-model= "filterColumnStartTime" :config="options"></date-picker>
                            </div>
                            <span>End</span>
                            <div class="col-md-2">
                                <date-picker v-model= "filterColumnEndTime" :config="options"></date-picker>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-info" @click="filterColumnOrder()">Search <i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="ml-1 form-row sms-recording-buttons" style="margin-bottom: 10px;">
                        <div class="col-auto">
                            <button @click="type = 0" class="btn btn-record">Orders</button>
                        </div>
                        <div class="col-auto pull-left">
                            <button @click="type = 1" class="btn btn-record">Revew</button>
                        </div>
                    </div>

                    <div v-show="type == 0" class="ml-1 form-row sms-recording-buttons" style="margin-bottom: 10px;">
                        <div class="col-auto">
                            <button @click="MassEdit()"  class="btn btn-primary">Active All</button>
                        </div>
                        <div class="col-auto pull-left">
                            <button  class="btn btn-danger">Deactive All</button>
                        </div>
                    </div>

                    <br>
                    <div v-show="type == 1" class="table-responsive">
                        <div class="container pb-3">
                            <h3>Number of Day / Year</h3>
                            <table class="table table-striped table-bordered" style="font-size: .875rem;">
                                <thead>
                                <tr>
                                    <th># of Number</th>
                                    <th style="cursor: pointer;">Available Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>

                            <div class="col-sm-12 col-md-6 m-auto">
                                <div class="card bg-info">
                                    <div class="card-body text-white">
                                        <div class="d-flex flex-row">
                                            <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                            <div class="p-10 align-self-center">
                                                <h4 class="m-b-0 ml-2">Total Price</h4>
                                            </div>
                                            <div class="ml-auto align-self-center">
                                                <h2 class="font-medium m-b-0">$2690</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row m-auto">
                                    <div id="paypal-button" style="width:200px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-show="type == 0" class="table-responsive">
                        <table class="table table-striped table-bordered" style="font-size: .875rem;">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" @click="CheckAll()" class="check_all" v-model="selectAll"  value=""></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('user_name')" style="cursor: pointer;">Email <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('uuid')" style="cursor: pointer;">Order # <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('created_on')" style="cursor: pointer;">Date <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th>Amount</th>
                                    <th @click = "boolsort = !boolsort,SortColumns('duration_type')" style="cursor: pointer;">Type<i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('numbers_count')" style="cursor: pointer;">
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#NumberConf"># </a>Of Number <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th>#Of APP</th>
                                    <th>Created On</th>
                                    <th>Started On</th>
                                    <th>Ended On</th>
                                    <th>Active/Inactive</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for = "item in order_list" :key = "item.uuid">
                                    <td><input type="checkbox" @click="Check(item.uuid)"  v-model="selected" :value="item.uuid" class="select_all"></td>
                                    <td>{{ item.user_name }}</td>
                                    <td>{{ item.uuid }}</td>
                                    <td>{{ item.created_on.split('T').join(' ').split('.').shift() }}</td>
                                    <td>{{ item.cost }}</td>
                                    <td>{{ item.duration_type }}</td>
                                    <td>{{ item.numbers_count }}</td>
                                    <td>{{item.apps_count}}</td>
                                    <td>{{ item.created_on.split('T').join(' ').split('.').shift() }}</td>
                                    <td>{{ item.start_date.split('T').join(' ').split('+').shift().split('.').shift() }}</td>
                                    <td>{{ item.use_till.split('T').join(' ').split('+').shift().split('.').shift() }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button class="btn btn-success" title="Active">Active</button>
                                            <button class="btn btn-danger"  title="Inactive">Inactive</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            <button class="btn btn-danger" @click="DeleteEditOrder(item.uuid)" data-toggle="modal" data-target="#DeleteOrder" title="Delete"><i class="mdi mdi-delete"></i></button>
                                            <button class="btn btn-info" @click="DeleteEditOrder(item.uuid)" data-toggle="modal" data-target="#ExpireOrder" title="Expire"><i class="mdi mdi-clock-fast"></i></button>
                                            <button class="btn btn-info" @click="DeleteEditOrder(item.uuid)" data-toggle="modal" data-target="#EditOrder" title="Edit"><i class="mdi mdi-pencil"></i></button>
                                            <button class="btn btn-info" @click="DeleteEditOrder(item.uuid)" data-toggle="modal" data-target="#EmailOrder" title="Edit"><i class="mdi mdi-email"></i></button>
                                            <button class="btn btn-info" @click="DeleteEditOrder(item.uuid)" data-toggle="modal" data-target="#HttpOrder" title="Edit"><i class="mdi mdi-cellphone-link"></i></button>
                                            <!--<button type="button" class="btn btn-sm btn-toggle" data-toggle="button" aria-pressed="false"></button>-->
                                        </div>
                                        <!--<div class="col" >-->
                                            <!--<input type="checkbox" @click="ChangeActive(item.uuid)" checked data-toggle="toggle" data-on="Active" data-off="Inactive" data-onstyle="info" data-offstyle="info" data-width="100">-->
                                            <!--&lt;!&ndash;<button type="button" class="btn btn-sm btn-toggle" data-toggle="button" aria-pressed="false"></button>&ndash;&gt;-->
                                        <!--</div>-->
                                        <!--<div class="cZ-->

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-show="type == 0" v-if="num > 10" class="row">
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
        <div class="modal fade" id="DeleteOrder" tabindex="-1" role="dialog" aria-labelledby="DeleteOrderLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="DeleteOrderLabel">Confirmation</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  Please confirm to expire this order.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                <button type="button" class="btn btn-danger" @click="ConfirmDelOrder()" data-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="ExpireOrder" tabindex="-1" role="dialog" aria-labelledby="ExpireOrderLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ExpireOrderLabel">Confirmation</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Please confirm to expire this order.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                <button type="button" class="btn btn-danger" @click="ConfirmExpire()" data-dismiss="modal">Expire</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="EditOrder" tabindex="-1" role="dialog" aria-labelledby="EditOrder" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="EditOrder">Edit Order</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>End Date</label></b></h4>
                </div>
                <div class="col-md-8">
                    <date-picker v-model= "OrderDuration" :config="options"></date-picker>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>App</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input list="browsers3" class="form-control" v-model= "OrderApp">

                    <datalist id="browsers3">
                        <option v-for = "app in AppList">{{app.app_name}}</option>
                    </datalist>
                </div>
              </div>
              <div class="form-row pl-2 mt-2 mb-3">
                <div class="col-md-4">
                    <h4><b><label>Type</label></b></h4>
                </div>
                <div class="col" @click="OrderType = !OrderType">
                    <input type="checkbox" checked data-toggle="toggle" data-on="Enable" data-off="Disable" data-onstyle="info" data-offstyle="info" data-width="100">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal" @click="EditOrder()">Edit</button>
              </div>
            </div>
          </div>
        </div>

        <div  class="modal fade" id="EmailOrder" tabindex="-1" role="dialog" aria-labelledby="EmailOrder" aria-hidden="true">
          <div class="modal-dialog" role="document" style="max-width: 855px">
            <div class="modal-content" style="width: 855px;">
              <div class="modal-header">
                <h5 class="modal-title" id="EmailOrder1">Edit Order</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h3 class="mt-2">SMS</h3>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>To</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="ToEmail" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>Subject</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="SubjectEmail" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Content</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <vue-editor v-model="Content"></vue-editor>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Tags</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2 mb-2">
                <button class="btn btn-info ml-2" @click = "Content += '{Msg}'">{Msg}</button>
                <button class="btn btn-info ml-2" @click = "Content += '{To}'">{To}</button>
                <button class="btn btn-info ml-2" @click = "Content += '{From_Id}'">{From_Id}</button>
                <button class="btn btn-info ml-2" @click = "Content += '{File}'">{File}</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal" @click="EmailOrder()">Save</button>
              </div>
              <h3>RECORDS</h3>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>To</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="ToEmail1" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>Subject</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="SubjectEmail1" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Content</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <vue-editor v-model="Content1"></vue-editor>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Tags</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2 mb-2">
                <button class="btn btn-info ml-2" @click = "Content1 += '{Msg}'">{Msg}</button>
                <button class="btn btn-info ml-2" @click = "Content1 += '{To}'">{To}</button>
                <button class="btn btn-info ml-2" @click = "Content1 += '{From_Id}'">{From_Id}</button>
                <button class="btn btn-info ml-2" @click = "Content1 += '{File}'">{File}</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal" @click="EmailOrderRec()">Save</button>
              </div>
            </div>
          </div>
        </div>


        <div  class="modal fade" id="HttpOrder" tabindex="-1" role="dialog" aria-labelledby="HttpOrder" aria-hidden="true">
          <div class="modal-dialog" role="document" style="max-width: 855px">
            <div class="modal-content" style="width: 855px;">
              <div class="modal-header">
                <h5 class="modal-title" id="HttpOrder">Edit Order</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h3 class="mt-2">SMS</h3>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>To</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="ToEmail" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>Subject</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="SubjectEmail" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Content</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <vue-editor v-model="Content"></vue-editor>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Tags</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2 mb-2">
                <button class="btn btn-info ml-2" @click = "Content += '{Msg}'">{Msg}</button>
                <button class="btn btn-info ml-2" @click = "Content += '{To}'">{To}</button>
                <button class="btn btn-info ml-2" @click = "Content += '{From_Id}'">{From_Id}</button>
                <button class="btn btn-info ml-2" @click = "Content += '{File}'">{File}</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal" @click="HttpOrder()">Save</button>
              </div>
              <h3>RECORDS</h3>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>To</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="ToEmail1" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <div class="col-md-4">
                    <h4><b><label>Subject</label></b></h4>
                </div>
                <div class="col-md-8">
                    <input v-model="SubjectEmail1" class="form-control" type="text">
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Content</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2">
                <vue-editor v-model="Content1"></vue-editor>
              </div>
              <div class="form-row pl-2 pr-2 mt-3">
                <div class="col-md-4">
                    <h4><b><label>Tags</label></b></h4>
                </div>
              </div>
              <div class="form-row pl-2 pr-2 mt-2 mb-2">
                <button class="btn btn-info ml-2" @click = "Content1 += '{Msg}'">{Msg}</button>
                <button class="btn btn-info ml-2" @click = "Content1 += '{To}'">{To}</button>
                <button class="btn btn-info ml-2" @click = "Content1 += '{From_Id}'">{From_Id}</button>
                <button class="btn btn-info ml-2" @click = "Content1 += '{File}'">{File}</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal" @click="HttpOrderRec()">Save</button>
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
    import { VueEditor } from 'vue2-editor'
    import datePicker from 'vue-bootstrap-datetimepicker';
    import AdminRevew from './AdminRevew.vue'


    export default {
        data: function () {
            return {
                token: VueCookies.get('admintoken'),
                order_list: [],
                pagesCount: '',
                total: 1,
                currentPage: 1,
                perPage: 10,
                eachSide: 1,
                num: 0,
                isActive: true,
                type: 0,
                count: 10,
                count1: 1,
                boolsort: false,
                sortItem: '',
                filterColumn: '',
                searchOrder: '',
                filterColumnStartTime: '',
                filterColumnEndTime: '',
                order_id: '',
                selected:[],

                OrderDuration: '',
                OrderApp: '',
                OrderType: true,
                comp_name: 'orders',

                Content: '',
                SubjectEmail: '',
                ToEmail: '',

                Content1: '',
                SubjectEmail1: '',
                ToEmail1: '',
                AppList: [],
                Numbers: [],

                users: [],

                options: {
                    format: 'MM/DD/YYYY',
                    useCurrent: false,
                }
            }
        },
        components: {
            'v-pagination': VuePagination,
            VueEditor,
            datePicker,
            'admin-revew': AdminRevew
        },
        methods: {
            ChangeComponent: function (comp_name) {
                this.comp_name = comp_name
            },
            getTables: function () {
                if (this.boolsort == false) {
                    var order_dir = 'desc'
                } else {
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list", {
                    params: {
                        created_on_gt: this.filterColumnStartTime,
                        created_on_lt: this.filterColumnEndTime,
                        user_name: this.filterColumn,
                        order_by: this.sortItem,
                        order_dir: order_dir,
                        per_page: this.perPage,
                        page: this.currentPage - 1
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    // console.log(res)
                    this.order_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num / Number(this.perPage))
                })
            },
            CheckAll: function (uuid) {
                axios.get(`http://88.198.106.121/api_gsim/v1/user/order/list?uuid=${uuid}`, {
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    // console.log(res)
                })
            },
            Check: function (uuid) {
                axios.get(`http://88.198.106.121/api_gsim/v1/user/order/list?uuid=${uuid}`, {
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    // console.log(res)

                })
            },
            MassEdit: function (uuid) {
                axios.patch(`http://88.198.106.121/api_gsim/v1/user/order/mass_edit`, {
                    headers: {
                        'X-Auth-Token': this.token,
                    },
                    params:{
                        'action' : 'disabled',
                        'orders' : uuid
                    }
                }).then((res) => {
                    // console.log(res)

                })
            },
            getNumbers: function () {
                if (this.boolsort == false) {
                    var order_dir = 'desc'
                } else {
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/number/list?order_uuid=cd3a9f37-c351-43b9-a6cf-2f7af62c8c96", {
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    // console.log(res)
                    this.Numbers = res.data.payload.items

                })
            },
            getAppTables: function () {
                if (this.boolsort == false) {
                    var order_dir = 'desc'
                } else {
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/app/list", {
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    // console.log(res)
                    this.AppList = res.data.payload.items

                })
            },
            perPagefunc: function () {
                if (this.boolsort == false) {
                    var order_dir = 'desc'
                } else {
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list", {
                    params: {
                        created_on_gt: this.filterColumnStartTime,
                        created_on_lt: this.filterColumnEndTime,
                        user_name: this.filterColumn,
                        order_by: this.sortItem,
                        order_dir: order_dir,
                        per_page: this.perPage,
                        page: this.currentPage - 1
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    },
                }).then((res) => {
                    this.order_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num / Number(this.perPage))
                    this.count = Number(this.currentPage * this.perPage)
                    this.count1 = Number(this.count - this.perPage + 1)
                })
            },
            paginationTables: function () {
                if (this.boolsort == false) {
                    var order_dir = 'desc'
                } else {
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list", {
                    params: {
                        created_on_gt: this.filterColumnStartTime,
                        created_on_lt: this.filterColumnEndTime,
                        user_name: this.filterColumn,
                        order_by: this.sortItem,
                        order_dir: order_dir,
                        per_page: this.perPage,
                        page: this.currentPage - 1
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    },
                }).then((res) => {
                    this.order_list = res.data.payload.items
                    this.count = Number(this.currentPage * this.perPage)
                    this.count1 = Number(this.count - this.perPage + 1)
                })
            },
            SortColumns: function (item) {
                if (this.boolsort == false) {
                    var order_dir = 'desc'
                } else {
                    var order_dir = 'asc'
                }
                this.sortItem = item
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list", {
                    params: {
                        created_on_gt: this.filterColumnStartTime,
                        created_on_lt: this.filterColumnEndTime,
                        user_name: this.filterColumn,
                        order_by: item,
                        order_dir: order_dir,
                        per_page: this.perPage,
                        page: this.currentPage - 1
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    },
                }).then((res) => {
                    this.order_list = res.data.payload.items
                })
            },
            filterColumnOrder: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/user/order/list", {
                    params: {
                        created_on_gt: this.filterColumnStartTime,
                        created_on_lt: this.filterColumnEndTime,
                        user_name: this.filterColumn,
                        // per_page: this.perPage,
                        uuid: this.searchOrder
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.order_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num / Number(this.perPage))
                })
            },
            DeleteEditOrder: function (id) {
                this.order_id = id
            },
            ConfirmDelOrder: function () {
                axios.delete("http://88.198.106.121/api_gsim/v1/order/" + this.order_id, {
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.getTables();
                    alert("Success")
                }, () => {
                    alert("Error")
                })
            },
            ConfirmExpire() {
                axios.patch("http://88.198.106.121/api_gsim/v1/order/" + this.order_id + "/expire", {

                        uuid: this.order_id
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                    this.getTables()
                    alert('Success')
                }, () => {
                    alert('Error')
                })
            },
            Empty: function () {

                // if (this.filterColumn === '') {

                this.filterColumn = '';

                // }
            },
            EditOrder: function () {
                axios.patch("http://88.198.106.121/api_gsim/v1/user/order/" + this.order_id, {

                        uuid: this.order_id,
                        enabled: this.OrderType,
                        duration: Number(this.OrderDuration),
                        apps: [{app_uuid: this.OrderApp}]
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                    this.getTables()
                    alert('Success')
                }, () => {
                    alert('Error')
                })
            },
            ChangeActive: function (uuid) {
                axios.patch(`http://88.198.106.121/api_gsim/v1/user/order/abcd`, {

                        // uuid: this.order_id,
                        // enabled: this.OrderType,
                        // duration: Number(this.OrderDuration),
                        // apps: [{app_uuid: this.OrderApp}]
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                        console.log(res);
                    this.getTables();
                    alert('Success')
                }, () => {
                    alert('Error')
                })
            },
            EmailOrder: function () {
                axios.patch("http://88.198.106.121/api_gsim/v1/user/order/" + this.order_id, {

                        forwardings: [{
                            uuid: this.order_id,
                            url: this.ToEmail,
                            type: 'email',
                            delivery: 'sms',
                            data: this.Content,
                            headers: this.SubjectEmail,
                        }]
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                    this.getTables()
                    alert('Success')
                }, () => {
                    alert('Error')
                })
            },
            EmailOrderRec: function () {
                axios.patch("http://88.198.106.121/api_gsim/v1/user/order/" + this.order_id, {

                        forwardings: [{
                            uuid: this.order_id,
                            url: this.ToEmail1,
                            type: 'email',
                            delivery: 'recording',
                            data: this.Content1,
                            headers: this.SubjectEmail1,
                        }]
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                    this.getTables()
                    alert('Success')
                }, () => {
                    alert('Error')
                })
            },
            HttpOrder: function () {
                axios.patch("http://88.198.106.121/api_gsim/v1/user/order/" + this.order_id, {

                        forwardings: [{
                            uuid: this.order_id,
                            url: this.ToEmail,
                            type: 'http_get',
                            delivery: 'sms',
                            data: this.Content,
                            headers: this.SubjectEmail,
                        }]
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                    this.getTables()
                    alert('Success')
                }, () => {
                    alert('Error')
                })
            },
            HttpOrderRec: function () {
                axios.patch("http://88.198.106.121/api_gsim/v1/user/order/" + this.order_id, {

                        forwardings: [{
                            uuid: this.order_id,
                            url: this.ToEmail1,
                            type: 'http_get',
                            delivery: 'recording',
                            data: this.Content1,
                            headers: this.SubjectEmail1,
                        }]
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                    this.getTables()
                    alert('Success')
                }, () => {
                    alert('Error')
                })
            },
            GetUsers: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/user/list", {
                    params: {
                        per_page: 1000
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.users = res.data.payload.items
                })
            },


            GetDropdowns: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/app/list", {
                    params: {
                        per_page: 1000
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.App = res.data.payload.items
                })

                axios.get("http://88.198.106.121/api_gsim/v1/country/list", {
                    params: {
                        per_page: 250
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    this.Country = res.data.payload.items
                })
            },
            PayPal: function () {
                var CreateOrder = this.CreateOrder
                var CreatePayment = this.CreatePayment
                paypal.Button.render({

                    env: 'sandbox',
                    client: {
                        sandbox: 'AYfl9xN4IVExkcUn9Q6bMEMYoT_Cr0R2DZ2A5LxGCbYV01mNYUIUM_-Pq9i-aN33yqgK4lIM0-JNaaSJ'
                    },

                    locale: 'en_US',
                    style: {
                        size: 'small',
                        color: 'gold',
                        shape: 'pill',
                    },
                    payment: function (data, actions) {
                        CreateOrder()
                        return actions.payment.create({
                            transactions: [{
                                amount: {
                                    total: '0.01',
                                    currency: 'USD'
                                }
                            }]
                        });
                    },
                    onAuthorize: function (data, actions) {
                        return actions.payment.execute()
                            .then(function () {
                                window.alert('Thank you for your purchase!');
                                CreatePayment()
                            });
                    }
                }, '#paypal-button');
            },
            AddArray: function () {
                this.Orders.AppData.push({ncount: '', use_new: true, app_uuid: ''})
            },
            DelInp: function (index) {
                var element = document.getElementById("divforapp");
                var child = document.getElementById("b_" + index);
                element.removeChild(child);

                this.Orders.AppData.splice(index + 1, 1, {ncount: '', use_new: true, app_uuid: ''})
            },
            CreateOrder: function () {
                this.buttonAble = true
                axios.get("http://88.198.106.121/api_gsim/v1/country/list", {
                    params: {
                        name: this.CountryName,
                        per_page: 250
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {

                    if (res.data.payload.items == '' || !this.CountryName) {
                        this.buttonAble = false
                        return
                    }

                    this.Orders.CountryId = res.data.payload.items[0].country_uuid

                    for (let i of this.Orders.AppData)
                        if (i.ncount != '' && i.app_uuid != '') {
                            this.Orders.AppData1.push(i);
                        }

                    axios.post("http://88.198.106.121/api_gsim/v1/user/order/create", {

                            duration_type: "one time",
                            duration: Number(this.Orders.DaysCount),
                            country_uuid: this.Orders.CountryId,
                            billing_plan: "prepaid",
                            apps: this.Orders.AppData1
                        },

                        {
                            headers: {
                                'X-Auth-Token': this.token,
                            }
                        }).then((res) => {
                        this.SendAxios()
                    })
                })
            },
            SendAxios: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/app/list", {
                    params: {
                        app_name: this.Orders.AppData1[this.i].app_uuid,
                        per_page: 1000
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    if (this.i < this.Orders.AppData1.length) {
                        if (this.Orders.AppData1[this.i].use_new) {
                            var price = res.data.payload.items[0].price_new
                        }
                        else {
                            var price = res.data.payload.items[0].price_old
                        }
                        this.Amount += Number(price) * Number(this.Orders.AppData1[this.i].ncount) * Number(this.Orders.DaysCount)

                        this.SendAxios()
                        this.i++

                    }
                    else {
                        this.Amount1 = []
                        this.Amount1.push(this.Amount)
                        this.Amount = 0
                        this.buttonAble = false
                    }
                })
            },
            CreatePayment: function () {
                axios.post("http://88.198.106.121/api_gsim/v1/user/payment/create", {

                        payment_gateway: 'paypal',
                        paid_on: new Date(),
                        amount: this.Amount
                    },
                    {
                        headers: {
                            'X-Auth-Token': this.token,
                        }
                    }).then((res) => {
                    console.log(res)
                })
            }
        },

        computed: {
            selectAll: {
                get: function () {
                    return this.order_list ? this.selected.length == this.order_list.length : false;
                },
                set: function (value) {
                    var selected = [];

                    if (value) {
                        this.order_list.forEach(function (item) {
                            selected.push(item.uuid);
                        });
                    }

                    this.selected = selected;
                    this.MassEdit(this.selected);

                    for (var i = 0;i < (this.selected).length;i++ ) {
                        this.CheckAll(this.selected[i]);
                    }
                }
            }
        },

        created(){
            this.getTables(),
            this.GetUsers(),
            this.getAppTables(),
            this.getNumbers(),
            this.GetDropdowns();
                    },
        mounted(){
            this.PayPal()
        },
    }
</script>
<style>
  
</style>