<template>
    <div>
        <div v-if="me">
            
            <div width="300">
                <v-row>
                <v-col v-for="(item, i) in buyerOrders" :key="i">
                    <v-card max-height="98" width="100%" class="pa-0 ma-0" elevation="0">
                    <div class="d-flex flex-row">
                        <nuxt-link :to="'/order/' + item.id">
                        <v-avatar class="ma-0" size="98" tile>
                            <PostImages :images="item.Ordereditems.length !== 0 ? item.Ordereditems[0].Images : []" />
                        </v-avatar>
                        </nuxt-link>
                        <div
                        class="pl-3 flex-grow-1 flex-shrink-0"
                        style="min-width: 100px; max-width: 100%"
                        >
                        <div class="d-flex flex-row">
                            <v-card-subtitle>
                                주문ID : {{item.id}}
                                
                            </v-card-subtitle>
                            <v-spacer></v-spacer>

                            
                            <v-card-subtitle class="text-truncate" style="min-width: 100px; max-width: 150px">
                                {{$moment(item.createdAt).calendar()}}
                            </v-card-subtitle>
                        </div>

                        <div style="max-width: 250px;" align="left" class="ml-0 mt-2 text-truncate">
                            <nuxt-link :to="'/order/' + item.id">
                                {{ item.Ordereditems.length !== 0 ? item.Ordereditems[0].title : '삭제된서비스'}}
                            </nuxt-link>
                        </div>

                        <div class="mt-1">
                                                       
                            <v-card-subtitle v-if="item.date">
                                작업완료일 : {{$moment(item.date).calendar()}}
                            </v-card-subtitle>
                        </div>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            
                            <span>{{
                                item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            }} 원</span
                            >
                            
                        </v-card-actions>
                        </div>
                        
                    </div>
                    </v-card>
                    
                </v-col>
                </v-row>
            </div>
            
        </div>
        <div v-else>
            <LoginForm />
        </div>
    </div>
</template>
<script>
import MyComfordeList from '~/components/MyComfordeList';
import LoginForm from '~/components/LoginForm';
import PostImages from "~/components/PostImages";
export default {
    
    layout:'mypagedefault',
    components:{
        MyComfordeList,
        LoginForm,
        PostImages,
    },
    computed:{
        me(){
            return this.$store.state.users.me;
        },
        buyerOrders(){
            return this.$store.state.posts.buyerOrders;
        },
        
    },
    fetch({store}){  //fetch는 보통 store 넣을때 많이 쓴다.
        return store.dispatch('posts/loadBuyerOrders', { 
            
            UserId:store.state.users.me.id,
            reset: true,
        });
    },
}
</script>

<style>

</style>