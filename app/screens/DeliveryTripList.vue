<template lang="html">
  <Page>
    <ActionBar title="Tournées de Livraison"/>

  <GridLayout>
        <ListView v-if="trip_list" for="trip in trip_list">
          <v-template>
            <StackLayout orientation="horizontal">
              <StackLayout width="60%" horizontalAlignment="left">
                <Label :text="trip.name" @tap="goToPageDeliveryDetails(trip)"/>
              </StackLayout>


              <StackLayout width="auto">
                <Label text="SCHEDULED"  horizontalAlignment="right"/>
              </StackLayout>
            </StackLayout>
          </v-template>
        </ListView>
  </GridLayout>

    </Page>
</template>

<script lang="js">
  import * as http from "http";
  var phone = require( "nativescript-phone" );
var Directions = require("nativescript-directions").Directions;

import DeliveryTripDetails from './DeliveryTripDetails'

export default {
    name: 'DeliveryTripList',

    data() {
      return {
          trip_list: null
      }
    },

      mounted: function() {
          http.getJSON("https://api.singe-savant.com/v0.1/delivery/trip/").then(result => {
              this.trip_list = result;
          }, error => {
              console.log(error);
          });

      },

    methods: {
        goToPageDeliveryDetails: function(trip) {
            this.$navigateTo(DeliveryTripDetails, {props: {
                trip_name: trip.name
            }})
        }

      }

  }
</script>

<style scoped>
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
