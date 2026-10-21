# Expo playground

This small host app renders the package on a real screen. It has switches for the loading state and optional pulse animation.

## Run on a phone

1. Install Node.js 22.13 or newer and install Expo Go on an Android or iPhone.
2. In this folder, run `npm install` once.
3. Run `npx expo start` and scan the QR code while the phone and computer are on the same Wi-Fi network.
4. Use the switches to compare skeleton placeholders with the real content and to enable pulse.

The example targets Expo SDK 58 to match the installed Expo Go version. The app imports the library from the parent folder using a local file dependency. No development build or extra native module is expected for this package; if Expo Go reports a compatibility issue, that is a signal to investigate before claiming support.

For emulator instructions and platform setup, see the [Expo environment setup guide](https://docs.expo.dev/get-started/set-up-your-environment/).
