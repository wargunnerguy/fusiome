<template>
  <ion-page>
    <ion-header>
      <toolbar></toolbar>
    </ion-header>
    <ion-content>
      <slot/>
    </ion-content>
  </ion-page>
</template>

<script>

import {IonHeader, IonContent, IonPage} from "@ionic/vue"
import Toolbar from "@/components/Toolbar";

export default {
  name: "BaseLayout",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    Toolbar,
  }
}
</script>
