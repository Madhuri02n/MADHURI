Here are some more important Docker commands in the format you've requested:

---

- **`docker build -t imagename .`** – Builds a Docker image from the current directory.
- **`docker run imagename`** – Runs a container from the specified image.
- **`docker ps -a`** – Displays all containers (running and stopped) with container IDs and other details.
- **`docker logs containerid`** – Shows logs for the specified container.
- **`docker rm containerid`** – Deletes the specified container.
- **`docker image ls`** – Lists all Docker images available locally.
- **`docker image rm imageid`** – Removes the specified image.
- **`docker login`** – Logs in to Docker Hub or another Docker registry.
- **`docker pull imagename`** – Pulls the Docker image from Docker Hub or another registry.
- **`docker push imagename`** – Pushes the Docker image to Docker Hub or another registry.
- **`docker exec -it containerid bash`** – Runs an interactive bash shell in a running container.
- **`docker inspect containerid`** – Provides detailed information about the specified container.
- **`docker network ls`** – Lists all Docker networks.
- **`docker network rm networkid`** – Removes the specified Docker network.
- **`docker volume ls`** – Lists all Docker volumes.
- **`docker volume rm volumeid`** – Removes the specified Docker volume.
- **`docker system prune`** – Removes unused data (containers, images, networks, etc.).
- **`docker-compose up`** – Starts services defined in a `docker-compose.yml` file.
- **`docker-compose down`** – Stops and removes all services defined in the `docker-compose.yml` file.
- **`docker-compose build`** – Builds images as per the `docker-compose.yml` file.
- **`docker-compose logs`** – Shows logs for all services in a Docker Compose application.
- **`docker save -o filename.tar imagename`** – Saves the Docker image to a tar file.
- **`docker load -i filename.tar`** – Loads a Docker image from a tar file.
- **`docker stats`** – Displays real-time statistics of containers (CPU, memory usage, etc.).
- **`docker exec containerid <command>`** – Executes a specified command inside a running container.
- **`docker stats containerid`** – Shows the resource usage statistics of a specific container.
- **`docker attach containerid`** – Attaches your terminal to a running container’s process.

---

These commands should cover most essential Docker tasks, including building, managing, and troubleshooting containers and images.