<template>
  <base-layout>
    <form @submit.prevent="onSignIn">
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>
            {{ $t('welcome') }}
          </ion-card-subtitle>
          <ion-card-title>
            {{ $t('sign_in') }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label
                name="email"
                position="floating">
            {{ $t('email') }}
            </ion-label>
            <ion-input
                v-model="email"
                :placeholder="$t('enter_email')"
                required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label
                name="password"
                position="floating">
            {{ $t('password') }}
            </ion-label>
            <ion-input
                v-model="password"
                type=password
                :placeholder="$t('enter_password')"
                required>
            </ion-input>
          </ion-item>
          <ion-buttons>
            <ion-button type="submit">{{ $t('sign_in') }}</ion-button>
          </ion-buttons>
        </ion-card-content>
      </ion-card>
    </form>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonLabel,
  IonInput,
  IonButtons,
  IonButton,
  IonItem,
  IonCardTitle,
} from "@ionic/vue";

export default {
  name: "Signin",
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel,
    IonInput,
    IonButtons,
    IonButton,
    IonItem,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/') //suunab pärast edukat sisselogimist
      }
    }
  },
  methods: {
    onSignIn() {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }
  }
}
</script>

<style scoped>

</style>