# InfraNotes Project

A Dockerized Node.js Notes API demonstrating a DevOps workflow with CI/CD.

## Tech Stack
- Node.js
- Express
- MongoDB (via Mongoose)
- Docker
- Docker Compose

## Features
- RESTful API for managing notes
- MongoDB for data storage
- Docker containerization
- CI/CD with GitHub Actions (build, test, deploy to EC2)

## API Endpoints
- `GET /`: Returns "DevOps Notes API Running"
- `POST /notes`: Creates a new note with `title` and `content` fields

## Run Locally
1. Ensure Docker and Docker Compose are installed.
2. Run the following command:
   ```sh
   docker compose up --build
   ```
3. The app runs on http://localhost:3000

## Project Structure
- `api/`: Contains the Node.js application
  - `server.js`: Main server file with Express setup, MongoDB connection, and routes
  - `note.js`: Mongoose model for notes
  - `package.json`: Project dependencies
  - `Dockerfile`: Docker build configuration
- `docker-compose.yml`: Defines services for API and MongoDB
- `.github/workflows/`: GitHub Actions workflows
  - `ci.yml`: Builds Docker image and runs basic test
  - `deploy.yml`: Deploys to EC2 server via SSH

## Deployment
The project includes automated deployment to an EC2 instance using GitHub Actions. On push to the `main` branch, it pulls the latest code, rebuilds containers, and restarts services. Requires secrets for EC2 host, user, SSH key, and app directory.