# Spare Food Share
![Node Version](https://img.shields.io/badge/Node.js-18.14.1LTS_|_19.6.1-informational?style=flat&logo=node.js&logoColor=white&color=11BB11)
![React Version](https://img.shields.io/github/package-json/dependency-version/joshua-crews/SpareFoodShare/react?logo=react)
![Python Version](https://img.shields.io/badge/Python_Version-3.11-informational?style=flat&logo=python&logoColor=white&color=11BB11)
[![LintJS](https://github.com/joshua-crews/SpareFoodShare/actions/workflows/lintJS.yml/badge.svg)](https://github.com/joshua-crews/SpareFoodShare/actions/workflows/lintJS.yml)
[![LintPy](https://github.com/joshua-crews/SpareFoodShare/actions/workflows/lintPy.yml/badge.svg)](https://github.com/joshua-crews/SpareFoodShare/actions/workflows/lintPy.yml)

# About
This is a fork of the code for SpareFoodShare :carrot:. I am maintaining a separate version with changes that did not make it into the final version but that I want to experiment with. In order to run the project, you will need the necessary node packages as well as a configured python environment from [requirements.txt](requirements.txt).

# Installation
For installing all the required libraries for this project, you will need to download and install:
- The current LTS version of [Node.js](https://nodejs.org/)
- A supported version of [Python](https://www.python.org/downloads/) (3.11+)
- [Postgresql](https://www.postgresql.org/)

Next, you can simply clone this repository to your local machine. From there, `npm install` will install all necessary node modules for the project.
It is also important to `pip install -r requirements_dev.txt` to install all python libraries including django.
Alternatively, you can choose to install each module by hand and all versioning can be found in [requirements_dev.txt](requirements_dev.txt) and [package.json](package.json).

# Running
## Local Machine Instructions
In order to run the project on your local machine, you will need to compile and run the project. If you are running it on a local machine and not a server or docker container, you will need to switch to debug mode in settings or else static files cannot be served.
### Front End
##### Execution
To run a live copy of the front end, it can be started with `npm run start`.
NOTE: This will only run the front end code and much of the functionality will be missing.
This is more of for development purposes.
### Back End
##### Database Setup
To run the complete web application, start your postgres database.
This will likely be done with [pgAdmin](https://www.pgadmin.org/docs/pgadmin4/6.18/getting_started.html).
Once you have a database, if necessary you can use django to migrate by running `python manage.py makemigrations` and then `python manage.py migrate`.
##### Environment Variables
From there, to run the webservice you will need a file named `.env`.
In the environment file, you will need to specify your database configuration as well as the django secret key to start the app.
The email app token will be needed for email sending as well as there needs to be specified allowed hosts for django to boot.
Once that is done, simply run `python manage.py runserver` and the web app will be hosted at a given port by django! :tada:
