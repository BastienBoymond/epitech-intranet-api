const fs = require('fs');

const IntranetApi = require("./index");

const token = JSON.parse(fs.readFileSync("token.json").toString());

const intra = new IntranetApi(token.token);

// intra.user.getGpa().then(function (GPA) {
// console.log(GPA);
// });

// intra.user.getCredits().then(function (credits) {
// console.log(credits);
// });

// intra.user.getPromo().then(function (promo) {
// console.log(promo);
// });

// intra.user.getName().then(function (name) {
// console.log(name);
// });

// intra.user.getScolarYear().then(function (scolarYear) {
// console.log(scolarYear);
// });

// intra.user.getEpitechEmail().then(function (epiEmail) {
// console.log(epiEmail);
// });

// intra.user.getBinomes().then(function (binomes) {
// console.log(binomes);
// });

// intra.user.getFlags().then(function (flags)  {
// console.log(flags);
// });

// intra.user.getFlags("medal").then(function (flags) {
// console.log(flags);
// });

// intra.user.getFlags("remarkable").then(function (flags) {
// console.log(flags);
// });

// intra.user.getPicture().then(function (picture) {
// console.log(picture);
// });

// intra.user.getSemester().then(function (semester) {
// console.log(semester);
// });

// intra.user.getProfile().then(function (profile) {
// console.log(profile);
// });

// intra.module.getAllModules().then(function (modules) {
//   console.log(modules);
// });

// intra.module.getModuleById("B-MUL-100").then(function (module) {
//   console.log(module);
// });

// intra.module.getModulesBySemester(3).then(function (modules) {
//   console.log(modules);
// });

// intra.module.getModuleByStatus("ongoing").then(function (modules) {
//   console.log(modules);
// });

// intra.module.getModuleByName("InteRNship").then(function (module) {
//   console.log(module);
// });

// intra.module.getModuleByGrades("C").then(function (modules) {
//   console.log(modules);
// });

// intra.planning.getCurrentPlanning(2).then(function (plannings) {
//   console.log(plannings);
// });

// intra.grades.getGrades("B-MUL-100").then(function (grades) {
//   console.log(grades);
// });