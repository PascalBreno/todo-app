module.exports = function(req, res, next) {
  res.hearder("Acess-Control-Allow-Origin", "*");
  res.hearder(
    "Acess-Control-Allow-Methods",
    "GET,POST,OPTIONS,PUT,PATCH,DELETE"
  );
  res.hearder(
    "Acess-Control-Allow-hEADERS",
    "Origin, X-requested-With, Content-Type, Accept"
  );
  next();
};
