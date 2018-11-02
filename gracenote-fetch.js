const Gracenote = require("node-gracenote");

const { GRACENOTE_WEB_CLIENT_ID, GRACENOTE_USER_ID, GRACENOTE_CLIENT_TAG } = require('./secrets')

const uid = uuidv4();

const api = new Gracenote(GRACENOTE_WEB_CLIENT_ID, GRACENOTE_CLIENT_TAG, GRACENOTE_USER_ID, );

api.setExtended('MOOD', 'TEMPO');

let trackLookup = (artist, album, track) => {
  api.searchTrack(artist, album, track, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result[0].tracks)
    }
  })
}

trackLookup("Kings of Leon", "Only by the Night", "Sex on fire");