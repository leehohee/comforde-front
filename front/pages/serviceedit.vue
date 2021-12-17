<template>
    <div>
        <div v-if="!me">
        <PostForm />
        </div>
        <div v-else>
            로그인을 해야합니다.
        </div>
         
    </div>
    
    
</template>

<script>
export default {
    layout:'mypagedefault',
    data () {
      return {
        
        
      }
    },
}
</script>

<style>

</style>