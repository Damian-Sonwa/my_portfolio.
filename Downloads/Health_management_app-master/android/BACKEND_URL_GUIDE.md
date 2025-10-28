# Backend URL Configuration Guide

## 🔍 Your Backend URLs

Based on your existing MERN stack configuration:

### Local Development
- **URL**: `http://localhost:5001/api`
- **Port**: 5001 (configured in `backend/server.js`)
- **For Android Emulator**: `http://10.0.2.2:5001/api` ✅ (Already configured)

### Production
- **URL**: `https://health-management-app-joj5.onrender.com/api`
- **Hosted on**: Render.com
- **Status**: Live

## 📱 Android App Configuration

The Android app is currently configured to use your **local backend** when running on an emulator.

**File**: `android/app/src/main/java/com/nuviacare/healthmanagement/ApiService.kt`

### Current Setting (Lines 12-13)
```kotlin
const val BASE_URL = "http://10.0.2.2:5001/api/"  // Android emulator localhost
```

### To Switch to Production
Uncomment line 13 and comment line 12:
```kotlin
// const val BASE_URL = "http://10.0.2.2:5001/api/"  // Emulator localhost
const val BASE_URL = "https://health-management-app-joj5.onrender.com/api/"  // Production
```

## 🧪 Testing Options

### Option 1: Android Emulator with Local Backend ✅
**Already configured!** Works out of the box.

Requirements:
- Start your local backend: `cd backend && npm start`
- Run Android app in emulator
- Backend will be accessible at `http://10.0.2.2:5001/api`

### Option 2: Physical Device with Local Backend
Update BASE_URL to your computer's local IP:

```kotlin
const val BASE_URL = "http://192.168.1.100:5001/api/"  // Replace with your IP
```

To find your computer's IP:
- **Windows**: `ipconfig` → Look for "IPv4 Address"
- **Mac/Linux**: `ifconfig` or `ip addr`

Requirements:
- Device and computer on same Wi-Fi network
- Backend running on your computer
- Update BASE_URL with your computer's IP

### Option 3: Production Backend (Render.com)
Switch BASE_URL to:
```kotlin
const val BASE_URL = "https://health-management-app-joj5.onrender.com/api/"
```

✅ No additional setup needed
✅ Works on any device anywhere
⚠️ Subject to Render.com cold starts (may take 30-60 seconds)

## 📋 Quick Reference

| Environment | URL | Android Code | Notes |
|-------------|-----|--------------|-------|
| **Emulator + Local** | `10.0.2.2:5001/api` | ✅ Current setting | Best for development |
| **Device + Local** | `192.168.x.x:5001/api` | Update needed | Find your IP first |
| **Production** | `health-management-app-joj5.onrender.com/api` | Switch URL | Works everywhere |

## 🔧 How to Change the URL

1. Open `android/app/src/main/java/com/nuviacare/healthmanagement/ApiService.kt`
2. Edit line 12 or 13 to switch between local and production
3. Rebuild the app in Android Studio

## ⚠️ Important Notes

### For Android Emulator:
- Use `10.0.2.2` instead of `localhost`
- This is Android's special IP for host machine
- ✅ Already configured for you!

### For Physical Device:
- Must use your computer's actual IP address
- Both device and computer must be on same Wi-Fi
- Example: `http://192.168.1.50:5001/api/`

### CORS Configuration:
Your backend already allows connections from various origins (see `backend/server.js` lines 39-46):
- localhost:3000, 5173, 5174
- Production: nuviacare-life.netlify.app

**For Android app**, you may need to add your local IP to CORS allowedOrigins if testing on physical device.

## 📱 Current Status

✅ **Android Emulator**: Ready to use with local backend
⚠️ **Physical Device**: Needs IP address configuration
✅ **Production**: Ready to use (just uncomment line 13)

## 🚀 Recommended Setup

**For Development**: Use Android Emulator with current setting
- No additional configuration needed
- Fast development cycle
- Easy debugging

**For Testing**: Use production URL (uncomment line 13)
- Test with real backend
- No local server needed
- Works on any device

