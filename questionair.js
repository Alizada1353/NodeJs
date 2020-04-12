const questions = [
    'What is your name?',
    'What would rather be doing?',
    'What is your perferred programming language?'
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n${questions[i]}`) //stdout ---stands for standared output
    process.stdout.write(' > ')
};

ask();

const answers = [];

process.stdin.on('data', data => {               //stdin ---stands for standared input
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    
Thank you for your answers.

Go ${activity} ${name}, coding with ${lang} can be done latter as well :).

`)
});