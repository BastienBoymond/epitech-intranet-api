const IntranetApi = require("./index");

const intra = new IntranetApi(
  "https://intra.epitech.eu/auth-1e67ff171ee7508ce6f0a66cd3ea883dd60f9482"
);

intra.user.getGpa().then(function (GPA) {
  console.log(GPA);
});

intra.user.getCredits().then(function (credits) {
  console.log(credits);
});

intra.user.getPromo().then(function (promo) {
  console.log(promo);
});

intra.user.getName().then(function (name) {
  console.log(name);
});

intra.user.getScolarYear().then(function (scolarYear) {
  console.log(scolarYear);
});

intra.user.getEpitechEmail().then(function (epiEmail) {
  console.log(epiEmail);
});

intra.user.getBinomes().then(function (binomes) {
  console.log(binomes);
});