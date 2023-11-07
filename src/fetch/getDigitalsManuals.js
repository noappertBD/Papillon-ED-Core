const errors = require("./errors")

class getDigitalsManuals {
    constructor(session) {
        this.session = session;

    }

    fetch() {
        if(!this.session.findModule("MANUELS_SCOLAIRES").enable) throw errors.MODULE_DISABLE.drop("MANUELS_SCOLAIRES");
        let url = `/E/${this.session.student.id}/manuelsNumeriques.awp?verbe=get`
        let body = `data={}`
        return this.session.request.post(url, body)
    }
    
}

module.exports = getDigitalsManuals;