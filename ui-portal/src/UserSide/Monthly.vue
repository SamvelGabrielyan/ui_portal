<template>
	<div class="row">
	    <div class="col-12">
	        <div class="card">
	            <div class="card-body">
	                <div class="container pb-3">
						<h3>Monthly DID Usage</h3>
						<div class="row mt-2">
							<div class="col-xs-8 col-sm-6 col-md-6">
								<span class="select-span">How many numbers do you need?</span>
							</div>
							<div class="col-xs-4 col-sm-6 col-md-6">
								<input min=1 class="form-control" type="number">
							</div>
						</div>
						<div class = "row mt-2">
							<div class="col-xs-8 col-sm-6 col-md-6">
								<span class="select-span">What country do you need?</span>
							</div>
							<div class="col-xs-4 col-sm-6 col-md-6">
								<input list="browsers" class="form-control">

								<datalist id="browsers">
								  	<option v-for = "country in Country">{{ country.name }}</option>
								</datalist>
							</div>
						</div>
						<div class="row mt-2">
							<div class="col-xs-8 col-sm-6 col-md-6">
								<span class="select-span">How many months do you need it for ?</span>
							</div>
							<div class="col-xs-4 col-sm-6 col-md-6">
								<input min=1 class="form-control" type="number">
							</div>
						</div>
					</div>
					<div class="col-md-3 offset-md-7">
						<button class="btn btn-used btn-white" @click="CreateOrder(),is_active = true"
								v-bind:class="{ 'btn-lightgreen': is_active }">Used <p class="m-0 p-0">$ {{usedTotalCost}}</p></button>

						<button class="btn btn-unused btn-white" @click="is_active = false"
								v-bind:class="{ 'btn-lightgreen': !is_active }">Unused <p class="m-0 p-0">$ {{unusedTotalCost}}</p></button>
					</div>
					<!--<div class="col-sm-12 col-md-6 m-auto">-->
					    <!--<div class="card bg-info">-->
					        <!--<div class="card-body text-white">-->
					            <!--<div class="d-flex flex-row">-->
					                <!--<div class="display-6 align-self-center"><i class="ti-user"></i></div>-->
					                <!--<div class="p-10 align-self-center">-->
					                    <!--<h4 class="m-b-0 ml-2">Total Price</h4>-->
					                    <!--&lt;!&ndash;<span class="ml-2">Users</span>&ndash;&gt;-->
					                <!--</div>-->
					                <!--<div class="ml-auto align-self-center">-->
					                    <!--<h2 class="font-medium m-b-0">$2690</h2>-->
					                <!--</div>-->
					            <!--</div>-->
					        <!--</div>-->
					    <!--</div>-->
					<!--</div>-->
					<!--<div class="row">-->
					    <!--<div class="col">-->
					    <!--</div>-->
					    <!--<div class="col">-->
					      	<!--<img src="../assets/images/PayPal.png" style="width:200px;">-->
					      	<!--<img src="../assets/images/Bitcoin_logo.png" style="width:200px;">-->
					    <!--</div>-->
					    <!--<div class="col">-->
					    <!--</div>-->
					<!--</div>-->
					<div class="row">
						<div class="row m-auto">
							<div id="paypal-buttonss" style="width:200px;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<!--<script>-->

	<!--import axios from "axios"-->
	<!--import VueCookies from 'vue-cookies'-->

	<!--export default{-->
		<!--data:function () {-->
			<!--return{-->
				<!--token:VueCookies.get('token'),-->
				<!--Country:[]-->
			<!--}-->
			<!---->
		<!--},-->
		<!--methods:{-->
			<!--GetDropdowns:function(){-->
				<!--axios.get("http://88.198.106.121/api_gsim/v1/country/list",{-->
					<!--params:{-->
						<!--per_page:250-->
					<!--},-->
					<!--headers:{-->
				    	<!--'X-Auth-Token': this.token,-->
					<!--}-->
				<!--}).then((res)=>{-->
					<!--this.Country = res.data.payload.items-->
				<!--})-->
			<!--}-->
		<!--},-->
		<!--created(){-->
			<!--this.GetDropdowns()-->
		<!--}-->
	<!--}-->
<!--</script>-->
<script>
    import axios from "axios"
    import VueCookies from 'vue-cookies'

    export default{
        data:function () {
            return{
                token:VueCookies.get('token'),
                App:[],
                usedTotalCost:0,
                unusedTotalCost:0,
                Country:[],
                count:0,
                CountryName:'United States',
                i:0,
                Amount:0,
                is_active:true,
                Orders:{
                    CountryId:"",
                    DaysCount:'',
                    AppData:[{ncount:'',use_new:true,app_uuid:''}],
                    AppData1:[],
                }
            }
        },
        methods:{
            GetDropdowns:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/app/list",{
                    params:{
                        per_page:1000
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.App = res.data.payload.items
                })

                axios.get("http://88.198.106.121/api_gsim/v1/country/list",{
                    params:{
                        per_page:250
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.Country = res.data.payload.items
                })
            },
            PayPal:function(){
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
                }, '#paypal-buttonss');
            },
            AddArray:function(){
                this.Orders.AppData.push({ncount:'',use_new:true,app_uuid:''})
            },
            DelInp:function(index){
                var element = document.getElementById("divforapp");
                var child = document.getElementById("b_"+index);
                element.removeChild(child);

                this.Orders.AppData.splice(index+1,1,{ncount:'',use_new:true,app_uuid:''})
            },
            CreateOrder:function(){
                axios.get("http://88.198.106.121/api_gsim/v1/country/list",{
                    params:{
                        name:this.CountryName,
                        per_page:250
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    this.Orders.CountryId = res.data.payload.items[0].country_uuid

                    for(let i of this.Orders.AppData)
                        if (i.ncount != '' && i.app_uuid != '') {
                            this.Orders.AppData1.push(i);
                        }

                    axios.post("http://88.198.106.121/api_gsim/v1/user/order/create",{

                            duration_type:"one time",
                            duration:Number(this.Orders.DaysCount),
                            country_uuid:this.Orders.CountryId,
                            billing_plan:"prepaid",
                            apps:this.Orders.AppData1
                        },

                        {
                            headers:{
                                'X-Auth-Token': this.token,
                            }
                        }).then((res)=>{
                        this.SendAxios()
                    })
                })
            },
            SendAxios:function(){

                axios.get("http://88.198.106.121/api_gsim/v1/app/list",{
                    params:{
                        app_name:this.Orders.AppData1[this.i].app_uuid,
                        per_page:1000
                    },
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res)=>{
                    if (this.i < this.Orders.AppData1.length) {
                        if(this.Orders.AppData1[this.i].use_new){
                            var price = res.data.payload.items[0].price_new
                        }
                        else{
                            var price = res.data.payload.items[0].price_old
                        }
                        this.Amount += Number(price)*Number(this.Orders.AppData1[this.i].ncount)*Number(this.Orders.DaysCount)

                        this.SendAxios()
                        this.i++
                    }
                })
            },
            CreatePayment:function(){
                axios.post("http://88.198.106.121/api_gsim/v1/user/payment/create",{

                        payment_gateway:'paypal',
                        paid_on:new Date(),
                        amount:this.Amount
                    },
                    {
                        headers:{
                            'X-Auth-Token': this.token,
                        }
                    }).then((res)=>{
                    console.log(res)
                })
            }
        },
        created(){
            this.GetDropdowns();
        },
        mounted(){
            this.PayPal()
        },
    }


</script>
<style>
	
</style>