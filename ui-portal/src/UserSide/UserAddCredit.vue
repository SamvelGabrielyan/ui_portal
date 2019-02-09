<template>

    <div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== -->
        <div class="row">
            <!-- Column -->
            <div class="col-md-9 col-lg-9">
                <div class="card">
                    <div class="card-header bg-info">
                        <h5 class="m-b-0 text-white">Your Cart (4 items)</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table product-overview">
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product info</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th style="text-align:center">Total</th>
                                    <th style="text-align:center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td width="150"><img src="" alt="iMac" width="80"></td>
                                    <td width="550">
                                        <h5 class="font-500">Rounded Chair</h5>
                                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</p>
                                    </td>
                                    <td>$153</td>
                                    <td width="70">
                                        <input type="text" class="form-control" placeholder="1">
                                    </td>
                                    <td width="150" align="center" class="font-500">$153</td>
                                    <td align="center"><a href="javascript:void(0)" class="text-inverse" title="" data-toggle="tooltip" data-original-title="Delete"><i class="ti-trash text-dark"></i></a></td>
                                </tr>
                                <tr>
                                    <td><img src="" alt="iMac" width="80"></td>
                                    <td>
                                        <h5 class="font-500">Rounded Chair</h5>
                                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</p>
                                    </td>
                                    <td>$153</td>
                                    <td>
                                        <input type="text" class="form-control" placeholder="1">
                                    </td>
                                    <td class="font-500" align="center">$153</td>
                                    <td align="center"><a href="javascript:void(0)" class="text-inverse" title="" data-toggle="tooltip" data-original-title="Delete"><i class="ti-trash text-dark"></i></a></td>
                                </tr>
                                <tr>
                                    <td><img src="" alt="iMac" width="80"></td>
                                    <td>
                                        <h5 class="font-500">Rounded Chair</h5>
                                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</p>
                                    </td>
                                    <td>$153</td>
                                    <td>
                                        <input type="text" class="form-control" placeholder="1">
                                    </td>
                                    <td class="font-500" align="center">$153</td>
                                    <td align="center"><a href="javascript:void(0)" class="text-inverse" title="" data-toggle="tooltip" data-original-title="Delete"><i class="ti-trash text-dark"></i></a></td>
                                </tr>
                                <tr>
                                    <td><img src="" alt="iMac" width="80"></td>
                                    <td>
                                        <h5 class="font-500">Rounded Chair</h5>
                                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</p>
                                    </td>
                                    <td>$153</td>
                                    <td>
                                        <input type="text" class="form-control" placeholder="1">
                                    </td>
                                    <td class="font-500" align="center">$153</td>
                                    <td align="center"><a href="javascript:void(0)" class="text-inverse" title="" data-toggle="tooltip" data-original-title="Delete"><i class="ti-trash text-dark"></i></a></td>
                                </tr>
                                </tbody>
                            </table>
                            <hr>
                            <div class="d-flex no-block align-items-center">
                                <button class="btn btn-dark btn-outline"><i class="fas fa-arrow-left"></i> Continue shopping</button>
                                <div class="ml-auto">
                                    <button class="btn btn-danger"><i class="fa fa fa-shopping-cart"></i> Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Column -->
            <div class="col-md-3 col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">CART SUMMARY</h5>
                        <hr>
                        <small>Total Price</small>
                        <h2>$612</h2>
                        <hr>
                        <!--<button class="btn btn-success">Checkout</button>-->
                        <!--<div class="row">-->
                            <div class="row m-auto">
                                <div id="paypal-buttonn" style="width:200px;"></div>
                                <button class="btn btn-secondary btn-outline">Cancel</button>
                            </div>
                        <!--</div>-->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">For Any Support</h5>
                        <hr>
                        <h4><i class="ti-mobile"></i> 9998979695 (Toll Free)</h4> <small>Please contact with us if you have any questions. We are avalible 24h.</small>
                    </div>
                </div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End PAge Content -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Right sidebar -->
        <!-- ============================================================== -->
        <!-- .right-sidebar -->
        <!-- ============================================================== -->
        <!-- End Right sidebar -->
        <!-- ============================================================== -->
    </div>


</template>

<script>
    import axios from "axios"
    import VueCookies from 'vue-cookies'
    import VuePagination from 'vue-bs-pagination'
    import datePicker from 'vue-bootstrap-datetimepicker'
    import { VueEditor } from 'vue2-editor';

    export default {
        data: function () {
            return {
                token: VueCookies.get('token'),
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
            // 'admin-revew': AdminRevew
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
                axios.get("http://198.245.53.214/api_gsim/v1/user/order/list", {
                    // params: {
                    //     created_on_gt: this.filterColumnStartTime,
                    //     created_on_lt: this.filterColumnEndTime,
                    //     user_name: this.filterColumn,
                    //     order_by: this.sortItem,
                    //     order_dir: order_dir,
                    //     per_page: this.perPage,
                    //     page: this.currentPage - 1
                    // },
                    headers: {
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    console.log(res)
                    this.order_list = res.data.payload.items
                    this.num = res.data.payload.total
                    this.total = Math.ceil(this.num / Number(this.perPage))
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
                        per_page: this.perPage,
                        order_uuid: this.searchOrder
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
                    this.getTables()
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
                }, '#paypal-buttonn');
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

                    axios.post("http://198.245.53.214/api_gsim/v1/user/order/create", {

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
                axios.post("http://198.245.53.214/api_gsim/v1/user/payment/create", {

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

        created(){
            this.getTables()
                // this.GetUsers(),
                // this.getAppTables(),
                // this.getNumbers(),
                // this.GetDropdowns();
        },
        mounted(){
            this.PayPal()
        },



        name: "UserAddCredit"
    }
</script>

<style scoped>

</style>