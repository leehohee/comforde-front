<template>
  <div>
    <div v-if="me">
    <v-container>
        <v-row>
            <v-col
            v-for="(item, i) in item2s"
            :key="i"
            cols="12"
            >
            <v-card
                :color="item.color"
                max-height="98"
                class="pa-0 ma-0"
                elevation="0"
                nuxt to="/detailpage"
            >
                <div class="d-flex flex-no-wrap">

                <v-avatar
                    class="ma-0"
                    size="98"
                    tile
                >
                    <v-img
                    :src="item.src"
                    max-height="98"
                    ></v-img>
                </v-avatar>
                <div class="pl-3">
                    <v-card-subtitle
                    
                    v-text="item.title"
                    ></v-card-subtitle>

                    <v-row
                    align="center"
                    class="ml-n1 mt-2"
                    >
                        <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="16"
                        ></v-rating>

                        <div class="pt-1 grey--text ms-1">
                        4.5 (413)
                        </div>
                    </v-row>

                    <v-card-actions>
                    

                    <v-btn
                        
                        class="white ml-n2 mt-0 pa-0 pb-2"
                        elevation="0"
                        
                        
                    >
                    <span style="fontWeight:900">11,000 원</span>
                    </v-btn>
                    </v-card-actions>
                </div>

                
                </div>
            </v-card>
            </v-col>
        </v-row>
       
    </v-container>

    <div class="text-center mb-10">
        <v-pagination
        v-model="page"
        :length="2"
        ></v-pagination>
    </div>

  </div>
      <div v-else>
    <LoginForm />
  </div>
  
  </div>
</template>

<script>

import LoginForm from '~/components/LoginForm';
export default {
    components: {
        
        LoginForm,
    },
    data (){
        return {
            item2s: [
        {
          color: '#ffffff',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/QbVBu1625654810.jpg',
          title: '미술,디자인,작가가 모여 감각적인 로고 제작해 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/D6OhI1637212595.jpg',
          title: '8년연속 만족 1위 수상" 디자인 1위의 신뢰를 보여 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/gStnB1633435839.jpg',
          title: '공모전 488회" 우승 명함 디자인 이벤트 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/T155E1634276078.jpg',
          title: '로고 제작 3,000건, 로고 디자인 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/sEfSY1634543284.jpg',
          title: '"카카오, SK 출신 디자인 팀" 압도적인 만족도 감사 드립니다.',
          artist: 'Foster the People',
        },
        
        ],
    }
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