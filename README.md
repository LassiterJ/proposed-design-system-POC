## Intro
This project is a proof of concept to demonstrate a flexible design system with a rich developer experience. There is a strong focus in component architecture and standardization. 

### Use storybook to see the demos
```
yarn
yarn storybook
```
 Development of this project is on hold.


## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
vite-template-react
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```
## Hygen code generation template for React
Use `npx hygen component new` in your cli to start component generation. You will be prompted for component name and component location. After responding to prompts, your component and it's related directories/files will be generated with the name and location specified.
For more info on hygen see https://www.hygen.io/

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/SafdarJamal/vite-template-react.git
cd vite-template-react
```

Make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm start
```

And then open http://localhost:3000 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |

## Credits

Vite Template React is built and maintained by [Safdar Jamal](https://safdarjamal.github.io).

## License

This project is licensed under the terms of the [MIT license](https://github.com/SafdarJamal/vite-template-react/blob/main/LICENSE).
