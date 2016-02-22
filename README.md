This is a web application that parses [Steve Koepke](http://www.calweb.com/~skoepke/)'s [list](http://www.jmarshall.com/events/list.txt) of Bay Area concerts, and reorganizes it into a search-able, filter-able, and all-around more useful dataset.

# Setup

I have Node v0.10.25 and NPM 1.3.10 installed. Tweaks may be required if you are using later versions.

Just get the code, then do

```Shell
cd norcal-shows
npm install
node server.js
```

to run the app on localhost:3000. To change the port, go into `server.js`.
