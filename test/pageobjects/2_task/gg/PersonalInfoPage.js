// const loopTime = 9

// for (let i = 0; i < loopTime; i++) {
//     console.log(`Iteration is #${i}`)
// }

import BasePage from "../BasePage.js"

const FIRST_NAME_FIELD = '//*[@id="first-name"]';
const LAST_NAME_FIELD = '//*[@id="last-name"]';
const PREPOSITION_FIELD = '';
const EMAIL_FIELD = '//*[@id="email"]';
const PHONE_FIELD = '//*[@id="phone"]';
const CANCELLATION_CHECKBOX = '//*[@for="cancellation-policy"]';
const NEXT_BUTTON = '//*[@type="submit"]';



export default class PersonalInfoPage extends BasePage {



};