<template>
  <div class="container text-center pt-10">
    <h4>불편을 드려 죄송합니다.</h4>
    <v-btn nuxt to="/">메인화면으로 돌아가기</v-btn>
    
  </div>
</template>

<script>
export default {
  props: ['error'],
  
  mounted(){
    console.log("에러내용:"+this.error.message);
  } 
}
</script>

<style scope>
@font-face {
    font-family: 'YdestreetB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/YdestreetB.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
* {
  font-family: "YdestreetB";
}
</style>

