class Tests {
    static isString(value) {
        return Helpers.isString(value);
    }

    static isNumber(value) {
        return Helpers.isNumber(value);
    }

    static isArray(value) {
        return Helpers.isArray(value);
    }

    static isLongerThan(value, n) {
        if (!Helpers.hasLength(value)) {
            return false;
        }

        return value.length > n;
    }

    static isShorterThan(value, n) {

        if (!Helpers.hasLength(value)) {
            return false;
        }

        return value.length < n;
    }

    static ofExactLength(value, n) {
        if (!Helpers.hasLength(value)) {
            return false;
        }

        return value.length === n;
    }

    static matchesRegex(value, regex) {
        if (!Helpers.isString(value)) {
            return false;
        }

        return !!value.match(regex).length;
    }

    static equals(value, v2) {
        return Object.is(value, v2);
    }
}

class Helpers {
    static hasLength(item) {
        return item.hasOwnProperty('length');
    }

    static isString(item) {
        return typeof item === "string";
    }

    static isNumber(item) {
        return typeof item === "number";
    }

    static isArray(item) {
        return typeof item instanceof Array;
    }
}

export default Tests;