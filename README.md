# Hangman Game - React App

## Description

🎮 This is a simple Hangman game built with React. Players have to guess a secret word by suggesting letters one at a time. If too many incorrect guesses are made, the player loses the game. 

🚀 This project is containerized using Docker, making it easy to deploy and run in any environment.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (recommended version 18 or higher)
- [Docker](https://www.docker.com/products/docker-desktop)

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone (https://github.com/kmamaguana/my-hangman-game)
cd hangman-react
```

### 2. Local Setup without Docker (optional)

If you prefer not to use Docker, you can run the project locally using Node.js.

1. Install the dependencies:

```bash
npm install
```

2. Run the application in development mode:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### 3. Run with Docker

If you'd like to run the project inside a Docker container, follow these steps:

1. Build the Docker image:

```bash
docker build -t hangman-react .
```

2. Run the Docker container:

```bash
docker run -p 3000:3000 hangman-react
```

3. Access the app at `http://localhost:3000`.

## Project Structure

- **src/**: Contains all the source code of the application.
- **public/**: Contains static files such as the `index.html` file and images of the hangman.
- **Dockerfile**: Configuration file to build a Docker image of the app.
- **.dockerignore**: List of files and directories to exclude from the Docker container (such as `node_modules`, `.git` files, etc.).
- **package.json**: Node.js configuration file with project dependencies and scripts.

## Dockerfile Explanation

- **FROM node:18-alpine**: Uses an official Node.js image (version 18, based on Alpine for a smaller size).
- **WORKDIR /app**: Sets the working directory inside the container to `/app`.
- **COPY package*.json ./**: Copies the `package.json` and `package-lock.json` files into the container.
- **RUN npm install**: Installs the project dependencies.
- **COPY . .**: Copies the rest of the project files into the container.
- **RUN npm run build**: Builds the React app for production.
- **EXPOSE 3000**: Exposes port 3000 so that the app can be accessed externally.
- **CMD ["npm", "start"]**: Starts the application in development mode when the container is run.

## Contributing

💡 If you want to contribute to the project, feel free to create a **pull request**. Please ensure your code is functional, well-documented, and follows best practices.

### Steps to contribute:

1. Fork the repository.
2. Create a descriptive branch name for your feature/bugfix.
3. Make your changes.
4. Create a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

### 🙏 Thank You for Checking Out the Project!

We hope you enjoy playing the Hangman game. If you have any questions, issues, or suggestions, feel free to open an issue or contribute. 

Happy coding! 👩‍💻👨‍💻
```
