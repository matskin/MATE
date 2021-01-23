const model = 'Apple iPhone 11';
const search = 'IPH';

const condition = model.toLowerCase().includes(search.toLowerCase());

if (condition) {
    console.log('Found');
}