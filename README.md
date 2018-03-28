# PopVenues

This web app finds popular places based on the best **[Foursquare](https://www.foursquare.com/)** user's ratings.

Just write a location and the top trendy venues will appear on a map.

## Summary

This is a **[node.js](https://nodejs.org)** application with a **[Bootstrap](https://getbootstrap.com/)** / **[jQuery](https://jquery.com/)** interface.

There is a webservice on the backend responsible for make requests to the **Foursquare RESTful API** and provide **JSON** formatted data to the frontend.

The interface uses **GoogleMaps** library to provide location suggestions and place popular venues on a map.

## Installation

* Install [node.js](https://nodejs.org) on your computer.

* Clone/download the code.

* Install required modules with: `mpm install`

* Create a `.env` with your own parameters. Use `.env_example` as a template.

* Execute the app with `npm start` or `node app.js`.

* Finally, if you wanna run some unit tests remember to include dev depencies and execute `npm test`.
