# Simple Loading Indicator Screen for React Native

<img src="https://raw.githubusercontent.com/devzerstudio/react-native-simple-loading/main/screenshots/android_Pixel_3a.gif" width="200" height="405" alt="" />

## Installation

### npm

```shell
npm i react-native-simple-loading
```

### yarn

```shell
yarn add react-native-simple-loading
```

## Usage

Step 1: Import the package.

```diff
import SimpleLoading from "react-native-simple-loading";
```

Step 1: Provide necessary props.

Example 01 (Minimal)

```diff
if (loading) {
  return (
    <SimpleLoading
      text="downloading..."
      loading={loading}
    />
  );
}
```

Example 02 (Optimal)

```diff
if (loading) {
  return (
    <SimpleLoading
      size="large" // "small"
      direction="row" // "column"
      color="#fff" // "primary" | "secondary"
      text="downloading..."
      mode="fullscreen" // "default"
      loading={loading}
      containerStyles={{ backgroundColor: "black" }}
      textStyles={{ color: "white" }}
    />
  );
}
```
