<template>
    <div id="features2" class="wrap-container8040 " style=" background: #191c22;">
        <div class="container table-responsive">
            <h5 style="color: white;">Send SMS Messages to these numbers and see inbound messages below</h5>
           <table class="table" style="color: white;">
             <thead>
               <tr>
                 <th scope="col">[Number]</th>
                 <th scope="col">[Country]</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for = "item in number_list">
                 <td>{{ item.number_uuid }}</td>
                 <td>Unated States</td>
               </tr>
             </tbody>
           </table>
        </div>

        <div class="container table-responsive">
            <h5 style="color: white;">Inbound Messages -(Refresh to see latest)</h5>
           <table class="table" style="color: white;">
             <thead>
               <tr>
                 <th scope="col">[Time]</th>
                 <th scope="col">[From]</th>
                 <th scope="col">[To]</th>
                 <th scope="col">[Message]</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for = "item in sms_records" :key = "item.uuid">
                 <td>{{ item.send_time.split('T').join(' ').split('+').shift() }}</td>
                 <td>{{ item.from_id }}</td>
                 <td>{{ item.to }}</td>
                 <td>{{ item.msg }}</td>
               </tr>
             </tbody>
           </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data:function(){
            return{
                token:'',
                sms_records:[],
                number_list:[]
            }
        },
        methods:{
            getTables: function () {
                axios.post("http://88.198.106.121/api_gsim/v1/auth",{

                    user_name:'upamanyuakash@gmail.com',
                    password:'12345678'

                }).then((res)=>{
                    this.token = res.data.payload.token
                    // console.log(res.data.payload);

                    axios.get("http://88.198.106.121/api_gsim/v1/user/number/list",{
                      params:{
                        is_active:true
                      },
                      headers:{
                          'X-Auth-Token': this.token,
                      }
                    }).then((res)=>{
                        this.number_list = res.data.payload.items
                        // console.log(res);
                    })

                    axios.get("http://88.198.106.121/api_gsim/v1/sms/list",{   
                        headers:{
                            'X-Auth-Token': this.token,
                        },
                    }).then((res)=>{
                        this.sms_records = res.data.payload.items
                    })
                    // axios.post("http://88.198.106.121/api_gsim/v1/file/import",{
                    //     headers:{
                    //         'X-Auth-Token': this.token,
                    //     },
                    // }).then((res)=>{
                    //     console.log(res)
                    //     // this.sms_records = res.data.payload.items
                    // })
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
