<template>
    <div>
        <v-container>
            <v-row>
                
                
                <v-card
                    color="white"
                    max-height="98"
                    class="pa-0 ma-0"
                    elevation="0"
                    nuxt to="/"

                >
                    <div class="d-flex flex-no-wrap">

                    <v-avatar
                        class="ma-0"
                        size="98"
                        tile
                    >
                        <v-img
                        src="https://d2v80xjmx68n4w.cloudfront.net/gigs/QbVBu1625654810.jpg"
                        max-height="98"
                        ></v-img>
                    </v-avatar>
                    <div class="pl-3">
                        <v-card-subtitle
                        
                        v-text="'미술, 디자인, 작가가 모여 감각적인 로고 제작해 드립니다.'"
                        ></v-card-subtitle>
                        <br>
                        <v-card-subtitle
                        
                        v-text="'로고고디자인'"
                        ></v-card-subtitle>
                        <v-row
                        align="center"
                        class="ml-n1 mt-2"
                        >
                            
                        </v-row>

                        <v-card-actions>
                        

                        
                        </v-card-actions>
                    </div>

                    
                    </div>
                    
                </v-card>
              
            </v-row>
            <v-row class="mt-10">
              <v-card elevation="0" width="100%" fluid>
                <div class="d-flex justify-space-between">
                <span>워드마크/심볼/엠블럼형 로고 X 1</span><span>11,000원</span>
                </div>
                <v-card elevation="0" flat tile class="mt-10">
                    시안개수:2개<br>
                    원본파일 제공<br>
                    고해상도 파일 제공<br>
                    응용 디자인<br>
                    상업적 이용 가능<br>
                </v-card>
                
              </v-card>
              
              

            </v-row>
            <v-row width="100" class="mt-10">
                <v-card elevation="0" width="100%">
                    <h4>결제 금액</h4>
                    <v-autocomplete class="mt-1" outlined label="사용 가능한 쿠폰 없음"></v-autocomplete>
                    <v-row>
                    <v-col
                    cols="8"
                    
                    
                    >
                    <v-text-field
                        label="보유캐시 : 0원"
                        placeholder="Placeholder"
                        outlined
                    ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-btn large class="grey">전액사용</v-btn>
                    </v-col>
                    </v-row>

                    <v-row>
                    <v-col
                    cols="8"
                    
                    
                    >
                    <h5>총 서비스 금액</h5>
                    </v-col>
                    <v-col cols="4" class="text-right">
                    <h5>11,000 원</h5>
                    </v-col>
                    </v-row>

                    <v-row>
                    <v-col
                    cols="8"
                    
                    
                    >
                    <h5>쿠폰 할인</h5>
                    </v-col>
                    <v-col cols="4" class="text-right">
                    <h5>0 원</h5>
                    </v-col>
                    </v-row>

                    <v-row>
                    <v-col
                    cols="8"
                    
                    
                    >
                    <h5>캐시 사용</h5>
                    </v-col>
                    <v-col cols="4" class="text-right">
                    <h5>0 원</h5>
                    </v-col>
                    </v-row>

                    <v-row>
                    <v-col
                    cols="8"
                    
                    
                    >
                    <h5>총 결제 금액</h5>
                    </v-col>
                    <v-col cols="4" class="text-right">
                    <h4>11,000 원</h4>
                    </v-col>
                    </v-row>
                </v-card>
            </v-row>
            
            <v-row width="100" class="mt-10">
                <v-card elevation="0" width="100%">
                    <h4>결제 방법</h4>
                    <v-row class="mt-1 d-flex flex-wrap">
                        <v-col col="4">
                            <v-btn width="100" outlined>신용카드</v-btn>
                        </v-col>
                        <v-col col="4">
                            <v-btn width="100" outlined>계좌이체</v-btn>
                        </v-col>
                        <v-col col="4">
                            <v-btn width="100" outlined>무통장입금</v-btn>
                        </v-col>
                        <v-col col="4">
                            <v-btn width="100" outlined>휴대폰</v-btn>
                        </v-col>
                        <v-col col="4">
                            <v-btn width="100" outlined>페이코</v-btn>
                        </v-col>
                        <v-col col="4">
                            <v-btn width="100" outlined>카카오페이</v-btn>
                        </v-col>
                        
                    </v-row>
                </v-card>
            </v-row>

            <v-row width="100" class="mt-12">
                <v-card elevation="0" width="100%">
                    <h4>세금 계산서</h4>
                    <v-card-subtitle class="mt-5">
                        ·개인 전문가이므로 세금계산서 발행이 불가능합니다.<br>
                        ·현금영수증(사업자지출증빙)/신용카드 매입전표는 매입세액공제 사용이 불가능합니다.<br>
                        ·현금영수증/신용카등 영수증은 개익 소득 공제용으로만 사용하실 수 있습니다.<br>
                    </v-card-subtitle>
                </v-card>
            </v-row>
            <v-row width="100%">
                <v-checkbox
                v-model="checkbox"
                label="주문 내용을 확인하였으며, 결제에 동의합니다. (필수)"
                ></v-checkbox>
                <v-col cols="12">
                <v-row width="100%">
                    <v-col width="100%">
                        <v-btn width="100%" class="yellow">11,000원 결제하기</v-btn>
                    </v-col>
                </v-row>
                </v-col>
            </v-row>
            <v-row width="100vw" class="text-center mb-10">
                <h6>서비스 제공이 완료된 이후에 전문가에게 결제 대금이 전달됩니다.</h6>
            </v-row>


        </v-container>
    </div>

</template>

<script>
export default {
    layout:'orderdefault'
}
</script>

<style>

</style>