# RNListTestTask

## Description

This a list of users where you can check users' details, like first name, last name, email and etc.
The list refreshes every 30 seconds automaticallly. Also, there is an option to refresh it with Pull-To-Refresh method.
To check details you need to press on list item. Then you will see modal with user's details.

## Tech. stack:

- React Native CLI - https://reactnative.dev,
- redux/toolkit - https://redux-toolkit.js.org,
- React Query - https://tanstack.com/query/latest/docs/framework/react/overview.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 0: Install Packages

Run the following commands from the _root_ of your React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn install

# after installing dependencies
cd ios && pod install && cd ..
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
