const Notification = require("../repositories").notificationRepository
const transporter = require("../config/mailConfig")


async function sendmail(mailForm, mailTo, subject, text) {
    try {
        const res = await transporter.sendMail({
            from: mailForm,
            to: mailTo,
            subject: subject,
            text: text
        })
        return res;
    } catch (error) {
        console.log(error)
        throw error
    }
}
async function creatticket(data) {
    try {
        const res = await Notification.create(data);
        return res;
    } catch (error) {
        console.log(error)
        throw error

    }
}

async function getpandingmail() {
    try {
        const res = await Notification.getpanding();
        return res;
    } catch (error) {
        console.log(error)
        throw error

    }
}
module.exports = {
    sendmail,
    getpandingmail,
    creatticket
}