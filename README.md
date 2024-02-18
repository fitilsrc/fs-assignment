## Getting Started

### Configure API
Create a .env file in the root of api project

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
Create a .env file in the root of api project

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
