<template>
    <div class="row">

        <div  class="modal fade" id="MailConf" tabindex="-1" role="dialog" aria-labelledby="MailConf" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 855px">
                <div class="modal-content" style="width: 855px;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="MailConf1">Mail Confirmation</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h3 class="mt-2 ml-3">Registration</h3>
                    <div class="form-row ml-2 pl-2 pr-2 mt-2">
                        <div class="col-md-4">
                            <h4><b><label>From Email</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="FromEmail" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Cc</label></b></h4>
                        </div>
                        <div class="col-md-8 ">
                            <input v-model="CcEmail" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Subject</label></b></h4>
                        </div>
                        <div class="col-md-8 ">
                            <input v-model="SubjectEmail" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Content</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ">
                        <vue-editor v-model="Content"></vue-editor>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Tags</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 mb-2 ml-2">
                        <button class="btn btn-info ml-2" @click = "Content += '{Msg}'">{Msg}</button>
                        <button class="btn btn-info ml-2" @click = "Content += '{To}'">{To}</button>
                        <button class="btn btn-info ml-2" @click = "Content += '{From_Id}'">{From_Id}</button>
                        <button class="btn btn-info ml-2" @click = "Content += '{File}'">{File}</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal" @click="MailRegistration()">Save</button>
                    </div>
                    <h3 class="mt-2 ml-3">Retrieve Password</h3>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>From Email</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="FromEmail1" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Cc</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="CcEmail1" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Subject</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="SubjectEmail1" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Content</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2">
                        <vue-editor v-model="Content1"></vue-editor>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Tags</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 mb-2 ml-2">
                        <button class="btn btn-info ml-2" @click = "Content1 += '{Msg}'">{Msg}</button>
                        <button class="btn btn-info ml-2" @click = "Content1 += '{To}'">{To}</button>
                        <button class="btn btn-info ml-2" @click = "Content1 += '{From_Id}'">{From_Id}</button>
                        <button class="btn btn-info ml-2" @click = "Content1 += '{File}'">{File}</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal" @click="MailRegistration1()">Save</button>
                    </div>
                    <h3 class="mt-2 ml-3">Order Expiration 1 day</h3>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>From Email</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="FromEmail2" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Cc</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="CcEmail2" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Subject</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="SubjectEmail2" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Content</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2">
                        <vue-editor v-model="Content2"></vue-editor>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Tags</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 mb-2 ml-2">
                        <button class="btn btn-info ml-2" @click = "Content2 += '{Msg}'">{Msg}</button>
                        <button class="btn btn-info ml-2" @click = "Content2 += '{To}'">{To}</button>
                        <button class="btn btn-info ml-2" @click = "Content2 += '{From_Id}'">{From_Id}</button>
                        <button class="btn btn-info ml-2" @click = "Content2 += '{File}'">{File}</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal" @click="MailRegistration2()">Save</button>
                    </div>
                    <h3 class="mt-2 ml-3">Order Expiration 7 days</h3>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>From Email</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="FromEmail3" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Cc</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="CcEmail3" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Subject</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="SubjectEmail3" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Content</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2">
                        <vue-editor v-model="Content3"></vue-editor>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Tags</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 mb-2 ml-2">
                        <button class="btn btn-info ml-2" @click = "Content3 += '{Msg}'">{Msg}</button>
                        <button class="btn btn-info ml-2" @click = "Content3 += '{To}'">{To}</button>
                        <button class="btn btn-info ml-2" @click = "Content3 += '{From_Id}'">{From_Id}</button>
                        <button class="btn btn-info ml-2" @click = "Content3 += '{File}'">{File}</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal" @click="MailRegistration3()">Save</button>
                    </div>
                    <h3 class="mt-2 ml-3">Delivery Error</h3>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>From Email</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="FromEmail4" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Cc</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="CcEmail4" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Subject</label></b></h4>
                        </div>
                        <div class="col-md-8">
                            <input v-model="SubjectEmail4" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Content</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2">
                        <vue-editor v-model="Content4"></vue-editor>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-3 ml-2">
                        <div class="col-md-4">
                            <h4><b><label>Tags</label></b></h4>
                        </div>
                    </div>
                    <div class="form-row pl-2 pr-2 mt-2 mb-2 ml-2">
                        <button class="btn btn-info ml-2" @click = "Content4 += '{Msg}'">{Msg}</button>
                        <button class="btn btn-info ml-2" @click = "Content4 += '{To}'">{To}</button>
                        <button class="btn btn-info ml-2" @click = "Content4 += '{From_Id}'">{From_Id}</button>
                        <button class="btn btn-info ml-2" @click = "Content4 += '{File}'">{File}</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal" @click="MailRegistration4()">Save</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { VueEditor } from 'vue2-editor'
    import VueCookies from 'vue-cookies'
    import axios from 'axios'
    export default {
        name: "AdminMail",
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
                count: 10,
                count1: 1,
                boolsort: false,
                sortItem: '',
                filterColumn: '',
                filterColumnStartTime: '',
                filterColumnEndTime: '',
                order_id: '',

                OrderDuration: '',
                OrderApp: '',
                OrderType: true,

                Content: '',
                SubjectEmail: '',
                FromEmail: '',
                CcEmail: '',

                Content1: '',
                SubjectEmail1: '',
                FromEmail1: '',
                CcEmail1: '',

                SubjectEmail2: '',
                FromEmail2: '',
                CcEmail2: '',
                Content2: '',

                SubjectEmail3: '',
                FromEmail3: '',
                CcEmail3: '',
                Content3: '',

                SubjectEmail4: '',
                FromEmail4: '',
                CcEmail4: '',
                Content4: '',

                users: [],

                options: {
                    format: 'MM/DD/YYYY',
                    useCurrent: false,
                }
            }
        },
        components: {
            VueEditor,
        },
        methods: {
            HttpRegistration: function () {
                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    // console.log(res)
                    this.FromEmail = res.data.payload.items[4].email_from
                    this.CcEmail = res.data.payload.items[4].email_cc
                    this.SubjectEmail = res.data.payload.items[4].subject
                    this.Content = res.data.payload.items[4].content_html
                })

            },
            MailRegistration:function (){

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    alert('success!')
                })
            },
            MailRegistration1:function (){

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    alert('success!')
                })
            },
            MailRegistration2:function (){

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    alert('success!')
                })
            },
            MailRegistration3:function (){

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    alert('success!')
                })
            },
            MailRegistration4:function (){

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res) => {
                    alert('success!')
                })
            },
            HttpRetrive: function () {

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res1) => {
                    // console.log(res1)
                    this.FromEmail1 = res1.data.payload.items[3].email_from
                    this.CcEmail1 = res1.data.payload.items[3].email_cc
                    this.SubjectEmail1 = res1.data.payload.items[3].subject
                    this.Content1 = res1.data.payload.items[3].content_html
                })

            },
            HttpOrder1: function () {

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res2) => {
                    // console.log(res2)
                    this.FromEmail2 = res2.data.payload.items[0].email_from
                    this.CcEmail2 = res2.data.payload.items[0].email_cc
                    this.SubjectEmail2 = res2.data.payload.items[0].subject
                    this.Content2 = res2.data.payload.items[0].content_html
                })

            },
            HttpOrder2: function () {

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res3) => {
                    // console.log(res3)
                    this.FromEmail3 = res3.data.payload.items[1].email_from
                    this.CcEmail3 = res3.data.payload.items[1].email_cc
                    this.SubjectEmail3 = res3.data.payload.items[1].subject
                    this.Content3 = res3.data.payload.items[1].content_html
                })

            },
            HttpDelivery: function () {

                axios.get("http://88.198.106.121/api_gsim/v1/mail_template/list", {
                    headers:{
                        'X-Auth-Token': this.token,
                    }
                }).then((res4) => {
                    // console.log(res4)
                    this.FromEmail4 = res4.data.payload.items[2].email_from
                    this.CcEmail4 = res4.data.payload.items[2].email_cc
                    this.SubjectEmail4 = res4.data.payload.items[2].subject
                    this.Content4 = res4.data.payload.items[2].content_html
                })

            }

        },
        created(){
            this.HttpDelivery(),
            this.HttpOrder2(),
            this.HttpOrder1(),
                this.HttpRetrive(),
            this.HttpRegistration()
        }
    }

</script>

<style scoped>

</style>