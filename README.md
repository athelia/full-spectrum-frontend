## Getting Started
1. Clone the repo
```bash
git clone git@github.com:athelia/full-spectrum-frontend.git
```

2. Navigate to directory
```bash
cd full-spectrum-frontend
```

3. Check node version and use v18.16.0
```bash
node -v
nvm use 18.16
```

4. Install packages
```bash
npm install
```

5. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser

6. Open Cypress to run e2e or component tests
```bash
npx cypress open
```
alternatively run in the terminal
```bash
npx cypress run --e2e
```
```bash
npx cypress run --component
```