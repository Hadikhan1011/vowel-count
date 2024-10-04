function countVowels(sentence) {
    
    sentence = sentence.toLowerCase();

    let vowelCount = 0;

    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}


const input = prompt("Enter a sentence:", "Hello Alex");
const output = countVowels(input);
alert(`The number of vowels in the sentence is: ${output}`);
