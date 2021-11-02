<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        {{ $t('locale_setting') }}
      </ion-card-title>
    </ion-card-header>
    <ion-list>
      <ion-radio-group v-model="$i18n.locale">
        <ion-item v-for="(lang, i) in langs" :key="`Lang${i}`">
          <ion-label>{{ $t(lang) }}</ion-label>
          <ion-radio :id="lang" :value="lang"/>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  </ion-card>
</template>

<script>
//TODO salvesta seaded andmebaasi ja tagasta need sealt
import {IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup} from "@ionic/vue";

export default {
  name: "LocaleSwitcher",
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
      langs: ['en', 'et']
    }
  },
  beforeMount() {
    if (localStorage.getItem('locale') === null) {
      this.$i18n.locale = 'en';
    } else {
      this.$i18n.locale = localStorage.getItem('locale');
    }
  },
  watch: {
    '$i18n.locale': function (newLocale) {
      localStorage.setItem('locale', newLocale);
    }
  }
}
</script>

<style scoped>

</style>