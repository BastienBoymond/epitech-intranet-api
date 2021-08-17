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

// intra.module.getModuleById("B-INN-000").then(function (module) {
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

// intra.user.getNotification("message").then(function (notification) {
//   console.log(notification);
// });

// intra.home.getBoard().then(function (users) {
//   console.log(users);
// });

// intra.project.getCurrentProjet().then(function (projet) {
//   console.log(projet);
// });

// intra.grades.getCurrentNotes().then(function (notes) {
//   console.log(notes);
// });

// intra.home.getCurrentActivity().then(function (activity) {
//   console.log(activity);
// });

// intra.project.getProjectByModule("B-MUL-100").then(function (projet) {
//   console.log(projet);
// });

// intra.project.getProjectByModuleAndName("B-MUL-100", "MyradAr").then(function (projet) {
//   console.log(projet);
// });

// intra.project.getCurrentProjectByName("stage").then(function (projet) {
//   console.log(projet);
// });

// intra.module.registerModule("B-PRO-300").then(function (module) {
//   console.log(module);
// });

// intra.module.unregisterModule("B-PRO-300").then(function (module) {
//   console.log(module);
// });

// intra.project.getActiviyProject("B-MUL-100", "myRadar").then(function (projet) {
//   console.log(projet);
// });

// intra.project.unregisterProject("B-PRO-300", "Internship").then(function (projet) {
//   console.log(projet);
// });

// intra.project.registerProject("B-PRO-300", "Internship").then(function (projet) {
//   console.log(projet);
// });

// intra.project.getProjectFile("B-PRO-300", "Internship").then(function (file) {
//   console.log(file);
// });

// intra.project.getStatusRegisterProject("B-PRO-300", "Internship").then(function (status) {
//   console.log(status);
// });

// intra.module.getStatusRegisterModule("B-PRO-300").then(function (status) {
//   console.log(status);
// });