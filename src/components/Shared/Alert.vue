<template>
  <ion-alert
      :is-open="true"
      :header="$t('alert')"
      :sub-header="code"
      :message="text"
      css-class="my-custom-class"
      :buttons="buttons"
      @didDismiss="onDismissed"
  > Vittus
  </ion-alert>
</template>

<script>
import { IonAlert } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Alert",
  props: ['text', 'code'],
  components: { IonAlert },
  setup() {
    const buttons = ['Ok'];

    return { buttons }
  },
  methods: {
    onClose() {
      this.$emit('dismissed');
    }
  }
});
</script>