# Razorpay B2B Lending

This repository contains:

- `frontend/`: a React app that can be deployed to Firebase Hosting
- `backend/`: a FastAPI service backed by MongoDB

## Firebase deployment

The current Firebase setup deploys the React frontend from `frontend/build`.

1. Install frontend dependencies:
   `cd frontend && npm install`
2. Build the frontend:
   `npm run build`
3. Set your Firebase project ID in `.firebaserc`, or deploy with:
   `firebase deploy --only hosting --project <your-firebase-project-id>`

Note: Firebase Hosting will deploy the frontend only. The Python backend in `backend/server.py` cannot be hosted directly on Firebase Hosting and should be deployed separately on a Python-capable platform if you need the API live.
