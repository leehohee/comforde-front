<template>
  <div width="300">
    <v-row>
      <v-col>
        <div class="mt-3"><h3>추천 서비스</h3></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in mainItems" :key="i">
        <v-card
          
          max-height="98"
          class="pa-0 ma-0"
          elevation="0"
          nuxt
          to="/detailpage"
        >
          <div class="d-flex">
            <v-avatar class="ma-0" size="98" tile>
              <v-img src="~/assets/placard.png" max-height="98"></v-img>
            </v-avatar>
            <div class="pl-3">
              <v-card-subtitle>{{item.content}}</v-card-subtitle>

              <v-row align="center" class="ml-n1 mt-2">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="16"
                ></v-rating>

                <div class="pt-1 grey--text ms-1">4.5 (413)</div>
              </v-row>

              <v-card-actions>
                <v-btn class="white ml-n2 mt-0 pa-0 pb-2" elevation="0">
                  <span>{{item.cost}}</span><span>원</span>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

    props: {
        mainItems: {
            type: Object,
            required: true,
        }
    },
    data () {
      return {
        
      
      }
    },


};
</script>

<style>
</style>