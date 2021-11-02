<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        {{$t('theme_setting')}}
      </ion-card-title>
    </ion-card-header>
      <ion-list>
          <ion-radio-group v-model="theme">
            <ion-item>
              <ion-label>{{$t('theme_default')}}</ion-label>
              <ion-radio type="radio" id="default" value="default"/>
            </ion-item>
            <ion-item>
              <ion-label>{{$t('theme_custom')}}</ion-label>
              <ion-radio type="radio" id="custom" value="custom"/>
            </ion-item>
            <ion-item>
              <ion-label>{{$t('theme_dark')}}</ion-label>
              <ion-radio type="radio" id="dark" value="dark"/>
            </ion-item>
            <ion-item>
              <ion-label>{{$t('theme_light')}}</ion-label>
              <ion-radio type="radio" id="light" value="light"/>
            </ion-item>
          </ion-radio-group>
      </ion-list>
  </ion-card>
</template>

<script>
import {IonItem, IonLabel, IonRadio, IonRadioGroup, IonCardHeader, IonCardTitle, IonList, IonCard} from "@ionic/vue";

export default {
  name: "ThemeSwitcher",
  components: {
    IonCard,
    IonList,
    IonRadio,
    IonRadioGroup,
    IonItem,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
  },
  data() {
    return {
      theme: ''
    }
  },
  beforeMount() {
    if (localStorage.getItem('theme') === null) {
      this.setTheme('default', null);
    } else {
      this.setTheme(localStorage.getItem('theme'), null);
    }
  },
  methods: {
    setTheme(newTheme, oldTheme) {
      if (document.body.classList.contains(oldTheme)) {
        document.body.classList.toggle(oldTheme);
      }
      document.body.classList.toggle(newTheme);
      document.body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      this.theme = newTheme;
    }
  },
  watch: {
    theme(newValue, oldValue) {
      this.setTheme(newValue, oldValue);
    }
  }
}

</script>

<style scoped>

</style>