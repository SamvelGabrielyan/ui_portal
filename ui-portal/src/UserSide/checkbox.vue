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
						                <input list="browsers" class="form-control" v-model="Orders.CountryName">

						                <datalist id="browsers">
						                	<option v-for = "country in Country">{{ country.name }}</option>
						                </datalist>
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
							              <select class="form-control" v-model="Orders.AppData[0][0]">
							              	<option v-for = "item in App">{{ item.app_name }}</option>
							              </select>
							        </div>
							        <span>Number's Count</span>
							        <div class="col-md-4">
							              <input type="Number" class="form-control" v-model="Orders.AppData[0][2]">
							        </div>
							        <div>
							            <div class="col">
							            	<input type="checkbox" v-model="Orders.AppData[0][1]"> 
							            </div>      
							        </div>
							        <div class="ml-2">
							            <button class="btn btn-info" style="border-radius: 13px; width: 36px;" @click="count++">+</button>       
							        </div>
							    </div>
							</div>
							{{ Orders.AppData }}
							{{ Orders.NumberData }}
							<div  id="divforapp">
								<div class="mb-3 ml-2 mt-1 mt-4" v-for = "(count,index) in count" :id = "'b_'+index" :key="index">
								    <div class="form-row">
								        <span>App</span>
								        <div class="col-md-4">
								              <select class="form-control"  v-model = "Orders.AppData[index+1][0]">
								              	<option v-for = "item in App">{{ item.app_name }}</option>
								              </select>
								        </div>
								        <span>Number's Count</span>
								        <div class="col-md-4">
								              <input type="Number" class="form-control" v-model = "Orders.AppData[index+1][2]">
								        </div>
								        <div>
								            <div class="col">
								            	<input type="checkbox" checked data-toggle="toggle" data-on="New" data-off="Old" data-onstyle="info" data-offstyle="info" data-width="100" v-model = "Orders.AppData[index+1][1]"> 
								            </div>       
								        </div>
								        <div class="ml-2">
								            <button class="btn btn-info" style="border-radius: 13px; width: 36px;" @click="DelInp(index)">x</button>       
								        </div>
								    </div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 m-auto">
					    <div class="card bg-info">
					        <div class="card-body text-white">
					            <div class="d-flex flex-row">
					                <div class="display-6 align-self-center"><i class="ti-user"></i></div>
					                <div class="p-10 align-self-center">
					                    <h4 class="m-b-0 ml-2">Total Price</h4>
					                    <span class="ml-2">Users</span>
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
					      	<div id="paypal-button" style="width:200px;"><!-- <img src="../assets/images/PayPal.png" style="width:200px;"> --></div>
					      	<!-- <img src="../assets/images/Bitcoin_logo.png" style="width:200px;height: 30px; cursor: pointer;"> -->
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
		
	}

	
</script>
<style>

</style>
