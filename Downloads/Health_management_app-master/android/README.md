# Nuvia_care Health Management - Android App

This is the Android native app for the Nuviacare Health Management system, built with Jetpack Compose and integrated with Google AdMob.

## Features

- **Jetpack Compose UI** - Modern declarative UI
- **Google AdMob Integration** - Banner ads with your AdMob IDs
- **Backend API Integration** - Ready to connect to your MERN backend
- **Material Design 3** - Beautiful, modern UI components

## Setup Instructions

1. **Open in Android Studio**
   - Open Android Studio
   - Select "Open an Existing Project"
   - Navigate to the `android` folder

2. **Update Backend URL**
   - Open `app/src/main/java/com/nuviacare/healthmanagement/ApiService.kt`
   - Update `BASE_URL` with your backend API URL

3. **Build and Run**
   - Sync Gradle files
   - Connect an Android device or start an emulator
   - Click Run

## AdMob Configuration

The app is configured with your AdMob credentials:
- **App ID**: `ca-app-pub-8617849690810653~3018223223`
- **Banner Ad Unit ID**: `ca-app-pub-8617849690810653/5261243188`

Test ad unit ID is available for testing: `ca-app-pub-3940256099942544/6300978111`

To switch between test and production ads, change the `useTestAds` variable in `MainActivity.kt`:
```kotlin
val useTestAds = true  // For testing
val useTestAds = false // For production
```

## Project Structure

```
android/
├── app/
│   ├── src/main/
│   │   ├── java/com/nuviacare/healthmanagement/
│   │   │   ├── MainActivity.kt       # Main activity with AdMob integration
│   │   │   └── ApiService.kt         # Retrofit API service
│   │   ├── res/
│   │   │   └── values/
│   │   │       ├── strings.xml       # Ad Unit IDs
│   │   │       └── themes.xml
│   │   └── AndroidManifest.xml
│   └── build.gradle
├── build.gradle
├── settings.gradle
├── gradle.properties
└── README.md
```

## Requirements

- Android Studio (latest version)
- Android SDK 24 or higher
- Gradle 8.4 or higher

## Building the App

```bash
cd android
./gradlew assembleDebug
```

Or use Android Studio's built-in build tools.

## Connecting to Backend

Update the `BASE_URL` in `ApiService.kt` to point to your backend:

```kotlin
const val BASE_URL = "https://your-backend-domain.com/api/"
```

The app includes sample API interfaces and data models. Implement the actual API calls based on your backend endpoints.

## Testing AdMob Ads

1. For testing, use the test ad unit ID (already configured)
2. The banner ad will appear at the bottom of the screen
3. For production, change `useTestAds` to `false`

## Notes

- This app does NOT modify your existing MERN stack
- It's a separate client that calls your backend API
- You can run both the web app and Android app simultaneously
- They share the same backend and database

