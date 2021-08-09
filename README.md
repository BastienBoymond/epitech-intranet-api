# epitechIntranetApi
Api for Epitech Intranet
    https://www.npmjs.com/package/epitech_intranet_api
# Install
    npm i epitech_intranet_api
# Use it:
        
        const IntraApiEpi = require("epitechIntranetApi");

        const intra = new IntranetApi("Your autologin");

# User:
    getProfile
        intra.user.getProfile() returns important information about the user
    getGpa
        intra.user.getGpa() return the user GPA
    getCredits
        intra.user.getCredits() return the user Crédits
    getPromo
        intra.user.getPromo() return the user Promo
    getScolarYear
        intra.user.getScolarYear() return the user ScolarYear
    getStudentYear
        intra.user.getStudentYear() return the user StudentYear
    getEpitechEmail
        intra.user.getEpitechEmail() return the user Epitech Email
    getBinomes
        intra.user.getBinomes() return the user Binomes
    getFlags
        intra.user.getFlags() return all the user Flags
        intra.user.getFlags("medal") return the user Medail Flags
        intra.user.getFlags("remarkable") return the user Remarkable Flags
        intra.user.getFlags("difficulty") return the user Difficulty Flags
        intra.user.getFlags("ghost") return the user Ghost Flags
    getPicture
        intra.user.getPicture() return the user url Picture
    getNotifications
        intra.user.getNotifications() return the user Notifications

# Modules:

    getAllModules
        intra.module.getAllModules() return all the modules
    getModulesBySemester 
        intra.module.getModulesBySemester(semester) return all the modules of the semester
    getModuleById
        intra.module.getModuleById(moduleId) return the module with the id
    getModuleByStatus
        intra.module.getModuleByStatus(status) return all the modules with the status
    getModuleByGrades
        intra.module.getModuleByGrades(grades) return all the modules with the grades

# Planning :

    getCurrentPlanning
        intra.planning.getCurrentPlanning() return the current planning with possible args like "semester"

# Grades :
    getGrades
        intra.grades.getGrades() return all the grades or separetely by moduleId

# Home :
    getBoard
        intra.home.getBoard() return the Home Board page of Intranet
    getCurrentProjet
        intra.home.getCurrentProjet() return the current projet
    getCurrentNotes
        intra.home.getCurrentNotes() return the current notes
    getCurrentActivity
        intra.home.getCurrentActivity() return the current activity