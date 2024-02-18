## Getting Started

### Configure API

install pnpm package manager

```bash

npm install -g pnpm

```

### Configure API
Create a .env file in the root of API project

```bash

cd apps/api
touch .env

```
and insert your key/value pairs in the following format of KEY=VALUE:

```sh

API_PORT=9000
JWT_SECRET=secret

```


### Configure UI
Create a .env file in the root of UI project

```bash

cd apps/ui
touch .env

```
and insert your key/value pairs in the following format of KEY=VALUE:

```sh

API_ENDPOINT=http://localhost:9000

```

### Run development server

Go to the root of the project

```bash

pnpm install
pnpm dev

```

You can find the application at the link http://localhost:3000
login and password:
admin admin
or
user user
