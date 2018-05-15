const express = require('express');
const app = express();
const port = 8080;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

var quotes = [{
	'quote' : "The Hardest Choices require the strongest will",
	'author' : "Thanos"
},{
	'quote' : "The strength of this country isn’t in buildings of brick and steel. It’s in the hearts of those who have sworn to fight for its freedom!",
	'author' : "Captain America"
},{
	'quote' : "If you cage the beast, the beast will get angry.",
	'author' : "Wolverine"
},{
	'quote' : "No man can win every battle, but no man should fall without a struggle.",
	'author' : "Peter Parker"
},{
	'quote' : "Peter Parker",
	'author' : "Stephen Strange"
},{
	'quote' : "The world is changing. Soon there will only be the conquered and the conquerors. You are a good man, with a good heart. And it’s hard for a good man to be a king.",
	'author' : "King T’Chaka"
},{
	'quote' : "Whatever happens tomorrow you must promise me one thing. That you will stay who you are. Not a perfect soldier, but a good man.",
	'author' : "Captain America"
},{
	'quote' : "Heroes are made by the path they choose, not the powers they are graced with.",
	'author' : "Iron Man"
},{
	'quote' : "It's not who I am underneath, but what I do that defines me",
	'author' : "Batman"
},{
	'quote' : "Cats come when they feel like, not when they are told",
	'author' : "CatWoman"
},{
	'quote' : "Some men aren't looking for something logical, some men just want to watch the world burn.",
	'author' : "Alfred Pennyworth"
},{
	'quote' : "I Exist only to protect Krypton. Every action no matter how violent or cruel, is for the greater good of my people.",
	'author' : "General Zod"
},{
	'quote' : "There are no heroes or villains. There's just what I want and how I'll get it.",
	'author' : "Magneto"
},{
	'quote' : "Freedom is Life's great lie. Once you accept that in your heart, you will know peace.",
	'author' : "Loki"
},{
	'quote' : "I am lika a dog chasing cars. I would not know what to do if I caught one. I just do things.",
	'author' : "Joker"
},{
	'quote' : "I could do this all day",
	'author' : "Captain America"
},{
	'quote' : "That's my Secret Captian, I'm Always angry",
	'author' : "Hulk"
},{
	'quote' : "When I'm done, half of humanity will still exist. Perfectly balanced, as all things should be... I hope they remember you.",
	'author' : "Thanos"
},{
	'quote' : "All this, just for a drop of blood.",
	'author' : "Thanos"
},{
	'quote' : "Today I lost more than you could know, but now is no time to mourn. Now, is no time at all",
	'author' : "Thanos"
},{
	'quote' : "I finally rest, and watch the sunrise on a grateful universe.",
	'author' : "Thanos"
}
]


MongoClient.connect(url, (err, db) =>{
	if(err){
		throw err;
	} else {
		var dbase = db.db("quotes");
		dbase.createCollection("superhero", (err, res) => {
			if(err){
				throw err;
			} else {
				console.log('Collection Created')
				db.close();
			}
		})
		
		
	}
})


app.get('/', (request, response) => {
	let len = quotes.length;
	let index = parseInt(Math.random() * len);
	response.json(quotes[index]);
})

app.listen(port, (err) => {
	if(err){
		return console.log('Something went bad', err);
	} else {
		console.log(`Server listening at ${port}`);
	}
})