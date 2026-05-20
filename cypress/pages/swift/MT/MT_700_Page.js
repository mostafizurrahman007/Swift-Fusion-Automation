/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { randomNumber } from "../../../utils/commonUtils";
import { commonLocators } from "../../support/locators/commonLocators";
import { randomString } from "../../utils/commonUtils";

class MT_700_Page {
    documentCreditNumber20 = randomNumber();

}

export default new MT_700_Page();