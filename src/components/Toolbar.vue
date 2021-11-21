<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button v-for="item in menuItemsLeft" :key="item.title" :router-link="item.link">{{ item.title }}</ion-button>
      <ion-searchbar show-cancel-button="focus" :cancel-button-text="$t('searchbar_cancel-button-text')"
                     :placeholder="$t('searchbar_placeholder')"></ion-searchbar>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button v-for="item in menuItemsRight" :key="item.title" :router-link="item.link">{{ item.title }}
      </ion-button>
      <ion-button v-if="userIsAuthenticated" @click="onLogOut" >{{ $t("sign_out") }}
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
          {icon: '', title: this.$t("fusiomes"), link: '/'},
          //TODO add searchbar
        ]
      }
      return menuItemsLeft
    },
    menuItemsRight() {
      let menuItemsRight = [
        {icon: '', title: this.$t("sign_up"), link: '/signup'},
        {icon: '', title: this.$t("sign_in"), link: '/signin'},
      ]
      if (this.userIsAuthenticated) {
        menuItemsRight = [
          {icon: '', title: this.$t("profile"), link: '/profile'},
        ]
      }
      return menuItemsRight
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogOut() {
      this.$store.dispatch('logout');
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>