# Bug Reporter App

## Overview
Bug Reporter App is a simple full-stack application for collecting and displaying user feedback. Users can submit feedback via a web interface, which is stored in a PostgreSQL database and managed by a Node.js backend API.

## Architecture
The app uses a three-tier architecture:

- **Frontend**: Static web page (HTML/CSS/JS) for submitting and viewing feedback.
- **Backend**: Node.js Express server providing REST API endpoints for feedback management.
- **Database**: PostgreSQL for persistent storage of feedback entries.

All services run in isolated Docker containers and communicate via Docker Compose networking.

## Technical Best Practices

This project demonstrates several technical best practices to ensure reliability, maintainability, and security:

- **Multi-stage Docker builds for backend**: The backend Dockerfile uses multi-stage builds to keep images small and production-ready, installing only necessary dependencies and copying only required files.
- **Non-root containers**: The backend runs as a non-root user, improving container security and following Docker security guidelines.
- **Minimal static assets in frontend**: The frontend Dockerfile copies only essential files and removes default nginx assets, reducing image size and attack surface.
- **Isolated services**: Each component (frontend, backend, database) runs in its own container, following the principle of separation of concerns and making scaling or debugging easier.
- **Efficient dependency management**: The backend leverages npm's package-lock.json for reproducible builds and uses `npm ci` for clean, reliable installs.
- **Explicit port exposure**: Only necessary ports are exposed in each Dockerfile, minimizing unnecessary network exposure.
- **Clean build context**: Dockerfiles avoid copying unnecessary files (like Dockerfile itself or node_modules), resulting in faster builds and smaller images.
- **Declarative infrastructure**: Docker Compose is used to define and orchestrate all services, making local development and deployment consistent and repeatable.

These practices help ensure the app is robust, secure, and easy to maintain, impressing both users and contributors.

## Tech Stack
- Containerization: Docker, Docker Compose
- Database: PostgreSQL
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, pg (PostgreSQL client)

## Prerequisites
- Docker (https://docs.docker.com/get-docker/)
- Docker Compose (https://docs.docker.com/compose/install/)

## Deployment Steps
1. Clone the repository:
	```sh
	git clone <repo-url>
	cd bug-reporter-app
	```
2. Start all services:
	```sh
	docker-compose up --build
	```
3. Access the app:
	- Frontend: [http://localhost:8080](http://localhost:8080)
	- Backend API: [http://localhost:3000/feedback](http://localhost:3000/feedback)
	- Database: localhost:5432 (use credentials from docker-compose.yml)
4. Stop all services:
	```sh
	docker-compose down -v
	```

## Notes
- Feedback data is stored in the PostgreSQL database and initialized via db/init.sql.
- For development, environment variables are set in docker-compose.yml.
- Make sure ports 8080, 3000, and 5432 are available on your machine.

