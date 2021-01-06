<template lang="html">
  <Page>
    <StackLayout v-if="trip">
      <ActionBar title="Tournée de Livraison" />
      <Label backgroundColor="#43b883">Départ : {{ trip.departure_time }}</Label>
      <Label backgroundColor="#43b883">Distance : {{ trip.total_distance }}m</Label>

    <GridLayout  backgroundColor="#3c495e">

        <ListView for="stop in trip.stops" backgroundColor="white">
          <v-template>
            <StackLayout orientation="horizontal" v-bind:class="{ visited: stop.visited }">

              <StackLayout width="50%" horizontalAlignment="left">
                <Label :text="stop.contact.first_name" />
                <Label :text="stop.contact.last_name" />
  
                <Label :text="stop.address.address_line1"/>
                <Label v-if="stop.address.address_line2" :text="stop.address.address_line2"/>
                <Label :text="stop.address.city"/>
              </StackLayout>

              <StackLayout width="40%">
                <Button text="Appeler" @tap="callNumber(stop.contact.mobile_no)" horizontalAlignment="right"/>
                <Button text="Naviguer" @tap="navigateTo(stop.address)" horizontalAlignment="right"/>
              </StackLayout>

            </StackLayout>
          </v-template>
        </ListView>

    </GridLayout>
    </StackLayout>
  </Page>

</template>

<script lang="js">
  import * as http from "http";
  var phone = require( "nativescript-phone" );
  var Directions = require("nativescript-directions").Directions;

export default {
    name: 'DeliveryTripDetails',

    props: {
        trip_name: String
    },


    data() {
      return {
          trip: null
      }
    },

    mounted: function() {
          http.getJSON("https://api.singe-savant.com/v0.1/delivery/trip/" + this.trip_name).then(result => {
              this.trip = result;
          }, error => {
              console.log(error);
          });

      },

    methods: {
        markVisited: function(stop) {

        },

          navigateTo: function(address) {
              var clean_address = address.address_line1 + ', ' + address.city + ', ' + address.country

              var directions = new Directions();
              directions.navigate({
                  to: {
                      address: clean_address
                  },
                  type: "driving"
              })

          },
          callNumber: function(phone_number) {
              phone.dial(phone_number, true)
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
