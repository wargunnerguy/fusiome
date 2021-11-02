<template>
  <base-layout>
    <form @submit.prevent="onSignUp">
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>
            Welcome
          </ion-card-subtitle>
          <ion-card-title>
            Sign Up
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label
                name="email"
                position="floating">E-mail
            </ion-label>
            <ion-input
                v-model="email"
                placeholder="Enter E-mail.."
                required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label
                name="password"
                position="floating">Password
            </ion-label>
            <ion-input
                v-model="password"
                type=password
                placeholder="Enter Password.."
                required>
            </ion-input>
          </ion-item>
          <ion-buttons>
            <ion-button type="submit">Sign up</ion-button>
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
  IonCardTitle
} from "@ionic/vue";

export default {
  name: "Signup",
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
    IonItem
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
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
    onSignUp() {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>

<style scoped>

</style>