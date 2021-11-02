<template>
  <div class="cube-container">

    <swiper :effect="'cube'" :direction="'vertical'" :grabCursor="true" :cubeEffect='{
  "shadow": true,
  "slideShadows": true,
  "shadowOffset": 20,
  "shadowScale": 0.94
}' :pagination="true" class="hor-swiper swiper">

      <swiper-slide class="swiper-slide img-fluid " v-for="item in fusiomes" :key="item.id" :fusiome-title="item.title"
                    :fusiome-img-url="item.imageUrl"
                    :fusiome-description="item.description">
        <swiper :effect="'cube'" :initialSlide=1 :direction="'horizontal'" :grabCursor="true" :cubeEffect='{
  "shadow": false,
  "slideShadows": true,
  "shadowOffset": 20,
  "shadowScale": 0.94
}' :pagination="true" class="hor-slider swiper">
          <!--        Left Slide-->
          <swiper-slide class="swiper-slide">
            <ion-card class="container-card">
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-title class="ion-text-center">
                    {{ item.title }}
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-subtitle>
                    Statistics
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  {{ item.description }}
                </ion-card-content>
              </ion-card>
            </ion-card>
          </swiper-slide>
          <!--        Main Slide-->
          <swiper-slide class="swiper-slide main-swiper-slide">
            <ion-card class="container-card">
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-title class="ion-text-center">
                    {{ item.title }}
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-card>
                <ion-img :src=item.imageUrl alt=""/>
              </ion-card>
            </ion-card>
          </swiper-slide>
          <!--        Right Slide-->
          <swiper-slide class="swiper-slide">
            <ion-card class="container-card">
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-title class="ion-text-center">
                    {{ item.title }}
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-subtitle>
                    Premiered in 2020
                  </ion-card-subtitle>
                  <ion-card-title>
                    {{ fusiomeTitle }}
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    {{ fusiomeDescription }}
                  </ion-label>
                </ion-card-content>
              </ion-card>
            </ion-card>
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonImg,
  IonLabel,
  IonCardTitle
} from '@ionic/vue';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
// import FusiomeSliderH from '@/components/Fusiome/FusiomeSliderH'


// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, {
  EffectCube, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);


export default {
  name: "FusiomeSlider",
  props: ['fusiomeTitle', 'fusiomeImgUrl', 'fusiomeDescription'],
  components: {
    Swiper,
    SwiperSlide,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonImg,
    IonLabel,
    IonCardTitle
  },
  methods: {
    onLoadFusiome(id) {
      this.$router.push('/fusiomes/' + id)
    }
  },
  computed: {
    fusiomes() {
      return this.$store.getters.featuredFusiomes
    }
  },
}
</script>
<style lang="scss" scoped>

.cube-container {
  height: 94vh; /* TODO: height automatic */
  margin: auto;
  max-width: 600px;
}

.swiper {
  height: 100%;
}

.main-swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: inherit;
  max-width: max-content;
}

.main-swiper-slide ion-img {
  background-position: center;
  background-size: cover;
  height: inherit;
}

.container-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /*border: 2px solid red;*/
  background-color: #424242;
  height: 100%;
  margin: auto;
}

.swiper-slide-card {
  margin-bottom: 0;
}

/*ion-card {*/
/*  padding: 0;*/
/*  margin: 0;*/
/*}*/


</style>
