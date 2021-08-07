let articles = [
	{ name: "Bike", cost:  3000},
	{ name: "TV", cost: 2500 },
	{ name: "Book", cost: 320 },
	{ name: "CellPhone", cost: 10000 },
	{ name: "Laptop", cost: 20000 },
	{ name: "KeyBoard", cost: 500},
	{ name: "HeadPhones", cost: 1700},
];
// Filter method
let  leakedArticles = articles.filter(function(article){
	return article.cost <= 500;
});
// Map method
let articleName = articles.map(function(article){
	return article.name;
});
// Find method
let foundArticle = articles.find(function(article){
	return article.name === "Laptop";
});
console.log(leakedArticles);
console.log(articleName);
console.log(foundArticle);
// ForEach method
articles.forEach(function(article) {
	return console.log(article.name);
});
let cheapArticles = articles.some(function(article) {
	return console.log(article.cost <= 700);
});
