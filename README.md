
# Bug Reporter App

## Overview
Bug Reporter App is a simple full-stack application for collecting and displaying user feedback. Users can submit feedback via a web interface, which is stored in a PostgreSQL database and managed by a Node.js backend API.

## Architecture
The app uses a three-tier architecture:

- **Frontend**: Static web page (HTML/CSS/JS) for submitting and viewing feedback.
- **Backend**: Node.js Express server providing REST API endpoints for feedback management.
- **Database**: PostgreSQL for persistent storage of feedback entries.

All services run in isolated Docker containers and communicate via Docker Compose networking.

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, pg (PostgreSQL client)
- Database: PostgreSQL
- Containerization: Docker, Docker Compose

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