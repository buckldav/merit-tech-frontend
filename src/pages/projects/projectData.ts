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
    }
]

export const projectDataDetail = (id: number) => {
    return projectData.find(p => p.id === id)
} 

export default projectData