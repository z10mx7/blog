
 # Front + Back

This is a simple blog consisting of three main parts created with [Next.js](https://nextjs.org/) +
[Tailwindcss](https://tailwindcss.com) using Typescript : 
 - A list of all posts with search functionality
 - Ability to add a new post
 - Post details page 


## Getting Started

First, clone the project:

```bash
git clone https://github.com/z10mx7/blog.git && cd blog

```


Then, install the packages:

Notice: if you aren't in "blog" directory, go in there first using:  `cd blog`

```bash
npm i
# or
yarn
# or
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev

```

Finally, Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.



## URL's
Notice : you can visit this urls, even without running any backend server(node or python).

 - you can see all posts in [http://localhost:3002](http://localhost:3002)

- you can see each post by clicking on it . [http://localhost:3002/post/ID](http://localhost:3002/post/ID)

- you can create a new post by goin to [http://localhost:3002/new](http://localhost:3002/new/)

- you can also search the post from home page [http://localhost:3002](http://localhost:3002) by writing you words in search box and press the ENTER.

## Deploy in Server
you can deploy this in diffrent ways, but lets talk about easiest way, PM2! . 

 - First, put the files to you server using scp or ftp or just use git clone . 

 - After that, install the pm2:

 ```bash
npm i -g pm2
```
 - Then , run the app using pm2 . 
  ```bash
pm2 start ecosystem.config.js
```
Notice : by default running port is set to 3002 , feel free to change it on any port you want . do that by modifying "ecosystem.config.js" 

Finally , you can Open [http://YOUR_SERVER_IP:3002](http://YOUR_SERVER_IP:3002) with your browser to see the result.


## Directory Structure
  ```bash
 .
├── api
│   ├── main.py
├── components
│   ├── Blog
│   ├── Home
│   ├── Shared
│   └── ...
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── new.tsx
│   └── post
│      └── [id].tsx
├── public
│   ├── assets
│   │   └── icons
│   │   └── images
│   └── ...
├── styles
│   ├── globals.css
├── utils
│   ├── helper.ts
│   ├── types.ts
├── .env.local
├── next.config.js
├── package.json
├── ecosystem.config.js
├── tailwind.config.js
└── ...

```


- api : This directory contains a python webserver using "fastapi" and faker to generate fake data . its the python version of [me-majidi/blog-server](https://github.com/me-majidi/blog-server)  . if you got some errors using my api, just use the node version that he write.

 - components: This directory contains reusable React components specific to your application. Components related to the blog, home page, shared components, and others can be organized into separate subdirectories.

- pages: This directory contains all the pages of your Next.js application. The _app.tsx file is used to initialize the application, and _document.tsx is used to customize the HTML document. The index.tsx represents the home page, new.tsx represents the creation page, and the post directory contains the dynamic [id].tsx file for displaying individual blog posts based on their ID.

- public: This directory is used to store publicly accessible static assets, such as icons and images. It can be further organized into subdirectories like assets to keep assets organized.

- styles: This directory holds the global CSS file (globals.css) that applies styles globally to your application. Additional stylesheets or directories for component-specific styles can be added as needed.

- utils: This directory contains utility files such as helper.ts for helper functions and types.ts for TypeScript type definitions.

- .env.local: This file is used to store environment-specific configuration variables for local development.

- next.config.js: This file is used to configure Next.js and customize its behavior.

- package.json: This file lists the dependencies and scripts for your project.

- ecosystem.config.js: This file is related to process management and can be used by tools like PM2 for deployment and server configuration.

- tailwind.config.js: This file is used to customize the Tailwind CSS framework configuration.




 
 

## Extra  - Backend Using Python/FastAPI



First, you must have python 3.8+ and venv and pip installed already.

Second, go inside api directory , then create and enable a venv : 
```
cd api && python3 -m venv venv

source venv/bin/activate
```

Third , install the packages : 
```
pip install -r req.txt

```

Then, run the server : 
```bash
uvicorn main:app --port 3000
# or
uvicorn main:app
# or 
uvicorn main:app --port 3000 --host 0.0.0.0
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the swagger documentations. 

you can also use the same postman json collection . 



## TODO
 - middleware and Auth for creating new posts . 
 - loading during creating the post
 - add layouts