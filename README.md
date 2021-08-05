# JavaScript-capstone-project
The JavaScript capstone project is about building our own web application based on an external API.  The webapp have 3 user interfaces:

- A home page showing a list of items that you can "like."
- A popup window with more data about an item that you can use to comment on it or reserve it for a period of time.
- In this project we pratice giving code reviews to our teammates.
- We built an API that provides data about food and then build the web app around it.
  [Custom Api](https://github.com/Metsanpeitto/microverse-capstone-2-api)

- To avoid possible CORS conflicts when retrieving from an API we created a server bridge that deployed on
  heroku helps us to workaround conflicts with the localhost and CORS policies.
  [CORS workaround](https://github.com/Metsanpeitto/cors-everywhere)
  [Deployed version](https://guarded-basin-44458.herokuapp.com/)
  
- We use Jest to test the counters of comments, items, reservations and likes.
- The following Design System was created to serve as guideline: 
  [Figma design system](https://www.figma.com/file/xZwuAa1Fsl2Afi4tkqVWuo/Untitled?node-id=0%3A1)


![Microverse](https://img.shields.io/badge/Microverse-blueviolet)


=======

## Built With 
- JavaScript
- Webpack
- HTML/SCSS
- Node.JS
- Jest
- Figma 
- Php/SQL 
- Postman

=======

### Project requirements

- You should build these interfaces:
  - The *home page*.
  - The *comments popup*.
  - The *reservations popup* (only for the groups of 3 students).
- You should follow the layout of the wireframes provided. You should personalize the rest of the design including colors, typographies, spacings, etc.
- Home page
  - When the page loads, the webapp retrieves data from:
    - The selected API and shows the list of items on screen.
    - The Involvement API to show the item likes.
  - Remember that your page should make only 2 requests:
    - One to the base API.
    - And **one** to the Involvement API.
  - When the user clicks on the Like button of an item, the interaction is recorded in the Involvement API and the screen is updated.
  - When the user clicks on the "Comments" button, the Comments popup appears.
  - When the user clicks on the "Reservations" button, the Reservations popup appears (only for the groups of 3 students).
  - Home page header and navigation similar to the given mockup.
  - Home page footer similar to the given mockup.
- Comments popup
  - When the popup loads, the webapp retrieves data from:
    - The selected API and shows details about the selected item.
    - The Involvement API to show the item comments.
  - When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.
- Reservations popup (only for the groups of 3 students)
  - When the popup loads, the webapp retrieves data from:
    - The selected API and shows details about the selected item.
    - The Involvement API to show the item reservations.
  - When the user clicks on the "Reserve" button, the data is recorded in the Involvement API and the screen is updated.

**Counters**
We have counters in all the interfaces that show:
- The number of items (home).
- The number of comments (comments popup).
- The number of reservations (reservations popup) - only for the groups of 3 students.




## Getting Started

If you want a copy of this file go to the github repository and download it from there

- [JavaScript-capstone-project](https://github.com/Mhdez221993/JavaScript-capstone-project)


### Live

[Live](https://mhdez221993.github.io/JavaScript-capstone-project//)


### Setup

```cmd
git clone  git@github.com:Mhdez221993/JavaScript-capstone-project.git
cd JavaScript-capstone-project
```

### Install

```cmd
npm install
npm run build
```

### Usage

```cmd
npm run start
```

### Verify linters

```cmd
npx eslint .
npx stylelint "**/*.{css,scss}"
```
- Autofix linters errors

```cmd
npx eslint . --fix
npx stylelint "**/*.{css,scss}" --fix
```

## To run jest test
```cmd
npm run test
npm run jest
```



If you are non a technical person you can download the zip file.

- To do that you have to go to the green button that says 'Code' and then press on it.
- Choose the option 'Download Zip' and wait until it download.
- Then you need to decompress it.
- You will need to have Zip compress file software installed in your computer. If you don't have it you can download it from here
  [JavaScript-capstone-project`](https://github.com/Mhdez221993/JavaScript-capstone-project/archive/refs/heads/feature-setup.zip)
- Do double click on the Capstone-1.zip and choose a folder where to place all teh decompressed files.
- Once you are done decompressing, you can open the created folder.
- In it you can double click on the index.html file and choose a browser to open it (For example google Chrome Browser).
- Now you should be able to see the project.
- Remember to use the mouse to navigate through the website. Also you can use the keys 'arrow up' and 'arrow down' of your keyboard
  to scroll up and down.


### Prerequisites

- Node.JS

=======

## Author

👤 **Abraham Rodriguez**

- GitHub: [@metsanpeitto](https://github.com/Metsanpeitto)
- Twitter: [@metsanpeitto](https://twitter.com/home)
- LinkedIn: [Abraham Rodriguez](https://www.linkedin.com/in/abraham-rodriguez-3283a319a/)
- Portfolio: [Waldenberg](https://portfolio.waldenberginc.com)


👤 **Moises Hernandez Coronado**

- GitHub: [@Mhdez221993](https://github.com/Mhdez221993)
- Twitter: [@MoisesH42060050](https://twitter.com/MoisesH42060050)
- LinkedIn: [Moises Hernandez Coronado](https://www.linkedin.com/in/moises-hernandez-9bbb17145/)


👤 **Aganze Mataba Henri**

- GitHub: [@hiromataba](https://github.com/hiromataba)
- Twitter: [@Matabahiro](https://twitter.com/MatabaHiro)
- LinkedIn: [Hiro Mataba](https://www.linkedin.com/in/hiro-mataba-1bb910209/)

=======

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

=======

## Show your support

Give a ⭐️ if you like this project!

=======

## Acknowledgments
- Microverse for giving me this chance
- To my Stand Up Team and coding partners who kept my morale up!
- The amazing code reviewers for making me improve every day :thumbsup:

=======

[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)
[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

