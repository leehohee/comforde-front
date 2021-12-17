<template>
    <div>
        <div v-if="me">
            
            <MyComfordeMenu />
            
        </div>
        <div v-else>
            <LoginForm />
        </div>
    </div>
</template>
<script>
import MyComfordeMenu from '~/components/MyComfordeMenu';
import LoginForm from '~/components/LoginForm';
export default {
    layout:'mypagedefault',
    components:{
        MyComfordeMenu,
        LoginForm,
    },
    computed:{
        me(){
            return this.$store.state.users.me;
        },
        
    },
}
</script>

<style>

</style>