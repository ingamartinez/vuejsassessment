# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Dev Notes:
I updated some dependencies like vite and vitejs/plugin-vue.

I also installed other dependencies like:
- vue-router
- vuex
- json-server
- vuetify

For mocking the data I used json web server. You can find the data in the mock/database.json file.

No need to run the json server separately. It will run automatically when you run the project with `npm run dev`

### Vue Routes
Base route: http://localhost:5174/
```
GET /                  - List for posts
GET /post/:id          - Specific post
GET /post/:id/edit     - Edit post
```
### JSON Server Routes
Base route: http://localhost:3000/
```
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
PATCH  /posts/:id
DELETE /posts/:id
```