# Pok-e-balz 0.1

React Native tech demo.  
Downloads a random Pokemon from the Pokemon API. Shows the image but not the name. User clicks on the image to reveal the name, or the Pokeball to get a new Pokemon.  
Built it by accident when experimenting with the Pokemon API.

## to use it:

Have expo installed on your machine - or use a virtual device with expo on it.  
Have your virtual device loaded if you are using one.

1. clone the repo
2. run npm install
3. run npm start
4. scan the QR code with your expo app, or press 'a' to launch on AVD

## how it works:

When the app loads, it fetches a random pokemon object from the public API https://pokeapi.co/api/v2/pokemon/ with a random number at the end. The pokemon image URL is held in state (pokeImage), and rendered to the display.
The poorly named showName/setShowName states are for toggling the message "tap to reveal name", and the name of the currently rendered pokemon.
When the pokeball is tapped, the page essentially resets itself, by retreiving a new name, image, rendering the new image, and setting the text at the top of the app to "tap to reveal name".

## Challenges:

- Wading through the thousands of object properties to find the relevant data and get started!
- Attempting to strip everything out of app.js and into more managable individual files ended up breaking everything because I tried to change too many things at once. Now it's working again I'm reluctant to mess with it.

## Future:

- Simplify file structure
- Improve the UI and make it more child friendly.  
  options for difficulty settings - choose from all 899 pokemon or smaller, categorised groups.
- Add sound - perhaps something to read the name out loud.
- Reskin - after some improvements, remake this with the Star Wars API.
