<template>
  <v-card
    width="100%"
    :style="{
      backgroundImage: 'linear-gradient(135deg, #ffea85, #ffdd37)',
    }"
  >
    <v-container>
      <v-row class="mt-1">
        <v-col class="font-weight-bold" cols="8">구매중인 주문</v-col>
        <v-col class="grey--text text-caption text-right" cols="4"
          >전체보기 ></v-col
        >
      </v-row>

      <v-sheet
        class="mt-4 d-flex justify-center align-center"
        height="100px"
        :style="{
          borderRadius: '4px',
          backgroundImage: 'linear-gradient(135deg, #ffea85, #ffdd37)',
          border: 'solid 2px rgba(141,109,8,0.3)',
        }"
      >
        <div>
          <div class="text-center mb-2">
            <v-icon>mdi-information-outline</v-icon>
          </div>
          <div><h5>어머, 구매중인 주문이 없어요</h5></div>
        </div>
      </v-sheet>
      <div class="my-6 mx-4">
        <v-row class="mt-4"
          ><v-icon class="text-subtitle-1">mdi-credit-card-outline</v-icon
          ><span class="ml-2 text-body-2">결제/환불내역</span></v-row
        >
        <v-row class="mt-6"
          ><v-icon class="text-subtitle-1"
            >mdi-ticket-confirmation-outline</v-icon
          ><span class="ml-2 text-body-2">쿠폰/프로모션</span></v-row
        >
        <v-row class="mt-6"
          ><v-icon class="text-subtitle-1">mdi-cash</v-icon
          ><span class="ml-2 text-body-2">컴포디 캐시 충전</span></v-row
        >
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>