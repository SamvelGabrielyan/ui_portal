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
                                        <th @click = "boolsort = !boolsort,SortColumns('paid_on')" style="cursor: pointer;">From</th>
                                        <th>To</th>
                                        <th>APP</th>
                                        <th>Price</th>
                                        <th>Message</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in arr" :key = "item.uuid">
                                        <td>{{ item.price_old }}</td>
                                        <td>{{ item.price_new }}</td>
                                        <td>{{ item.app_name }}</td>
                                        <td>{{ item.amount }}</td>
                                        <td>{{ item.amount }}</td>
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
         name: "UserPaypeyHistory",
         data:function(){
             return{
                 token:VueCookies.get('token'),
                 arr:[],

             }
         },
         methods:{

             getTables:function () {
                 axios.get("http://88.198.106.121/api_gsim/v1/app/list",{
                     headers:{
                         'X-Auth-Token': this.token,
                     }
                 }).then((res)=>{

                     console.log(res);

                     this.arr = res.data.payload.items;
                     // this.payment_list = res.data.payload.items
                     // this.num = res.data.payload.total
                     // this.total = Math.ceil(this.num/Number(this.perPage))
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