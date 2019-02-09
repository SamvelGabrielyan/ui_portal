<template>

    <div  class="modal fade" id="NotConf" tabindex="-1" role="dialog" aria-labelledby="NotConf" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 855px">
            <div class="modal-content" style="width: 855px;">
                <div class="modal-header">
                    <h5 class="modal-title" id="NotConf1">Notification Confirmation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="form-row pl-2 pr-2 mt-2">
                    <div class="col-md-4">
                        <h4><b><label>Alert For</label></b></h4>
                    </div>
                    <div class="col-md-8">
                        {{item_not.name}}
                    </div>
                </div>
                <div class="form-row pl-2 pr-2 mt-2">
                    <div class="col-md-4">
                        <h4><b><label>From</label></b></h4>
                    </div>
                    <div class="col-md-8">
                        {{item_not.from_username}}
                    </div>
                </div>
                <div class="form-row pl-2 pr-2 mt-2">
                    <div class="col-md-4">
                        <h4><b><label>To</label></b></h4>
                    </div>
                    <div class="col-md-8">
                        {{item_not.user_name}}
                    </div>
                </div>
                <div class="form-row pl-2 pr-2 mt-2">
                    <div class="col-md-4">
                        <h4><b><label>Time</label></b></h4>
                    </div>
                    <div class="col-md-8">
                        {{item_not.sent_on}}
                    </div>
                </div>
                <div class="form-row pl-2 pr-2 mt-2">
                    <div class="col-md-4">
                        <h4><b><label>Subject</label></b></h4>
                    </div>
                    <div class="col-md-8">
                        {{item_not.subject}}
                    </div>
                </div>
                <div class="form-row pl-2 pr-2 mt-2">
                    <div class="col-md-4">
                        <h4><b><label>Content</label></b></h4>
                    </div>
                    <div class="col-md-8">
                        {{item_not.content}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    export default {
        name: "UserNotification",
        props:['item_not'],
        data:function(){
            return{
                admintoken:VueCookies.get('admintoken'),
                file_list:[],
            }
        },
    }
</script>

<style scoped>

</style>