# React Native Dimensions API: Handling Asynchronous Dimension Retrieval

This repository demonstrates a common error when using the `Dimensions` API in React Native to access screen dimensions and provides a solution to handle the asynchronous nature of the API.

## Problem

The `Dimensions` API in React Native returns an object containing screen dimensions (`width` and `height`).  However, this data is not always immediately available.  Accessing the dimensions synchronously can lead to undefined values, especially on app launch or orientation changes.

## Solution

The solution is to use the `Dimensions` API's `addEventListener` to listen for changes in screen dimensions and use the updated values in your component's state.

## Usage

Clone this repository and run the example.

```bash
git clone https://github.com/yourusername/react-native-dimensions-async.git
cd react-native-dimensions-async
# Run your React Native project
```