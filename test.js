const IntranetApi = require("./index");

const intra = new IntranetApi(
  "https://intra.epitech.eu/auth-6600189fa8de9678ca63a046fdf6e2455fd9acc7"
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