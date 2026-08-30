# KALASAG Field App

The mobile app used by the responder physically placing relay nodes: BLE pairing to register a node, GPS/manual position logging, offline-first sync to the backend.

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Framework | React Native (CLI, not Expo — see [ADR 0004](../docs/Decisions/0004-use-react-native-for-mobile.md)) |
| Language | TypeScript |
| Native tooling | Android Studio (Android), Xcode (iOS, macOS only) |

## Editor: VS Code + Android Studio

The mobile team uses both, for different jobs — you'll want both installed:

- **VS Code** — where you actually write and edit code: `App.tsx`, everything in `src/`. This is where ESLint, TypeScript, and Metro (the RN dev server) all work correctly. Recommended extensions: `dbaeumer.vscode-eslint`, `msjsdiag.vscode-react-native` (debugging/log streaming for RN).
- **Android Studio** — not for editing app code. It's for the Android SDK Manager, running/configuring the emulator (AVD Manager), and Logcat if you need to debug a native-level crash. Open `mobile/android/` directly in it if you ever need to touch native Gradle config — the JS/TS side (`src/`, `App.tsx`) isn't something you'd edit there.

In short: code in VS Code, run the emulator and manage the SDK from Android Studio, build/run the app itself via `npm run android` from a terminal (VS Code's integrated terminal is fine) rather than through Android Studio's UI.

## Prerequisites

1. **Node.js** — same NVM setup as [web](../web/README.md#1-frontend-prerequisites-nodejs). `mobile/package.json` requires Node ≥ 20.
2. **Watchman** (macOS/Linux) — improves Metro's file-watching performance. `brew install watchman` on macOS; see [Watchman's install docs](https://facebook.github.io/watchman/docs/install) for Linux.
3. **Android development** (needed even on macOS/Windows, since Android is the primary target):
   - Install [Android Studio](https://developer.android.com/studio).
   - In Android Studio's SDK Manager, install the latest stable Android SDK Platform, SDK Build-Tools, Android Emulator, and Platform-Tools.
   - Set the `ANDROID_HOME` environment variable and add `platform-tools` to your `PATH`.
   - Create at least one emulator via Android Studio's Device Manager (AVD).
   - Install a JDK — check [React Native's environment setup guide](https://reactnative.dev/docs/set-up-your-environment) for the version this React Native release expects (Android Studio can install one for you via its SDK Manager).
4. **iOS development** (macOS only, optional if you're only targeting Android):
   - Install Xcode from the App Store, plus the Command Line Tools (`xcode-select --install`).
   - Install CocoaPods: `sudo gem install cocoapods` (or `brew install cocoapods`).

For anything version-specific that drifts over time, defer to [React Native's official environment setup guide](https://reactnative.dev/docs/set-up-your-environment) — this file covers what's specific to this project, not general RN onboarding.

## First-time only: generating `android/` and `ios/`

`android/` and `ios/` aren't checked into this repo yet — the JS/TS side was scaffolded by hand without running the React Native CLI, so there's no native project to build against. **Whoever does this first should commit the generated folders** so nobody else has to repeat it:

```bash
npx @react-native-community/cli@0.77.0 init KalasagFieldApp --version 0.77.0 --directory /tmp/kalasag-native-scaffold
cp -r /tmp/kalasag-native-scaffold/android mobile/android
cp -r /tmp/kalasag-native-scaffold/ios mobile/ios
rm -rf /tmp/kalasag-native-scaffold
```

Match the app name (`KalasagFieldApp`) to `app.json`. Once `android/` and `ios/` exist and are committed, everyone else skips this step entirely.

## Running the app locally

1. `cd mobile`
2. `npm install`
3. Start Metro: `npm start`
4. In a second terminal, run on your target:
   - Android: `npm run android` (emulator must already be running, or a device connected with USB debugging on)
   - iOS (macOS only): `cd ios && pod install && cd ..`, then `npm run ios`

## Repository Rules

- **Dependency Management:** don't commit `node_modules/`, `android/.gradle/`, `android/app/build/`, `ios/Pods/`, or `ios/build/` — see the root `.gitignore`.
- **Environment Variables:** copy `.env.example` to `.env` and fill in local values (API base URL, Google Maps key). Never commit `.env`.
