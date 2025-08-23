# CCNA Practice Quiz Web App

## About

This project is a full-stack CCNA practice quiz web application where a backend API supplies a curated question bank that the frontend fetches and renders interactively.

## Motivation

So far I've coded in a very isolated way and have created and solved very few real-world problems. With this project I want to learn how the pieces fit together, how a frontend can fetch data from an API endpoint I wrote and dynamically use that data. I've decided to opt for a project that has a manageable scope. Starting small prevents overwhelm and makes for a solid weekend project.

## Development plan

### 1. Backend API (FastAPI)

- Create endpoint(s) to get practice questions
- Adding query parameter to only get X nuber of questions
- Adding a list of practice questions
- Thinking about modeling the using Pydantic `Question`
- The data lives hardcoded not inside a database
- Testing with Swagger or Insomnia

### 2. Frontend (HTML, CSS and Vanilla JS)

- Building a frontend with HTML and CSS
- DOM manipulation (show/hide elements, updating text, event listeners)
- Testing the `fetch()` API to fetch the questions from the backend
- Figuring out how to handle the data
- UX flow (next question, result screen, restart)

### 3. Full-stack thinking

- Separation of concerns (backend = data, frontend = presentation)
- Data exchange via JSON 
- The importance of structure → even in a small project, you can talk about architecture

### 4. Deployment

- Deploy API on a DigitalOcean Docker droplet?
- Use GitHub pages for front end hosting

## Learnings

