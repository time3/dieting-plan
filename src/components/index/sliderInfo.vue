<style lang="scss">
    .slider-info{
        background:#f7f7f7;
        .banner{
            position:relative;
            max-height:175px;
            overflow:hidden;
            .go-back:before{
                background-position: -125px -25px;
            }
            .go-back{
                position:absolute;
                left:10px;
                top:13px;
                display:inline-block;
                width:10px;
                height:20px;
                overflow:hidden;
                vertical-align: middle;
            }
            img{
                width:100%;
                height:120px;
            }
        }
        .info{
            background:#fff;
            margin-top:10px;
            padding:15px;
            line-height:1.5;
           p{
               padding-bottom:25px;
               font-size:13px;
               color:#333;
           }
        }
    }
    .no-data{
        font-size:28px;
        text-align:center;
        padding-top:50px;
    }
</style>
<template>
  <div class="slider-info">
      <template v-if="sliderInfo">
          <div class="banner"><div class="go-back ico" @click="goback"></div><img :src="sliderInfo.titlepic" alt=""/></div>
          <div class="info" v-html="sliderInfo.content"></div>
      </template>
      <div class="no-data" v-else><p>404</p><p>页面找不到了</p></div>
  </div>
</template>
<script>
    import { getQuery } from '../../libs/utils';
    import { MessageBox } from 'mint-ui';

    export default {
        data() {
            return {
                sliderInfo: {},
            }
        },
        created() {
            this.cid = getQuery('cid');

        },
        methods: {
            goback: function () {
                history.back();
            },
            getSliderInfo: function(){
                this.$http.get(`/share/news?cid=${this.cid}`).then(res => {
                    if(res.body.success){
                        this.sliderInfo = res.body.massages[0];
                    } else {
                        this.sliderInfo = '';
                    }
                    console.log(this.sliderInfo)
                },() => {
                    MessageBox('注意', '请求失败');
                });
            }
        },
        mounted(){
            this.getSliderInfo();
        }
    }
</script>
