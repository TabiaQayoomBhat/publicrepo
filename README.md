# Project Setup and Instructions

## Step 1: Clone the Repository
1. Open VS Code.
2. In the terminal, run the following command to clone the repository:
   
   git clone <https://github.com/vengatesh-m/qa-test>

3. Enter the repository URL and save the project to a folder of your choice.

## Step 2: Install Dependencies and Run Applications
1. Navigate to the `frontend` folder:
   cd frontend; npm install; node app.js
   ```
2. Navigate to the `backend` folder:
   
    cd backend; npm install; node server.js
  

## Step 3: Access the Application
- Open your browser and go to:
  ```
  http://localhost:8080
  ```
- Check the message displayed on the screen.

## Step 4: End-to-End Test
1. In VS Code, create a folder named `Practice`.
2. Inside this folder, create a file named `HelloWorld.e2e.js` in e2e folder.
3. Write a test case in this file to assert the message displayed on the screen.
4. Check working of the testcases locally by running the command npx cypress open/ npx cypress run.

## Step 5: Install WSL and Docker
1. From the command prompt (cmd), install Windows Subsystem for Linux (WSL).
2. Install Docker.
3. Enable Hyper-V from the "Programs" section in the Control Panel or from the BIOS.

## Step 6: Install Minikube
1. Download the Minikube `.exe` file from the official website.
2. Start Minikube using Git Bash with the following command:
   ```
   minikube start
   ```

## Step 7: Setup Kind and Configure Environment Variables
1. Download the Kind executable file.
2. Go to Control Panel -> System and Security -> Advanced System Settings -> Environment Variables.
3. Under "System Variables", select "Path" and click "Edit".
4. Move the downloaded Kind file to a folder and copy its path.
5. Add this path to the system environment variables.
6. In the same folder, run the following commands to verify and create a cluster:
   ```
   kind --version
   kind create cluster
   kubectl cluster-info
   ```

## Step 8: Docker Setup
1. In VS Code, use the terminal to push the code to Docker:
   ```bash
   docker-compose up --build
   docker run -d -p 8081:8080 practice-server
   ```
2. Open Docker Dashboard, navigate to "Volumes", and select Minikube.
3. Click "Import" and select the local volume.





