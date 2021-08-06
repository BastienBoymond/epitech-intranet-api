# epitechIntranetApi
Api for Epitech Intranet
Use it:
        
        const IntraApiEpi = require("epitechIntranetApi");

        const intra = new IntranetApi("Your autologin");

User:

    getGpa
        intra.user.getGpa() return the user GPA
    getCredits
        intra.user.getCredits() return the user Crédits
    getPromo
        intra.user.getPromo() return the user Promo
    getScolarYear
        intra.user.getScolarYear() return the user ScolarYear
    getEpitechEmail
        intra.user.getEpitechEmail() return the user Epitech Email
    getBinomes
        intra.user.getBinomes() return the user Binomes