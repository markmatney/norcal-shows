This is a client-side (MOBILE!!!) web application that provides a useful (search-able, filter-able, more read-able) interface to [Steve Koepke](http://www.calweb.com/~skoepke/)'s [list](http://www.jmarshall.com/events/list.txt) of Bay Area and Northern California shows. It depends on a companion server application (code [here](https://github.com/markmatney/norcal-shows-data)) for the data.

# Setup

I have Node v5.8.0 and NPM 3.8.1 installed. Just get the code, then do

```Shell
cd norcal-shows
npm install
npm start
```

to run the app on localhost:3000. To change the port, edit `app/server.js`.
