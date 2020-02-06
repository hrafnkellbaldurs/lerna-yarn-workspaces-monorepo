import { example1, example2, example3, example4, example5 } from './src/index';

const exampleResults: Array<string> = [
    example1('Example 1'), 
    example2('Example 2'), 
    example3({ firstName: 'Example', lastName: '3' }), 
    example4({ firstName: 'Example', lastName: '4' }), 
    example5({ firstName: 'Example', lastName: '5' }),
    example5('{ "firstName": "Example", "lastName": "5" }'),
];

exampleResults.forEach(result => {
    document.body.innerHTML += `
        <div class="result">${result}</div>
    `;
});