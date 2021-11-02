<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button v-for="item in menuItemsLeft" :key="item.title" :router-link="item.link">{{ item.title }}</ion-button>
      <ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button v-for="item in menuItemsRight" :key="item.title" :router-link="item.link">{{ item.title }}
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script>
import {IonButton, IonButtons, IonToolbar, IonSearchbar} from '@ionic/vue';

export default {
  name: "Toolbar",
  components: {
    IonButtons,
    IonButton,
    IonToolbar,
    IonSearchbar,
  },
  data() {
    return {}
  },
  computed: {
    menuItemsLeft() {
      let menuItemsLeft = []
      if (this.userIsAuthenticated) {
        menuItemsLeft = [
          {icon: '', title: 'Fusiomes', link: '/'},
          //TODO add searchbar
        ]
      }
      return menuItemsLeft
    },
    menuItemsRight() {
      let menuItemsRight = [
        {icon: '', title: 'Sign up', link: '/signup'},
        {icon: '', title: 'Sign in', link: '/signin'},
      ]
      if (this.userIsAuthenticated) {
        menuItemsRight = [
          // TODO add signout
          {icon: '', title: 'Profile', link: '/profile'},
          {icon: '', title: 'Signout', link: '/'},
        ]
      }
      return menuItemsRight
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>

<style scoped>

</style>