<template>
    <div>
        <div v-if="me">
            
            <div width="300" class="pb-13">
                <v-row>
                <v-col>
                    <v-card max-height="98" width="100%" class="pa-0 mb-3" elevation="0">
                    <div class="d-flex flex-row">
                        
                        <v-avatar class="ma-0" size="98" tile>
                            <PostImages :images="Images.length !== 0 ? Images : []" />
                        </v-avatar>
                        
                        <div
                        class="pl-3 flex-grow-1 flex-shrink-0"
                        style="min-width: 100px; max-width: 100%"
                        >
                        <div class="d-flex flex-row">
                            
                            

                            
                            
                        </div>

                        <div style="max-width: 250px;" align="left" class="ml-0 mt-2 text-truncate">
                            
                                {{ order[0].Ordereditems.length !== 0 ? order[0].Ordereditems[0].title : '삭제된서비스'}}
                            
                        </div>

                        <div class="mt-1">
                                                       
                            
                        </div>

                        
                        </div>
                        
                    </div>
                    </v-card>
                    <v-divider></v-divider>
                    <v-card width="100%" class="pt-3 mt-0" elevation="0">
                        <div>
                        <v-card-subtitle>
                            주문번호 : {{order[0].id}} | 결제날짜 {{order[0].paydate}}
                            
                        </v-card-subtitle>
                        </div>
                        <div>
                        <p class="text-right">
                        
                            총 결제금액(VAT포함)
                            <strong>{{
                                order[0].cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            }}</strong> 원
                        
                        </p>
                        </div>
                    </v-card>
                    <v-card v-if="order[0].createdAt" class="lighten-4 grey pa-4 mx-0" elevation="0">
                        <div class="text-center pb-1">
                            <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
                        </div>
                        <div class="text-center">
                            주문이 접수되었습니다.
                        </div>
                        <div class="text-center text-caption">
                            디자이너 님이 주문을 접수하였으며, 곧 작업이 시작됩니다!
                        </div>
                        <v-card-subtitle class="text-center red--text" style="min-width: 100px;">
                            주문접수일 : {{$moment(order[0].createdAt).calendar()}}
                        </v-card-subtitle>
                    </v-card>
                    <v-card v-if="order[0].date" class="lighten-4 grey pa-4 mt-3" elevation="0">
                        <div class="text-center pb-1">
                            <v-icon>mdi-truck-fast-outline</v-icon>
                        </div>
                        <div class="text-center">
                            주문이 접수되었습니다.
                        </div>
                        <v-card-subtitle class="text-center">

                        </v-card-subtitle>
                        <v-card-subtitle class="text-center red--text" style="min-width: 100px;">
                            작업완료일 : {{$moment(order[0].date).calendar()}}
                        </v-card-subtitle>
                    </v-card>
                    <v-card class="lighten-4 grey pa-4 mt-3" elevation="0">
                        <div class="text-center pb-1 text-h6">
                            <strong>받으신 결과물은 만족스러우셨나요?</strong>
                        </div>
                        <div class="text-center pb-1 text-caption">
                            서비스에 대한 만족도를 별점으로 남겨주세요.
                        </div>
                        <div class="text-center">
                            <v-rating
                            v-model="rating"
                            background-color="grey lighten-1"
                            color="yellow"
                            large
                            ></v-rating>
                        </div>
                        <div class="text-subtitle-1">
                            <strong>구매 후기</strong>
                        </div>
                        <v-textarea
                        background-color="grey lighten-2"
                        counter
                        outlined
                        auto-grow
                        
                        v-model="comment"
                        label="작업물의 퀄리티, 디자이너 응대에 대해 후기를 남겨주세요."
                        ></v-textarea>
                        <div class="text-right">
                        <v-btn @click="onSubmit" block class="yellow"><strong>보내기</strong></v-btn>
                        
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

import LoginForm from '~/components/LoginForm';
import PostImages from "~/components/PostImages";
export default {
    
    layout:'orderdetaildefault',
    components:{
        
        LoginForm,
        PostImages,
    },
    data: () => ({
      rating: 3,
      comment:'',

    }),
    computed:{
        me(){
            return this.$store.state.users.me;
        },
        order(){
            return this.$store.state.posts.order.length !== 0 ? this.$store.state.posts.order : [];
        },
        Images(){
            return this.$store.state.posts.order[0].Ordereditems.length !== 0 ? this.$store.state.posts.order[0].Ordereditems[0].Images : [];
        }
        
    },
    fetch({store,params}){  //fetch는 보통 store 넣을때 많이 쓴다.
        return store.dispatch('posts/loadOrder', {id:params.id});
    },
    methods: {
        onClick(){
            console.log(this.$store.state.posts.order[0].Ordereditems[0].id);
        },
        onSubmit() {
            this.$store.dispatch('posts/addComment2',{

                content:this.comment,
                star:this.rating,
                ItemId:this.$store.state.posts.order[0].Ordereditems[0].id,
                UserId:this.me.id,

            })
            .then(()=>{
                console.log('후기작성성공');
                this.comment='';
                this.rating=1;
            })
            .catch(()=>{
                alert('후기작성실패');
            });

        },
    },
}
</script>

<style>

</style>