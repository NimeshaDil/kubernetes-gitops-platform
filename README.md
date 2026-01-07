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
- Store all manifests and Helm values as the single source of truth.
- Docker images and Helm Packages are uploaded to GitHub Container Registry using GitHub Actions.
- Deploy to Kubernetes cluster using Helm.



## Project Highlights

- **Kubernetes Orchestration**: Leverages Kubernetes for deployment, scaling, and management of containerized applications, ensuring high availability and resilience.
- **Helm Templating**: Uses Helm charts for parameterized, reusable, and environment-specific Kubernetes resource definitions.
- **CI/CD Best Practices**: Follows industry standards for automated testing, linting, and deployment, with clear separation of build, test, and deploy stages.
- **Containerization**: All services are containerized using Docker, enabling consistent environments from development to production and simplifying deployment to Kubernetes.
- **Code Security Scanning**: Integrates code security scanning tools and practices to ensure vulnerabilities are detected early in the pipeline.
- **Automation**: Python script for Helm manifest generation and GitOps workflows.
- **Extensibility**: Easily add new micro-services or environments.


---

> **Author:** [Nimesha Premaraja](https://github.com/NimeshaDil)
> 
