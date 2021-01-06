<template lang="html">
  <Page>
    <GridLayout>
      <Button @tap="goToDelivery()">Tournées de Livraison</Button>
    </GridLayout>

    </Page>
</template>

<script lang="js">
    import DeliveryTripList from '@/screens/DeliveryTripList'
import {fonticon} from 'nativescript-fonticon'


export default {

    components: {
    },

    data() {
      return {
      }
    },

    methods: {
        goToDelivery() {
            this.$navigateTo(DeliveryTripList);
        }
    }

  }
</script>

<style scoped>

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
