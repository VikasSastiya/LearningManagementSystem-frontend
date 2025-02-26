# LMS Frontend

### Setup instruction

1. Clone the poject
   ''''
   git clone url
   '''
2. Move into the directory

'''
cd lms-frontend-hh
''' 3. install dependencies
'''
npm i
'''

4. run the server

'''
npm run dev
'''

### Setup instructios for tailwind

https://v3.tailwindcss.com/docs/installation

1. install tailwind css
   ''''
   npm install tailwindcss @tailwindcss/cli

2. Create tailwind config file

```
   npx tailwindcss init
   ''''


3. Add file extensions to tailwind config file in the contents property
```

content: ["./src/**/*.{html,js}"],
theme: {
extend: {},
},
plugins: [],

``````

  4. Add the tailwind directivesat the top of `App.css` file

  ````
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
  `````
``````
   5. 
   npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
   ```


###  Configure auto import sort eslint 

1. Install simple import sort
```` 
    npm i -D eslint-plugin-simple-import-sort
````

2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports':'error'
```

3. add simple-import sort plugin in `.eslint.cjs`

```
   plugins:[..., 'simple-import-sort']
```

4. To enable auto import sort on file savev in vscode

   - Open `settings.json`
   - add the following config
```
     "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```