
# RepreApp

### Description

This Repremundo prototype App is a application developed for Repremundo Company, to make a photographic registration tool.

## Requirements 

One of the following versions of [Node.js](https://nodejs.org/en/download) must be installed to run **`npm`**:

* Vrs. `- 17`

Also you can download **nvm** to control version node here [nvm](https://github.com/coreybutler/nvm-windows/releases) find **`nvm-setup.exe`** to download and install.

The main codes

```bash
# To install new version
nvm install <New Version>

# To see all versions installed on your laptop
nvm list 

# To select the version
nvm use <Version to use>
```

In this case we use react native whit **Expo** this is a tool to work more easy whit diferents divices and avoid installing external components.

```bash
# Firt install a global component to use expo
npm install -g expo-cli

# Check the version
expo --version
```
## Clone and use project

Clone the repository in your folder

```bash
git clone https://github.com/MYRDDINJ41/AppRepre
```

Next to clone the repository install components **Node.js**

```bash
npm install
```

To run the project you can use this

```bash
npm start

npx expo start 
```

For Android or IOS you must be download **Expo Go**

[Android](https://play.google.com/store/search?q=expo%20go&c=apps&hl=en&gl=US)
[IOS](https://apps.apple.com/us/app/expo-go/id982107779)

## How to do a APK

To do a APK whit react native install eas build tools

```bash
npm install eas-cli
```

Next create a account and login whit expo
`https://expo.dev/signup`

Open cmd and copy command to login
```bash
expo login
```
Check user you are logged 
```bash
expo whoami
```
Create APK whit the next command
```bash
eas build -p android --profile preview
```