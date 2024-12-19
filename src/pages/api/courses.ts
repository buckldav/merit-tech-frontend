import { NextApiRequest, NextApiResponse } from "next";

export default function route(req: NextApiRequest, res: NextApiResponse) {
  res.send([
    {
      slug: "ap-computer-science-principles",
      name: "AP Computer Science Principles",
      category: "Explorer General",
      length: "1.0",
      countsFor: "Digital Studies, CTE, or Science",
      description: [
        "This class is recommended for 9th and 10th graders! No, really!",
        "Like Computer Science Principles but a full year and you get college credit!",
        "In addition to CSP topics, learn about computer hardware and networks using Raspberry Pis.",
        "Projects include making a Discord bot or chat bot and making a text adventure game.",
      ],
      tags: [
        {
          content: "CSS",
          color: "#2965F1",
          fa_icon_name: "faCss3Alt",
        },
        {
          content: "HTML",
          color: "#F06529",
          fa_icon_name: "faHtml5",
        },
        {
          content: "JavaScript",
          color: "#F0DB4F",
          fa_icon_name: "faJsSquare",
        },
        {
          content: "Raspberry Pi",
          color: "#C51A4A",
          fa_icon_name: "faRaspberryPi",
        },
      ],
      units: [
        "Big Idea 1: Creative Development (collaboration, program design and development, and debugging).",
        "Big Idea 2: Data (binary numbers, compression, and using programs with data).",
        "Big Idea 3: Algorithms and Programming",
        "Big Idea 4: Computer Systems and Networks",
        "Big Idea 5: Impact of Computing (beneficial and harmful effects, ethics, and safety).",
      ],
      prereqs: "",
    },
    {
      slug: "web-development-1",
      name: "Web Development 1",
      category: "Explorer Specific",
      length: "0.5",
      countsFor: "Digital Studies or CTE",
      description: [
        "Learn web development with HTML and CSS.",
        "Learn the basics of programming with JavaScript.",
        "Learn usability, accessibility, and design principles.",
      ],
      tags: [
        {
          content: "CSS",
          color: "#2965F1",
          fa_icon_name: "faCss3Alt",
        },
        {
          content: "HTML",
          color: "#F06529",
          fa_icon_name: "faHtml5",
        },
        {
          content: "JavaScript",
          color: "#F0DB4F",
          fa_icon_name: "faJsSquare",
        },
        {
          content: "npm",
          color: "#D50000",
          fa_icon_name: "faNpm",
        },
      ],
      units: [
        "Unit 1: HTML & CSS Basics",
        "Unit 2: Nesting & CSS Layouts",
        "Unit 3: Accessibility and UI/UX",
        "Unit 4: Scripting with JavaScript",
      ],
      prereqs: "",
    },
    {
      slug: "computer-programming-1",
      name: "Computer Programming 1",
      category: "Explorer Specific",
      length: "0.5 or 1.0",
      countsFor: "Digital Studies or CTE",
      description: [
        "1st Semester:",
        "Learn the basics of programming with C and Python.",
        "2nd Semester:",
        "Apply programming concepts to game and software development.",
      ],
      tags: [
        {
          content: "C#",
          color: "#854CC7",
          fa_icon_name: "faWindows",
        },
        {
          content: "JavaScript",
          color: "#F0DB4F",
          fa_icon_name: "faJsSquare",
        },
        {
          content: "Python",
          color: "#4B8BBE",
          fa_icon_name: "faPython",
        },
      ],
      units: [
        "Units 1-2: Programming Environment and Methodology",
        "Units 3-4: Commands, Operations, and Control Structures",
        "Units 5-6: Ethics, Computing in Society, and Careers",
        "Units 7-9: Lists, Strings, Objects, and File Manipulation",
        "Unit 10: Software Development Teams and Agile Development",
      ],
      prereqs: "",
    },
    {
      slug: "ap-computer-science-a",
      name: "AP Computer Science A",
      category: "Completer",
      length: "1.0",
      countsFor: "CTE or Science",
      description: [
        "Become a skilled object-oriented developer in the Java language.",
        "This is a legitimate freshman college level course that you can use to kickstart your post-secondary education.",
        "Solve competitive coding problems and participate in high school coding competitions.",
        "Use Java to create console apps, Android apps, or Minecraft mods.",
      ],
      tags: [
        {
          content: "Android",
          color: "#32DE84",
          fa_icon_name: "faAndroid",
        },
        {
          content: "Java",
          color: "#F89820",
          fa_icon_name: "faJava",
        },
      ],
      units: [
        "Units 1-2: Primitive Types and Using Objects",
        "Units 3-4: Boolean Expressions, If Statements, and Iteration",
        "Unit 5: Writing Classes",
        "Units 6-8: Arrays, ArrayLists, and 2d Arrays",
        "Units 9-10: Inheritance and Recursion",
      ],
      prereqs:
        "This course requires at least one full year of CS courses prior to taking it.",
    },
    {
      slug: "computer-science-principles",
      name: "Computer Science Principles",
      category: "Explorer General",
      length: "0.5",
      countsFor: "Digital Studies or CTE",
      description: [
        "Learn essential real-world computing skills to improve your general technology use.",
        "Learn the basics of web development with HTML and CSS.",
        "Learn the basics of programming with JavaScript.",
      ],
      tags: [
        {
          content: "CSS",
          color: "#2965F1",
          fa_icon_name: "faCss3Alt",
        },
        {
          content: "HTML",
          color: "#F06529",
          fa_icon_name: "faHtml5",
        },
        {
          content: "JavaScript",
          color: "#F0DB4F",
          fa_icon_name: "faJsSquare",
        },
      ],
      units: [
        "Unit 1: Intro to Computer Science and Computational Thinking",
        "Unit 2: Problem Solving with Computers",
        "Unit 3: Web Development",
        "Unit 4: Programming and Algorithms",
      ],
      prereqs: "",
    },
    {
      slug: "web-development-capstone",
      name: "Web Development Capstone",
      category: "Completer",
      length: "0.5 or 1.0",
      countsFor: "CTE",
      description: [
        "Make software used by the school! We are currently building a library checkout system and other tools to improve learning. Alternatively, make any software/web project you'd like independently.",
        "Learn a bit about each of the following and then focus on a certain one:",
        "FRONTEND: Make beautiful, data-driven apps using HTML, CSS, Sass, JavaScript, and React.js.",
        "BACKEND: Use the Python language and the Django framework to make robust web applications and REST APIs.",
        "CLOUD: Learn AWS and CI/CD principles to manage cloud resources and permissions.",
      ],
      tags: [
        {
          content: "AWS",
          color: "#FF9900",
          fa_icon_name: "faAws",
        },
        {
          content: "CSS",
          color: "#2965F1",
          fa_icon_name: "faCss3Alt",
        },
        {
          content: "HTML",
          color: "#F06529",
          fa_icon_name: "faHtml5",
        },
        {
          content: "JavaScript",
          color: "#F0DB4F",
          fa_icon_name: "faJsSquare",
        },
        {
          content: "npm",
          color: "#D50000",
          fa_icon_name: "faNpm",
        },
        {
          content: "Python",
          color: "#4B8BBE",
          fa_icon_name: "faPython",
        },
        {
          content: "git",
          color: "#F34F29",
          fa_icon_name: "faGitAlt",
        },
        {
          content: "Sass",
          color: "#CD699A",
          fa_icon_name: "faSass",
        },
      ],
      units: [
        "Unit 1: CRUD Apps",
        "Unit 2: Data Modelling and APIs",
        "Unit 3: Authentication",
        "Unit 4: Single Page Applications",
        "Unit 5: Agile Software Development",
      ],
      prereqs:
        "This course requires at least one semester of CS courses (except Game Development) prior to taking it.",
    },
    {
      slug: "game-development-2",
      name: "Game Development 2",
      category: "Explorer Specific",
      length: "0.5",
      countsFor: "CTE",
      description: [
        "Dive deeper into the game development process.",
        "Prepare for the Unity Certified Developer exam.",
        "Make your own sprites, assets, audio, and animations.",
        "Learn more details of the C# language and scripting.",
      ],
      tags: [
        {
          content: "C#",
          color: "#854CC7",
          fa_icon_name: "faWindows",
        },
        {
          content: "Unity",
          color: "#495057",
          fa_icon_name: "faUnity",
        },
      ],
      units: [
        "Unit 1: Finite State Machines (7% of course)",
        "Unit 2: Communication Feature and Game Interface Design (15% of course)",
        "Units 3-4: Game Genres, Types, and Platforms (20% of course)",
        "Unit 5: Game Design Production Cycle (54% of course)",
        "Unit 6: Understanding Careers (4% of course)",
      ],
      prereqs:
        "This course requires Game Development 1 or Computer Programming 1 prior to taking it.",
    },
    {
      slug: "game-development-1",
      name: "Game Development 1",
      category: "Explorer Specific",
      length: "0.5",
      countsFor: "CTE",
      description: [
        "Learn to make a game from start to finish!",
        "Make a platformer, top-down game, and a game of your choice.",
        "Make your own sprites and assets.",
        "Learn the Unity game engine and little bit of the C# language.",
      ],
      tags: [
        {
          content: "C#",
          color: "#854CC7",
          fa_icon_name: "faWindows",
        },
        {
          content: "Unity",
          color: "#495057",
          fa_icon_name: "faUnity",
        },
      ],
      units: [
        "Unit 1: Video Game History (7% of course)",
        "Unit 2: Communication Feature and Game Interface Design (15% of course)",
        "Units 3-4: Game Genres, Types, and Platforms (20% of course)",
        "Unit 5: Game Design Production Cycle (54% of course)",
        "Unit 6: Understanding Careers (4% of course)",
      ],
      prereqs: "",
    },
  ]);
}
