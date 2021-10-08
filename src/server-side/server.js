/**
 * IMPORTS
 * @type {e | (() => Express)}
 */
require("dotenv").config();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const helmet = require('helmet');
const Knex = require("knex");
// const nodemailer = require("nodemailer");

/**
 * KNEX
 */
const db = Knex({
    client: "pg",
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

/**
 * EXPRESS
 */
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/**
 * CORS implemented so that we don"t get errors when trying to access the
 * server from a different server location
 */
app.use(cors({}));

/**
 * Helmet implemented to secure HTTP headers
 */
app.use(helmet());

/**
 * Allows JSON parsing
 */
app.use(bodyParser.json());

/**
 * POST: Fetch player list
 */
app.post("/players-list", (req, res) => {
    const county = req.body.countyOfResidence;
    db('gsmuseraccounts').where({
        county_of_residence: county
    }).select('first_name', 'county_of_residence')
        .then((data) => {
            res.json(data);
        })
});

/**
 * POST: Adds newly registered users to database and calls NodemailerSend()
 */
app.post("/user-registration", (req, res) => {
    const {
        firstName,
        lastName,
        emailAdd,
        countryOfResidence,
        countyOfResidence,
        gender,
        dob,
        password
    } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        db("useraccounts").where({email_add: emailAdd}).select("email_add")
            .then((data) => {
                res.setHeader("Content-Type", "application/json");
                if (data == "") {
                    db("gsmuseraccounts").insert({
                        first_name: firstName,
                        last_name: lastName,
                        email_add: emailAdd,
                        country_of_residence: countryOfResidence,
                        county_of_residence: countyOfResidence,
                        gender: gender,
                        dob: dob,
                        password: hash,

                    }).then(() => {
                        // NodemailerSend(emailAdd).then(r => {console.log(r)});
                        return res.json({msg: "New user added"});
                    });
                } else {
                    return res.json({msg: "Email taken"});
                }
            });
    });
});

/**
 * POST: Checks whether a user logging in exists in the database
 */
app.post("/user-validation", (req, res) => {
    const emailAdd = req.body.emailAdd;
    db("gsmuseraccounts")
        .where({email_add: emailAdd})
        .select("email_add")
        .then(async (data) => {
            res.setHeader("Content-Type", "application/json");
            if (data == "") {
                res.send(false);
            } else {
                let storedHash = await
                db("gsmuseraccounts").where({email_add: emailAdd}).pluck("password");
                const checkHash = bcrypt.compareSync(req.body.password, storedHash.toString());
                if (checkHash) {
                    res.send(data);
                } else {
                    res.send(false);
                }
            }
        }).catch((err) => {
        console.log(err);
    });
});


// /**
//  * POST: Adds newly registered users to database and calls NodemailerSend()
//  */
// app.post("/user-registration", (req, res) => {
//     const {
//         firstName,
//         lastName,
//         emailAdd,
//         countryOfResidence,
//         gender,
//         dob,
//         password,
//         surveysCompleted = 0,
//         tokensPaid = 0,
//         currentBalance = 0,
//         surveysSubmitted = 0,
//         surveysCreated = 0
//     } = req.body;
//     const saltRounds = 10;
//     bcrypt.hash(password, saltRounds, function (err, hash) {
//         db("useraccounts").where({email_add: emailAdd}).select("email_add")
//             .then((data) => {
//                 res.setHeader("Content-Type", "application/json");
//                 if (data == "") {
//                     db("useraccounts").insert({
//                         first_name: firstName,
//                         last_name: lastName,
//                         email_add: emailAdd,
//                         country_of_residence: countryOfResidence,
//                         gender: gender,
//                         dob: dob,
//                         password: hash,
//                         surveys_completed: surveysCompleted,
//                         tokens_paid: tokensPaid,
//                         current_balance: currentBalance,
//                         surveys_submitted: surveysSubmitted,
//                         surveys_created: surveysCreated,
//                     }).then(() => {
//                         NodemailerSend(emailAdd).then(r => {console.log(r)});
//                         return res.json({msg: "New user added"});
//                     });
//                 } else {
//                     return res.json({msg: "Email taken"});
//                 }
//             });
//     });
// });
//

//
// /**
//  * POST: Returns number of surveys completed for logged in user
//  */
// app.post("/survey-tally", (req, res) => {
//     const emailAdd = req.body.user;
//     db("useraccounts").where({email_add: emailAdd}).select("surveys_completed")
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//
// });
//
// /**
//  * POST: Returns current balance of earnings for surveys completed
//  */
// app.post("/current-balance", (req, res) => {
//     const emailAdd = req.body.user;
//     db("useraccounts").where({email_add: emailAdd}).select("current_balance")
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//
// });
//
// /**
//  * POST: Increment user survey count
//  */
// app.post("/survey-addition", (req, res) => {
//     db("useraccounts")
//         .where(req.body)
//         .increment({surveys_completed: 1})
//         .then(() => {
//             res.setHeader("Content-Type", "application/json");
//             return res.json({msg: "Survey tally updated"});
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });
//
// /**
//  * POST: Increment tokens paid and balance of user
//  */
// app.post("/token-payment", (req, res) => {
//     db("useraccounts")
//         .where(req.body)
//         .increment({tokens_paid: 50, current_balance: 50})
//         .then(() => {
//             res.setHeader("Content-Type", "application/json");
//             return res.json({msg: "Balances updated"});
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });
//
// /**
//  * POST: Check if surveyId already exists - if not enter it into table
//  */
// app.post("/survey-data-update", (req, res) => {
//     const numRespondents = 0, surveyValue = 0, surveyCost = 0;
//     db("surveydata").insert({
//         survey_id: req.body.survey_id,
//         number_of_respondents: numRespondents,
//         survey_value: surveyValue,
//         survey_total_cost: surveyCost,
//         cookie_id: req.body.cookie_id,
//     }).onConflict('survey_id').ignore().then(() => {
//         res.setHeader("Content-Type", "application/json");
//         return res.json({msg: "Survey data updated"});
//     }).catch((err) => {
//         console.log(err);
//     });
// });
//
// /**
//  * POST: Finish updating 'surveydata' table
//  */
// app.post("/survey-data-increment", (req, res) => {
//     db("surveydata")
//         .where({survey_id: req.body.survey_id})
//         .increment({
//             number_of_respondents: 1, survey_value: 50,
//             survey_total_cost: 50
//         }).then(() => {
//         res.setHeader("Content-Type", "application/json");
//         return res.json({msg: "Remaining data updated"});
//     }).catch((err) => {
//         console.log(err);
//     });
// });
//
// /**
//  * POST: Fetch userid
//  */
// app.post("/userid-number", (req, res) => {
//     db("useraccounts").where({
//         email_add: req.body.email_add
//     }).select("userid")
//         .then((data) => {
//             res.setHeader("Content-Type", "application/json");
//             res.json(data[0].userid);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });
//
// /**
//  * POST: Check for cookie - if it exists then user has already completed the
//  * survey
//  */
// app.post("/survey-completed-check", (req, res) => {
//     db("surveyuserdata").where({
//         userid: req.body.userid,
//         cookie_id: req.body.cookie_id
//     }).select("userid")
//         .then((data) => {
//             res.setHeader("Content-Type", "application/json");
//             res.json(data[0].userid);
//         }).catch(() => {
//         res.json({msg: "survey: no-record-of-completion"});
//     });
// });
//
// /**
//  * POST: Update balance after withdrawal
//  */
// app.post("/balance-update", (req, res) => {
//     db("useraccounts")
//         .where({email_add: req.body.user})
//         .decrement({
//             current_balance: req.body.withdrawalAmount
//         }).then(() => {
//         res.setHeader("Content-Type", "application/json");
//         return res.json({msg: "Balance updated"});
//     })
//         .catch((err) => {
//             console.log(err);
//         });
// });
//
// /**
//  * POST: Update 'surveyuserdata' table
//  */
// app.post("/survey-user-data-update", (req, res) => {
//     db("surveyuserdata").insert({
//         userid: req.body.userid,
//         survey_id: req.body.survey_id,
//         survey_date_completed: 'now()',
//         cookie_id: req.body.cookie_id,
//         survey_results: req.body.survey_results
//     })
//     .then(() => {
//             res.setHeader("Content-Type", "application/json");
//             return res.json({msg: "Survey user data updated"});
//         }).catch((err) => {
//         console.log(err);
//     });
// });
//
// /**
//  * POST: Returns all survey results with matching survey_id from 'surveyuserdata' table
//  */
// app.post("/analytics-results-for-visualisation", (req, res) => {
//     const surveyId = req.body.survey_id;
//     db("surveyuserdata").where({survey_id: surveyId}).select("survey_results")
//         .then((data) => {
//             let resultsArray = [];
//             for (let i = 0; i < data.length; i++) {
//                 let results = data[i];
//                 let resultsCleaned = Object.values(results);
//                 resultsArray.push(resultsCleaned);
//             }
//             const resultsFinal = resultsArray.flat();
//             return res.json({Data: resultsFinal});
//         }).catch((err) => {
//         console.log(err);
//     });
// });
//
// /**
//  * POST: Add user submitted survey to DB
//  */
// app.post("/user-submitted-survey", (req, res) => {
//     const pending = 'pending', f = 'false';
//     db("usersubmittedsurveys").insert({
//         creator_id: req.body.creator_id,
//         submission_date: 'now()',
//         survey_json_data: req.body.survey_json_data,
//         submission_status: pending,
//         submission_accepted: f
//     }).then(() => {
//         res.setHeader("Content-Type", "application/json");
//         return res.json({msg: "added"});
//     }).catch((err) => {
//         console.log(err);
//     });
// });
//
// /**
//  * POST: Increment surveys_submitted in 'useraccounts' table
//  */
// app.post("/survey-submission-increment", (req, res) => {
//     db("useraccounts")
//         .where({userid: req.body.user_id})
//         .increment({
//         surveys_submitted: 1
//     }).then(() => {
//         res.setHeader("Content-Type", "application/json");
//         return res.json({msg: "success"});
//     });
// });
//
/**
 * PORT SETTINGS
 * @type {string|number}
 */
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
//
// /**
//  * NODEMAILER SETUP FOR CONFIRMATION EMAIL
//  */
// 'use strict';
// const NodemailerSend = async (emailAddress) => {
//     // create reusable transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//             user: process.env.MAIL_HOST,
//             pass: process.env.MAIL_PASSWORD,
//         },
//     });
//     let mailOptions = async (emailAddress) => {
//         const sender = "James";
//         mailOptions = {
//             from: sender,
//             to: emailAddress,
//             subject: "Registration confirmation",
//             html: `Click here to confirm registration` //TODO: Add link
//         };
//     };
//     await mailOptions(emailAddress)
//     // send mail with defined transport object
//     await transporter.sendMail(mailOptions, function (error, response) {
//         if (error) {
//             console.log(error);
//         } else {
//             response("Message sent");
//         }
//     });
// };
// NodemailerSend().catch(console.error);

