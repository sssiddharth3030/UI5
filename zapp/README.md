An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

 --> for arch linux , use below command to install the three packages
 ``` 
    sudo pacman -S nodejs npm
    sudo npm install --global yo
 ```

2. Make sure you have 'sap application wizard' extension in vscode , as it is provides an GUI for 'SAP Fiori Application Generator' .
link : https://marketplace.visualstudio.com/items?itemName=SAPOS.yeoman-ui

3. Download all the extensions from 'SAP Fiori Tools-Extenion Pack' . 
link : https://marketplace.visualstudio.com/items?itemName=SAPSE.sap-ux-fiori-tools-extension-pack

The above two are preconfigured in BAS's VScode version . 
The extension for layout editor is currently not in the vscode extension marketplace . You can download other extensions based on your need .

### BAS & Development Environment Basics :
Remember , files & folders are case sensitive . BAS environment in based off linux , and you can use linux commands like :

#### list command :
ls : list folders & files in given directory .
```
[xxxxx@xxxx UI5]$ ls -l
total 4
-rw-r--r-- 1 atomic atomic 508 May 29 19:17 README.md
drwxr-xr-x 1 atomic atomic 216 May 29 19:19 zapp
```

ls -l: provides information about the files & folders , in the directory .
```
[xxxxx@xxxx UI5]$ ls
README.md  zapp
```

#### progressive working directory :
pwd : displays the full path of the directory .
```
[xxxxx@xxxx UI5]$ pwd
/mnt/Files3/backup_/UI5
```

#### change directory :
cd : provide the next or succesive paths after cd command , to change into that directory
```
[xxxxx@xxxx UI5]$ cd zapp
[xxxxx@xxxx zapp]$ 
```
cd ../ : use this command to travel back one folder .
```
[xxxxx@xxxx zapp]$ cd ../
[xxxxx@xxxx UI5]$ 
```

### Strcuture :

webapp --> controller - Here is where you write the logic
webapp --> view - Here is where you design the pages/app
webapp --> i18n - Here the app name , title & properties etc are stored . 
webapp --> manifest.json
webapp --> Component.js