import reactIcon from "../../assets/react.svg"
import javaIcon from "../../assets/java-script.svg"
import python from "../../assets/python-svgrepo-com.svg"
import flask from "../../assets/flask-svgrepo-com.svg"
import SqlAlchemy from "../../assets/SQLAlchemy.svg"
import node from "../../assets/node-svgrepo-com.svg"
import prisma from "../../assets/prisma-svgrepo-com.svg"

const projects = {
    WeatherApp:
    {name: "Weather App", 
    description: "A weather application connecting users to realtime weather data across the globe.", 
    github: "https://github.com/nickgastis/Weather-Project-Phase-2", 
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQGK1IYsWsEIqGxdammw22AmFq0oDADJzZA&usqp=CAU",
    icons: [reactIcon, javaIcon],
    order: 3},
    "Store":
    {name: "Store", 
    description: "temporary description", 
    github: "https://github.com/erkutcak/project4-group1", 
    picture: "stuff",
    icons: [reactIcon, javaIcon, python, flask],
    order: 3.5
},
    Cove:
    {name: "Cove", 
    description: "temporary description", 
    github: "https://github.com/Reed-Broadhead/messege-app-api", 
    picture: "stuff",
    icons: [reactIcon, javaIcon, node, prisma],
    order: 4
},
    FinanceTracker:
    {name: "Finance Tracker", 
    description: "stuff", 
    github: "https://github.com/DirtyKeyboard/phase-3-project", 
    picture: "stuff",
    icons: [python, SqlAlchemy],
    order: 4.5
},
}

export default projects