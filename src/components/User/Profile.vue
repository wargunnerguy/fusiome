<template>
  <base-layout>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>
          Welcome
        </ion-card-subtitle>
        <ion-card-title>
          Profile page
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

export default {
  name: "Profile",
  components: {
    ThemeSwitcher,
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