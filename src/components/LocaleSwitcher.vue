<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        {{$t('locale_setting')}}
      </ion-card-title>
    </ion-card-header>
    <ion-list>
      <ion-radio-group v-model="theme">
        <ion-item>
          <ion-label>{{$t('locale_en')}}</ion-label>
          <ion-radio type="radio" id="en" value="en"/>
        </ion-item>
        <ion-item>
          <ion-label>{{$t('locale_et')}}</ion-label>
          <ion-radio type="radio" id="et" value="et"/>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  </ion-card>
</template>

<script>
export default {
  name: "LocaleSwitcher"
}
</script>

<style scoped>

</style>