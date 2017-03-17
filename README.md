# Lee FS Utility Debugger

This is a simple NPM package that uses Winston to create a custom logging utility for my Node app.  The purpose is to defer logging from the console.log() function.

## Installation

To install, `npm install lee-fs-utility-debugger`

## Setup

To set up the logs, create them in `src/logs/app.log` and `src/logs/error.log`

## Use

### Info Logging

To log to the info log, use

```
logger.info('Logged Text');
```
which will return
```
info: Logged Text
```
in the console.

### Error Logging

To log to the info log, use

```
logger.error('Logged Text');
```
which will return
```
error: Logged Text
```
in the console.

## Unit Testing

To unit test the package, run `mocha`