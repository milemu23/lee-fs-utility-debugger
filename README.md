# Lee FS Utility Debugger

- [Installation](#installation)
- [Setup](#setup)
- [Use](#use)
- [Info Logging](#info-logging)
- [Error Logging](#error-logging)
- [Unit Testing](#unit-testing)
- [Code Deploy](#code-deploy)
- [Version Increaser](#version-increaser)

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

## Version Increaser Testing

This application uses a version increaser.

```
.updateVersion(current, release)
```

This method receives a semantically incremented version number.

```
.updateVersion('1.2.3', 'major')
```

This will return ```2.0.0```. It resets minor and patch to 0 and increments the major version

```
.updateVersion('1.2.3', 'minor')
```

This will return ```1.3.0```. It resets patch to 0 and increments the minor version.

```
.updateVersion('1.2.3', 'patch')
```

This will return ```1.2.4```. It increments only the patch version.

Entering an invalid version number will return ```Invalid version number!```.
Entering an invalid release will return ```Invalid release type!```.

## Building with Gulp

In order to build the app to the build folder, run the command `gulp run -r [releaseType]`.

The `-r` flag is for release, and accepts a value of `major`, `minor`, or `patch`.

Example usage: `gulp run -r major`, which will bump the version in package.json to the next major version in this example.

If your current version is `1.10.0`,
- `major` will bump it to `2.0.0`
- `minor` will bump it to `1.11.0`
- `patch` will bump it to `1.10.1`

## Code Deploy

Master: <img src="https://codeship.com/projects/b49452f0-efe0-0134-080a-3eb3ee5cdf25/status?branch=master" alt="Codeship Status for codeship/documentation" />
Dev: <img src="https://codeship.com/projects/b49452f0-efe0-0134-080a-3eb3ee5cdf25/status?branch=dev" alt="Codeship Status for codeship/documentation" />

The repo will auto deploy to Codeship once the master branch is pushed.
