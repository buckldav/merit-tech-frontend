import { Project } from "types/project"
const projectData: Project[] = [
    {
        "id": 1, 
        "title": "puprpg.org", 
        "author": "Kasey Finch", 
        "description": "So good to hear from you. The year of 1988 was difficult but I made it through. I'm sorry I couldn't contact you sooner.  But i can now so i wanted to say my projects name was puprpg.org. I was able to get it running but it was difficult (not rlly). the project is about walking your dog get the leash a treat your dog and don't get caught by laziness. I will contact you later on the result of the project thank you for your time.",
        "url": "https://replit.com/@KaseyFinch/rpg-game?embed=true",
        "embeddable": true
    },
    {
        "id": 2, 
        "title": "Feed Eduardo", 
        "author": "Gustavo Postigo", 
        "description": "The game is about getting all the food around the map and once you get it all, you need to go to the bathroom, to win the game.",
        "url": "https://replit.com/@GustavoPostigo1/Feed-Eduardo?embed=true",
        "embeddable": true
    },
    {
        "id": 3, 
        "title": "Goooooooooooost ", 
        "author": "Bryan Mellor", 
        "description": "a short rpg game involving a young ghost who is bored and wants to live again. You travel through all of the rooms looking for objects and things you need to finish the game. In the end you discover Miss Evil! You have to defeat her to win! Good luck young gooooooost!",
        "url": "https://replit.com/@BryanMellor/gooooooost?embed=true",
        "embeddable": true
    },
    {
        "id": 4, 
        "title": "Driving Frenzy", 
        "author": "Talan Jenkins", 
        "description": "You are 16 years old, and would like to get a driver's license. Make your way through the maze using controls north, south, west, east To win the game, collect your driver's license and make it back to the kitchen. HOORAY!",
        "url": "https://replit.com/@TalanJenkins/RPG-Java?embed=true",
        "embeddable": true
    },
    {
        "id": 5, 
        "title": "Big Drago", 
        "author": "Chase Stinson", 
        "description": "Big Drago is a game where you are a newly hatched baby Drago. You must explore and eat things smaller than you to grow bigger until you become BIG Drago.",
        "url": "",
        "embeddable": true
    },
    {
        "id": 6, 
        "title": "Fancy Gem Game", 
        "author": "Natalie Bingham", 
        "description": "In the Fancy Gem Game you travel through different magical worlds to find hidden gems and make your bracelet fancy.",
        "url": "",
        "embeddable": true
    },
    {
        "id": 7, 
        "title": "halloween game", 
        "author": "Benjamin Hopkins", 
        "description": "This project is an RPG game for halloween. Your goal is to get candy a costume and a pillowcase to hold the candy.",
        "url": "",
        "embeddable": true
    },
    {
        "id": 8,
        "title": "GRAPHING WEBSITE FOR DUMMIES", 
        "author": "Masrur Ahmed", 
        "description": "This is a website where you can put in your data as a table and it can show you different types of graphs with that data.",
        "url": "https://masrur.pythonanywhere.com/",
        "embeddable": false
    }
]   

export const projectDataDetail = (id: number) => {
    return projectData.find(p => p.id === id)
} 

export default projectData