const fetch = require('node-fetch');
const nodemailer = require("nodemailer");
const schedule = require('node-schedule');

// Task -1
//--------
const names = [];
fetch("https://api.b2gsoft.com/api/v1/interview/question/one")
    .then(response => response.json())
    .then((data) => {
        const allData = data.data.content.component;
        for (let key in allData) {
            names.push(allData[key]['employee']);
        }
        console.log(names);
    })
    .catch(function (error) {
        console.log("Unable to fetch...", error);
    });


// Task -2
//--------
function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString('en-US', {
                timeZone,
            }),
        );
    }

    return new Date(date.toLocaleString('en-US', { timeZone }));
}

const email = 'samir88biswas@gmail.com'
const password = 'icqpjwigoacmbcaj'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${email}`,
        pass: `${password}`
    }
});


async function send(email) {
    const result = await transporter.sendMail({
        from: 'samir88biswas@gmail.com',
        to: `${email}`,
        subject: 'Test subject',
        text: 'Hello World',
    });
    console.log(JSON.stringify(result, null, 4));
}

const dhaka = changeTimeZone("2022-08-26T06:00:00.000Z", 'Asia/Dhaka')
const kolkata = changeTimeZone('2022-08-25T06:00:00.000Z', 'Asia/Kolkata')

schedule.scheduleJob(dhaka, function () {
    send('samir99biswas@gmail.com');
});







