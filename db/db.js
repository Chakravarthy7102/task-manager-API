const mongoosse = require("mongoose");
//for the password section use special charecter notation of mongodb
//link to the official docs : https://docs.atlas.mongodb.com/troubleshoot-connection/#special-characters-in-connection-string-password

const connectionDb = (uri) => {
  return mongoosse.connect(uri, { useNewUrlParser: true });
};
module.exports = connectionDb;
