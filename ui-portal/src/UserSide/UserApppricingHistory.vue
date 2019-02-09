<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="zero_config" class="table table-striped table-bordered" style="font-size: .875rem;">
                                <thead>
                                <tr>
                                    <th @click = "boolsort = !boolsort,SortColumns('app_name')" style="cursor: pointer;">APP Name <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th>Keyword(s)</th>
                                    <th @click = "boolsort = !boolsort,SortColumns('price_old')" style="cursor: pointer;">Old Price <i class="fa fa-sort" aria-hidden="true"></i></th>
                                    <th @click = "boolsort = !boolsort,SortColumns('price_new')" style="cursor: pointer;">New Price <i class="fa fa-sort" aria-hidden="true"></i></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in arr" :key = "item.uuid">
                                    <td>{{ item.app_name }}</td>
                                    <td><span v-for="keyword in item.keywords" style="background: grey;color: white" class="ml-2 p-1">{{ keyword }}</span></td>
                                    <td>{{ item.price_old }}</td>
                                    <td>{{ item.price_new }}</td>
                                </tr>
                                </tbody>
                            </table>
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
    export default {
        name: "UserApppricingHistory",
        data:function(){
            return{
                token:VueCookies.get('token'),
                arr:[],
                boolsort: false,
                sortItem:'',
                filterColumnApp:'',
                filterColumnOld:'',
                filterColumnNew:'',

            }
        },
        methods:{

            getTables:function () {
                if(this.boolsort == false){
                    var order_dir = 'desc'
                }else{
                    var order_dir = 'asc'
                }
                axios.get("http://88.198.106.121/api_gsim/v1/app/list",{
                    params:{
                        app_gt:this.filterColumnApp,
                        old_lt:this.filterColumnOld,
                        new_lt:this.filterColumnNew,
                        // per_page:this.perPage,
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    },

                }).then((res)=>{
                    this.arr = res.data.payload.items;
                    // console.log(res);
                    })
                },
            SortColumns: function (item) {
                if (this.boolsort == false) {
                    var order_dir = 'desc'
                } else {
                    var order_dir = 'asc'
                }
                this.sortItem = item;
                axios.get("http://88.198.106.121/api_gsim/v1/app/list", {
                    params: {
                        app_gt:this.filterColumnApp,
                        old_lt:this.filterColumnOld,
                        new_lt:this.filterColumnNew,
                        order_dir:order_dir,
                        order_by:item
                    },
                    headers: {
                        'X-Auth-Token': this.token,
                    },
                }).then((res) => {
                    this.arr = res.data.payload.items;
                })
            },
            },
        created(){
        this.getTables();
        }

        }
</script>

<style scoped>

</style>