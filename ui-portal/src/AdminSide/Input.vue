<template>
	<div class="form-row pl-2 pr-2 mt-2 mb-2">
		<div class="offset-4 col-md-6" id="DivForKeywords">
			<input class="form-control" type="text" :value='AppKeywords' @input='$emit("input", $event.target.value)'>
		</div>
		<div class="col-md-2">
	  		<button class="btn btn-info" @click='$emit("DelInp")'>-</button>
	  	</div>
  	</div>
</template>

<script>

    export default {
        props: ['AppKeywords'],
    }
</script>
<style>
  
</style>
