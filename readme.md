## Get Started

**Installation**

- run `yarn global add patch-package`
- run `git clone https://github.com/israelite6/bravado.git`
- run `cd ./bravado`
- run `yarn` or `npm install`
- for IOS run `cd ios && pod install`

**Run the app**

- run `npx react-native run-android`
- ios open xcode and run the project

**Test Demo Info**

Rund the app and visit these url to test the deeplinking functionality

- Test deeplink website `http://israelalegbeleye.com/search/text`
- Deeplink url `bravado://search/text`

**Build Release**

- run `yarn build-release`

The generated AAB can be found under `android/app/build/outputs/bundle/release/app.aab`, and is ready to be uploaded to Google Play.
