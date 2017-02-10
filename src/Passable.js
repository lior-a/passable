import Tests from './Tests';

class Passable {

    constructor(name, description, passables) {

        this.name = name;
        this.hasValidationErrors = false;
        this.validationErrors = {};

        passables(this, this.pass.bind(this));
    }

    pass(dataName, statement, callback) {
        const isValid = callback();

        if (!isValid) {
            this.hasValidationErrors = true;
            this.validationErrors[dataName] = this.validationErrors[dataName] || [];
            this.validationErrors[dataName].push(statement);
        }
    }

    run(value, test, param) {
        if (typeof Tests[test] === "function") {
            return Tests[test](value, param);
        }
    }

    enforce(value, tests) {

        let isValid = true;

        for (const test in tests) {
            debugger;
            const testData = tests[test],
                result = this.run(value, test, testData.param);

            if (testData.expect !== result) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }
}

export default Passable;