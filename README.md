# CrewMate

CrewMate is a content creation assistant that helps you generate viral hooks, scripts, captions, and content ideas using AI. It identifies trending topics and sounds to boost your social media growth.

## Project Structure

- **Backend (`app/`)**: Built with FastAPI and Python. Handles AI generation (Gemini), trend analysis, and database interactions.
- **Frontend (`crewlab-ui/`)**: Built with React, Vite, and Tailwind CSS. Provides a modern user interface for interacting with the tools.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Shadcn UI, Lucide React
- **Backend**: FastAPI, Python 3.x, Supabase (PostgreSQL), Google Gemini AI
- **Database**: Supabase
- **AI**: Google Gemini Flash 2.5

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Python](https://www.python.org/) (v3.9 or higher)
- [Git](https://git-scm.com/)

## Initialization Steps

### 1. Backend Setup

1.  Open your terminal and navigate to the project root directory (`CrewMate/`).
2.  **Create a virtual environment**:
    ```bash
    python -m venv venv
    ```
3.  **Activate the virtual environment**:
    - **Mac/Linux**:
      ```bash
      source venv/bin/activate
      ```
    - **Windows**:
      ```bash
      venv\Scripts\activate
      ```
4.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
5.  **Configure Environment Variables**:
    - Rename `.env.example` in `app/` to `.env` (or create a new `.env` file in `app/`).
    - Add your API keys:
      ```env
      SECRET_KEY=your_secure_random_key
      SUPABASE_URL=your_supabase_url
      SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
      SUPABASE_JWT_SECRET=your_supabase_jwt_secret
      GOOGLE_API_KEY=your_gemini_api_key
      ```
6.  **Run the Backend**:
    From the project root:
    ```bash
    uvicorn app.main:app --reload
    ```
    The API will be available at `http://localhost:8000`.

### 2. Frontend Setup

1.  Open a new terminal window.
2.  Navigate to the frontend directory:
    ```bash
    cd crewlab-ui
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the port shown in the terminal).

## Git Push Steps

If you want to push this project to a new GitHub repository:

1.  **Initialize Git** (if not done):
    ```bash
    git init
    ```
2.  **Add files**:
    ```bash
    git add .
    ```
3.  **Commit changes**:
    ```bash
    git commit -m "Initial commit - Complete project setup"
    ```
4.  **Create a Repository on GitHub**:
    - Go to GitHub and create a new repository.
    - Do *not* initialize with README, .gitignore, or License (since we have them).
5.  **Link Remote & Push**:
    - Copy the repository URL (e.g., `https://github.com/username/repo-name.git`).
    - Run:
      ```bash
      git branch -M main
      git remote add origin <your-repo-url>
      git push -u origin main
      ```

## Features

- **Hook Generator**: Create viral hooks for Short/Reels/TikToks.
- **Script Writer**: Generate full video scripts with hook, value, and CTA.
- **Caption Generator**: Write engaging captions with hashtags.
- **Trend Analyzer**: (Backend) Tracks trending topics and sounds.
