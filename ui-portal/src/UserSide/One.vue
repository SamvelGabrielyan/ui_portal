<template>
	<div class="row">
	    <div class="col-12">
	        <div class="card">
	            <div class="card-body">
	                <div class="container pb-3">
						<h3>One Time Usage DID purchse</h3>
						<div class="col-sm-12 col-md-10 m-auto">
							<div class="mb-3 ml-2 mt-1 mt-4">
							    <div class="form-row">
							        <span>Country</span>
							        <div class="col-md-4">
                                        <select class="form-control" v-model="CountryName">
                                            <option v-for = "country in Country">{{ country.name }}</option>
                                        </select>

						                <!--<input list="browsers" class="form-control" v-model="CountryName">-->
						                <!--<datalist id="browsers">-->
						                	<!--<option v-for = "country in Country">{{ country.name }}</option>-->
						                <!--</datalist>-->

							        </div>
							        <span>Days</span>
							        <div class="col-md-4">
							              <input type="Number" class="form-control" v-model="Orders.DaysCount">
							        </div>
							    </div>
							</div>
							<div class="mb-3 ml-2 mt-1 mt-4">
							    <div class="form-row">
							        <span>App</span>
							        <div class="col-md-4">
							              <select class="form-control" v-model="Orders.AppData[0].app_name"  @change="changeApp(key[0], 0)">
							              	<option v-for = "item in App" v-model="key[0] = item.app_name">{{ item.app_name }}</option>
							              </select>
							        </div>
							        <span>Number's Count</span>
							        <div class="col-md-4">
							              <input type="Number" class="form-control" v-model="Orders.AppData[0].ncount">
							        </div>
							        <div>
							            <div class="col">
							            	<input type="checkbox" v-model="Orders.AppData[0].use_new" @change="getUsedUnusedPrice()">
							            </div>
							        </div>
							        <div class="ml-2">
							            <button class="btn btn-info" style="border-radius: 13px; width: 36px;" @click="AddArray(),getUsedUnusedPrice(),count++">+</button>
							        </div>
							    </div>
							</div>
							<div  id="divforapp">
								<div class="mb-3 ml-2 mt-1 mt-4" v-for = "(count,index) in count" :id = "'b_'+index" :key="index">
								    <div class="form-row">
								        <span>App</span>
								        <div class="col-md-4">
								              <select class="form-control" v-model="Orders.AppData[index+1].app_name" @change="changeApp(key[index+1], index+1)">
												  <!--<option>viber</option>-->
												  <option v-for = "item in App" v-model="key[index+1] = item.app_name">{{ item.app_name }}</option>
								              </select>
								        </div>
								        <span>Number's Count</span>
								        <div class="col-md-4">
								              <input type="Number" class="form-control" v-model = "Orders.AppData[index+1].ncount">
								        </div>
								        <div>
								            <div class="col">
								            	<input type="checkbox" checked data-toggle="toggle" data-on="New" data-off="Old" data-onstyle="info" data-offstyle="info" data-width="100" v-model = "Orders.AppData[index+1].use_new" @change="getUsedUnusedPrice()">
								            </div>
								        </div>
								        <div class="ml-2">
								            <button class="btn btn-info" style="border-radius: 13px; width: 36px;" @click="DelInp(index)">x</button>
								        </div>
								    </div>
								</div>
								<div class="ml-2" style="margin-bottom: 10px;">
									<div class="form-row my-number-pages-buttons">
										<!--<div class="col-md-2">-->
											<!--<button :disabled = 'buttonAble' class = 'ml-2 btn btn-info' @click="CreateOrder()">Calculate</button>-->
										<!--</div>-->
										<div class="col-md-3 offset-md-7">
											<button class="btn btn-used btn-white" @click="CountSumUsed(),is_active = true"
													v-bind:class="{ 'btn-lightgreen': is_active }">Used <p class="m-0 p-0">$ {{usedTotalCost}}</p></button>

											<button class="btn btn-unused btn-white" @click="CountSumUnused(),is_active = false"
													v-bind:class="{ 'btn-lightgreen': !is_active }">Unused <p class="m-0 p-0">$ {{unusedTotalCost}}</p></button>
										</div>
									</div>
								</div>
							</div>
						</div>
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
					                    <!--<h2 class="font-medium m-b-0">{{Amount1[0]}}$</h2>-->
					                <!--</div>-->
					            <!--</div>-->
					        <!--</div>-->
					    <!--</div>-->
					<!--</div>-->
					<div class="row">
					    <div class="row m-auto">
					      	<div id="paypal-button" style="width:200px;"></div>
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

	export default{
		data:function () {
			return{
				token:VueCookies.get('token'),
                usedTotalCost:0,
                unusedTotalCost:0,
                App:[],
				key:[],
                Country:[],
                count:0,
                CountryName:'United States',
                i:0,
                Amount:0,
                Amount1:[],
                buttonAble:false,
                is_active:true,
                Orders:{
					CountryId:"",
					DaysCount:'',
					AppData:[{ncount:'',use_new:true,app_uuid:'', price_new:'', price_old:''}],
					AppData1:[],
				}
			}
		},
		methods:{
            changeApp:function(item, index){
                axios.get('http://88.198.106.121/api_gsim/v1/app/list',{
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }) .then((res)=>{
                    var data = res.data.payload.items;
                    for(var i=0; i<data.length; i++){
                        if(data[i].app_name == item){
                            this.Orders.AppData[index].price_new = data[i].price_new;
                            this.Orders.AppData[index].price_old = data[i].price_old;
                            this.Orders.AppData[index].app_uuid  = data[i].app_uuid;
						}
					}
                })
            },
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
            getUsedUnusedPrice:function(){
                this.CountSumUnused();
                this.CountSumUsed();
            },
			CountSumUsed:function(){
			  axios.get('http://88.198.106.121/api_gsim/v1/app/list',{
                  headers:{
                      'X-Auth-Token': this.token,
                  }
			  }) .then((res)=>{
				  if ((this.Orders.AppData[0].app_uuid) != '') {
				      this.usedTotalCost = 0;
                      for (let j = 0;j < (this.Orders.AppData).length;j++) {
                          if(this.Orders.AppData[j].use_new != false){
                              if (this.Orders.AppData[j].price_old) {
                                  var ncount	= this.Orders.AppData[j].ncount;
                                  var days      = this.Orders.DaysCount;
                                  var old_price = this.Orders.AppData[j].price_old;
                                  if (ncount == "") {
                                      ncount = 0;
                                  }
                                  var sum = ncount*days*old_price;
                                  this.usedTotalCost += sum;
                              }
                          }
                      }
				  }
			  })
			},
            CountSumUnused:function(){
                axios.get('http://88.198.106.121/api_gsim/v1/app/list',{
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }) .then((res)=>{
                    if ((this.Orders.AppData[0].app_uuid) != '') {
                        var j;
                        this.unusedTotalCost = 0;
                        for (j = 0;j < (this.Orders.AppData).length;j++) {
                            if(this.Orders.AppData[j].use_new != false) {
                                if (this.Orders.AppData[j].price_new) {
                                    var ncount = this.Orders.AppData[j].ncount;
                                    var days = this.Orders.DaysCount;
                                    var old_price = this.Orders.AppData[j].price_new;
                                    if (ncount == "") {
                                        ncount = 0;
                                    }
                                    var sum = ncount * days * old_price;
                                    this.unusedTotalCost += sum;
                                }
                            }
                        }
                    }
                })
            },
            considerUsedCost:function(){
			  this.usedTotalCost = 10;
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
				}, '#paypal-button');
			},
			AddArray:function(){
				this.Orders.AppData.push({ncount:'',use_new:true,app_uuid:'', price_new:'', price_old:''})
			},
			DelInp:function(index){
				var element = document.getElementById("divforapp");
				var child = document.getElementById("b_"+index);
				element.removeChild(child);

				this.Orders.AppData.splice(index+1,1,{ncount:'',use_new:true,app_uuid:''})
			},
			CreateOrder:function(){
                this.buttonAble = true
				axios.get("http://88.198.106.121/api_gsim/v1/country/list",{
					params:{
						name:this.CountryName,
						per_page:250
					},
					headers:{
				    	'X-Auth-Token': this.token,
					}
				}).then((res)=>{
					if(res.data.payload.items == '' || !this.CountryName){
                        this.buttonAble = false
                        return
                    }

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
					else{
					    this.Amount1 = []
                        this.Amount1.push(this.Amount)
						this.Amount = 0
						this.buttonAble = false
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