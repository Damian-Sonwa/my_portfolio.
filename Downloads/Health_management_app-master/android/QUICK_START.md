# Quick Start Guide - Android App with AdMob

## ✅ What's Already Configured

1. **AdMob Integration** - Fully configured with your Ad IDs:
   - App ID: `ca-app-pub-8617849690810653~3018223223`
   - Banner Ad Unit ID: `ca-app-pub-8617849690810653/5261243188`

2. **Project Structure** - Complete Android project with:
   - MainActivity.kt with AdMob initialization
   - Banner ad at the bottom of the screen
   - Material Design 3 UI
   - Jetpack Compose

3. **Backend Integration** - API service ready to connect to your MERN stack

## 🚀 How to Build and Run

### Prerequisites
- Android Studio Hedgehog (2023.1.1) or newer
- Android SDK (API 24+)
- Java 8 or newer

### Steps

1. **Open Project in Android Studio**
   ```bash
   cd android
   ```
   Then open the `android` folder in Android Studio

2. **Update Backend URL**
   - Open `app/src/main/java/com/nuviacare/healthmanagement/ApiService.kt`
   - Change line 9:
     ```kotlin
     const val BASE_URL = "http://your-backend-url.com/api/"
     ```
   - Replace with your actual backend URL (e.g., `https://api.yourdomain.com/api/`)

3. **Build the Project**
   - Click "Sync Project with Gradle Files" in Android Studio
   - Wait for Gradle to finish syncing

4. **Run the App**
   - Connect an Android device or start an emulator
   - Click the Run button (▶️) or press Shift+F10
   - The app will install and launch

## 🧪 Testing AdMob

### Use Test Ads (Recommended for Development)
In `MainActivity.kt` line 86:
```kotlin
val useTestAds = true  // Use Google's test ad unit
```

### Use Production Ads
In `MainActivity.kt` line 86:
```kotlin
val useTestAds = false  // Use your real ad unit
```

## 📱 What You'll See

- **Top**: App bar with "Nuviacare Health Management"
- **Middle**: Scrollable list of health management features
- **Bottom**: AdMob banner ad (50dp height)

## 📊 AdMob Configuration Details

### AndroidManifest.xml (lines 20-22)
```xml
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-8617849690810653~3018223223" />
```

### MainActivity.kt (lines 26-29)
```kotlin
MobileAds.initialize(this) { initializationStatus ->
    // Initialization handled
}
```

### strings.xml
- Production Banner ID: `ca-app-pub-8617849690810653/5261243188`
- Test Banner ID: `ca-app-pub-3940256099942544/6300978111`

## 🔧 Key Files

| File | Purpose |
|------|---------|
| `MainActivity.kt` | Main screen with AdMob banner |
| `ApiService.kt` | Backend API integration |
| `AndroidManifest.xml` | AdMob App ID configuration |
| `strings.xml` | Ad Unit IDs |
| `build.gradle` | Dependencies including AdMob SDK |

## ⚠️ Important Notes

1. **No Changes to MERN App**: This Android app is completely separate from your web app. It doesn't modify any existing files.

2. **Internet Permission**: Required for AdMob. Already configured in AndroidManifest.xml

3. **Ad Unit IDs**: Make sure your AdMob account is set up with these IDs

4. **Testing**: Always test with test ads first before using production ads

## 🐛 Troubleshooting

### Build Errors
- Make sure SDK version 24+ is installed
- Sync Gradle files after opening in Android Studio

### Ads Not Showing
- Check internet connection
- Verify Ad Unit IDs are correct
- For test ads, use the test ID
- Check Google Play Services is installed on device

### API Not Working
- Update `BASE_URL` in `ApiService.kt`
- Make sure your backend CORS allows your app
- Check backend is running

## 📝 Next Steps

1. Update API endpoints in `ApiService.kt` to match your backend routes
2. Add more screens and navigation
3. Implement actual API calls in your UI
4. Add authentication
5. Customize UI to match your web app design

## 📖 Resources

- [AdMob Documentation](https://developers.google.com/admob/android/quick-start)
- [Jetpack Compose](https://developer.android.com/jetpack/compose)
- [Material Design 3](https://m3.material.io/)

