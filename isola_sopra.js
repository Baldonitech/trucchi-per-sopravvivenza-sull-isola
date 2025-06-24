/**
 * Baldonitech - Simple Unique ID Generator
 * Author: Baldonitech
 * License: Custom
 */

const BaldonitechID = {
    /**
     * Generates a unique alphanumeric ID with optional prefix.
     * @param {string} [prefix=''] - Optional string to prefix the ID.
     * @returns {string} - The generated unique ID.
     */
    generate(prefix = '') {
        const randomPart = Math.random().toString(36).substr(2, 9);
        const timestamp = Date.now().toString(36);
        return `${prefix}${timestamp}${randomPart}`;
    }
};

// Example usage:
// const id = BaldonitechID.generate('user_');
// console.log(id); // Output: user_lh4q9hzp8f7t23m

module.exports = BaldonitechID;
