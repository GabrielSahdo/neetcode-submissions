class Solution {
    numberToString(n) {
        if (n < 10) {
            return "00" + n;
        }

        if (n < 100) {
            return "0" + n;
        }

        return "" + n;
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const output = [];

        for (const str of strs) {
            output.push(this.numberToString(str.length));

            if (str !== "") output.push(str);
        }

        // console.log({ output })
        return output.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let wordLength = null;
        let wordSizeIterator = ""
        let currentWord = "";
        const output = [];

        // console.log({str})


        for (const char of str) {
            
            // empty state
            if (wordLength === null) {

                if (wordSizeIterator.length !== 3) {
                    wordSizeIterator += char;
                    // console.log({ wordSizeIterator })
                }

                if (wordSizeIterator.length !== 3) continue;

                // get the length
                wordLength = Number(wordSizeIterator);
                // console.log("2", { wordLength })

                // empty string
                if (wordLength === 0) {
                    output.push("");
                    wordLength = null;
                    wordSizeIterator = "";
                    currentWord = "";
                }

                continue;
            }

            // is counting (normal word)

            currentWord += char;
            wordLength--;

            // console.log({ currentWord, wordLength })

            if (wordLength === 0) {
                output.push(currentWord);
                currentWord = "";
                wordLength = null;
                wordSizeIterator = "";
            }
        }

        return output;
    }
}
