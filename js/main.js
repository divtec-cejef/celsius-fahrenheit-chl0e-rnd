/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  //Saisi et transformation
  let temperatureCelcius = Number(prompt('Température en celcius :'));

  //S'assurer que l'utilisateur a bien saisi un nombre
  if(isNaN(temperatureCelcius)) {
    alert('Entrez des nombres !');
  } else {
    let temperatureFahrenheit = temperatureCelcius * 9 / 5 + 32;
    alert(`${temperatureCelcius} °C = ${temperatureFahrenheit} °F`);
  }

}()); // Main IIFE

