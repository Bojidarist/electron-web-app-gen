# Electron Web App Generator

Generate electron application for a website.

## Usage

### Script
```bash
./generate.sh PROJECT_NAME_WITHOUT_SPACES WEBSITE_URL
cd apps/PROJECT_NAME_WITHOUT_SPACES
npm start

# To clear your session
npm start clear
```

### Manual
1. Copy `main.js` and `package.json` to a new folder.
2. Change the "name" property in `package.json`.
3. Change "YOUR_WEBSITE_HERE" to your website's URL in `main.js`:

``` 
mainWindow.loadURL("YOUR_WEBSITE_HERE");
```

4. Install electron.

```
npm install --save-dev electron
```

5. Run the application

```
npm start
```
