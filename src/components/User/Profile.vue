<template>
  <base-layout>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>
          {{$t('welcome')}}
        </ion-card-subtitle>
        <ion-card-title>
          {{$t('profile_page')}}
        </ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label
              name="email"
              position="floating">E-mail
          </ion-label>
        </ion-item>
      </ion-card-content>
    </ion-card>
    <theme-switcher/>
    <locale-switcher/>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonLabel,
  IonItem,
  IonCardTitle,
} from "@ionic/vue";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  name: "Profile",
  components: {
    ThemeSwitcher,
    LocaleSwitcher,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel,
    IonItem,
  },

}
</script>

<style scoped>

</style>