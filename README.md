# node-template
This is a simple Node JS template for simple and small backend projects.

## Architecture
* src/
  * `api/` routes
  * `assets/` static content, such email templates
  * `config/` configuration handlers
  * `infrastructure/` auxiliary services used for external communication, logging, etc.
  * `models/` where de models are defined
  * `services/` services with operational logic
  * `subscribers/` where the pub/sub objects are defined
  * `app.js` server configuration
  * `server.js` server runner
* test/
  * `helpers/` helper classes for testing
  * `...` test folder structure

## Functionalities
This template provides:
* An endpoint for sending contact messages: It sends a contact e-mail to the receiver and a confirmation e-mail to the sender.
* A very simple and console-based logging system based on pub/sub pattern.
* A basic route system with a validation example.

## Development
Only clone it and adapt the template to your requirements!

## Quick start
Please, follow the next steps for start working:
* Clone this repository
* Install dependencies
* Copy .env.example into .env
* npm start
