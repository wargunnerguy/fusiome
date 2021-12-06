<template>
  <div class="cube-container">

    <swiper :effect="'cube'" :direction="'vertical'" :grabCursor="true" :cubeEffect='{
  "shadow": true,
  "slideShadows": true,
  "shadowOffset": 20,
  "shadowScale": 0.94
}' :pagination="true" class="hor-swiper swiper">

      <swiper-slide class="swiper-slide img-fluid " v-for="item in fusiomes"
                    :key="item.id"
                    :fusiome-title="item.title"
                    :fusiome-img-url="item.imageUrl"
                    :fusiome-description="item.description"
                    :brand-description="item.brand_description"
                    :credits="item.credits"
                    :looking-for="item.looking_for"
                    :what-to-do="item.what_to_do"
                    :requested-content="item.requested_content"
                    :required-hashtags="item.required_hashtags"
                    :rewards="item.rewards"
      >
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
                    {{ $t('statistics_title') }}
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <span>
                  <strong>Shared on facebook by:</strong> 13 people
                  </span>
                  <br>
                  <span><strong>Shared on Instagram by:</strong> 289 people</span>
                  <br>
                  <span><strong>Total credits earned by people:</strong> 2895 credits</span>
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
                <div class="main-slide-bottom-shade-box">
                  <div class="main-slide-buttons">
                    <ion-button size="large" fill="solid" shape="round" color="warning">
                      <span>Keeldu</span>
                    </ion-button>
                    <!--                    <ion-button size="large" fill="solid" shape="round">-->
                    <ion-button size="large" color="primary" fill="solid" shape="round">
                      <ion-icon slot="icon-only" :icon="star"></ion-icon>
                    </ion-button>
                    <div>
                      <ion-button size="large" color="success" fill="solid" shape="round">
                        <span>Teeni</span>
                        <ion-icon slot="start" :icon="image"></ion-icon>
                        <ion-icon slot="start" :icon="ticketOutline"></ion-icon>
                      </ion-button>
                      <sup>
                        <ion-badge color="danger" style="position: absolute; right: 10px; top: -23px;">{{
                            item.credits
                          }}
                        </ion-badge>
                      </sup>
                    </div>
                  </div>
                </div>
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
                    The Description
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    {{ item.description }}
                  </ion-label>
                </ion-card-content>
              </ion-card>
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-subtitle>
                    Looking for
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    {{ item.looking_for }}
                  </ion-label>
                </ion-card-content>
              </ion-card>
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-subtitle>
                    What to do
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    {{ item.what_to_do }}
                  </ion-label>
                </ion-card-content>
              </ion-card>
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-subtitle>
                    Requested content
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    {{ item.requested_content }}
                  </ion-label>
                </ion-card-content>
              </ion-card>
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-subtitle>
                    Required hashtags
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    {{ item.required_hashtags }}
                  </ion-label>
                </ion-card-content>
              </ion-card>
              <ion-card class="swiper-slide-card">
                <ion-card-header>
                  <ion-card-subtitle>
                    Rewards <ion-badge color="danger">{{ item.credits }}</ion-badge>
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-label v-if="item.rewards.product_reward">
                        Product reward: <ion-label>{{ item.rewards.product_reward }}</ion-label>
                  </ion-label>
                  <ion-label v-if="item.rewards.monetary_reward">
                        Monetary reward: <ion-label>{{ item.rewards.monetary_reward }}</ion-label>
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
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonImg,
  IonLabel,
  IonCardTitle,
  IonButton,
  IonIcon
} from '@ionic/vue';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';


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
import {personCircle, search, ticketOutline, image, star} from 'ionicons/icons';
// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);


export default {
  name: "FusiomeSlider",
  props: [
    'fusiomeTitle',
    'fusiomeImgUrl',
    'fusiomeDescription',
    'credits',
    'lookingFor',
    'whatToDo',
    'requestedContent',
    'required_hashtags',
    'rewards',
  ],
  components: {
    Swiper,
    SwiperSlide,
    IonBadge,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonImg,
    IonLabel,
    IonCardTitle,
    IonButton,
    IonIcon,
  },
  setup() {
    return {personCircle, search, ticketOutline, image, star};
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
  max-width: 60vh;
}

.swiper {
  height: 100%;
  width: 100%;
}

.main-swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  max-width: max-content;
  min-width: 100%;
}

.main-swiper-slide ion-img {
  background-position: center;
  background-size: cover;
  min-width: 100%;
}

.main-slide-bottom-shade-box {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 14vh;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgb(10, 10, 10) 0%, rgba(10, 10, 10, 0.9) 75%, rgba(20, 20, 20, 0.01) 100%);
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.main-slide-buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 20px;
}

.container-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #424242;
  height: 100%;
  width: 100%;
  margin: auto;
}

.swiper-slide-card {
  margin-bottom: 0;
}
</style>
