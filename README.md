# Kubernetes GitOps Platform

An end-to-end GitOps platform template for Kubernetes, designed to showcase best practices in CI/CD, containerization, orchestration and cloud-native application delivery. This repository demonstrates a full-stack microservices architecture with automated deployment pipelines, Helm-based configuration, and developer-friendly tooling.

## Features

- **Microservices Architecture**: Includes a micro-service application with backend (Node.js), frontend (Node.js/HTML), and database (PostgreSQL) setup.
- **GitOps Workflow**: Declarative infrastructure and application management using Git as the single source of truth.
- **CI/CD Automation**: Python automation script for helm templating that integrated with CI/CD pipeline.
- **Helm & Kubernetes**: Helm charts for environment-specific deployments to Kubernetes Cluster.
- **Dockerized Development**: All components are containerized for easy local development and testing.

## Repository Structure

```
.
├── apps/
│   ├── backend/         # Node.js backend service (Dockerized)
│   ├── frontend/        # Node.js/HTML frontend (Dockerized)
│   └── db/              # Database initialization scripts
├── ci-cd/
│   └── generator/       # GitOps manifest generating and helm templating (Python)
├── helmfiles/
│   └── dev/             # Helm charts and values for dev environment
├── docker-compose.yml   # Local development orchestration
```

## Getting Started

### Prerequisites
- Docker & Docker Compose
- Python 3.x (for generator)
- Node.js (for local app development)
- Kubernetes cluster (for deployment)

### Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/NimeshaDil/kubernetes-gitops-platform.git
   cd kubernetes-gitops-platform
   ```
2. **Start all services locally:**
   ```sh
   docker-compose up --build
   ```
   - Backend: http://localhost:3000
   - Frontend: http://localhost:8080

3. **Database:**
   - PostgreSQL is initialized with `apps/db/init.sql`.

### GitOps Workflow

- Use the generator in `ci-cd/generator/` to create/update Kubernetes manifests.
- Store all manifests and Helm values in `helmfiles/`.
- Deploy to your Kubernetes cluster using Helm:
  ```sh
  helm upgrade --install my-app ./helmfiles/dev
  ```

## Project Highlights

- **Best Practices**: Clean code, modular structure, and clear separation of concerns.
- **Automation**: Python script for Helm manifest generation.
- **Extensibility**: Easily add new services or environments.
- **Showcase Ready**: Ideal for demonstrating DevOps, GitOps, and cloud-native skills on your GitHub profile.

---

> **Author:** [Nimesha Premaraja](https://github.com/NimeshaDil)
> 
