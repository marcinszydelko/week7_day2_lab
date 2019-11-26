import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data:{
      allCountries: [],
      selectedCountry: "",
      favourites: [],
      neighbouringCountries: []
    },
    mounted(){
      this.getAllCountries();
    },
    computed: {
      totalPopulation: function() {
        return this.allCountries.reduce((total, country) => total + country.population, 0)
      },

    },

    methods: {
      getAllCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
      },

      addToFavourites: function() {
        this.favourites.push(this.selectedCountry)
      },
      
    }

  })
})
