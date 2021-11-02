<template>
  <base-layout>
        <fusiome-slider></fusiome-slider>
  </base-layout>
</template>

<script>

import FusiomeSlider from "@/components/Fusiome/FusiomeSlider";
import BaseLayout from "@/components/BaseLayout";

export default {
  name: "Fusiomes",
  components: {
    BaseLayout,
    FusiomeSlider,
  },
}
</script>
