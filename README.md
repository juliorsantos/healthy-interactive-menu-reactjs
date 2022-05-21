# GoodFood - Your health food online
You can order your healthy food :)

I recommend that you use `json-server` to provide you a backend.

First, clone this project.

Run the npm
`npm install`

Run the server (same directory)
~ Do not forget to copy databases `cp ./public/db.example.json ./public/db.json`
Then run...
`json-server --watch ./public/db.json --watch --port 8080`

Then run the dev server
`npm run dev`

## Technologies
- ViteJS
  - ReactJS
    - ContextAPI
    - Reducers
    - States
    - Routes
  - Axios
  - Sass
  - React Router DOM
  - React Toastify
  - Bootstrap 5

### Todos
- [x] Improve the frontend
- [x] Add ContextAPI and Reducers
- [x] Multiple and single pages for product showing
- [x] Search products on main banner (shared state)
- [x] Add API actions for CRUD (JSON SERVER)

Maybe...
- [ ] Currency API for converting the prices
- [ ] Send the order to WhatsApp or Telegram 