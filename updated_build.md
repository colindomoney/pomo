# Pomodoro Timer - Build & Deployment Guide

## Prerequisites
- Flutter SDK (3.6.0+)
- Android Studio / Android SDK (for APK builds)
- Chrome browser (for web development)
- Python 3 (for serving static web builds)

## Initial Setup & Fixes Applied

### 1. Fixed Localization Issues
The app uses Flutter's localization system. Configuration was updated to generate files correctly:

**File: `l10n.yaml`**
```yaml
arb-dir: lib/l10n/arb
template-arb-file: app_en.arb
output-localization-file: app_localizations.dart
output-dir: lib/generated
nullable-getter: false
output-class: S
```

**File: `lib/l10n/l10n.dart`**
- Updated imports from `package:flutter_gen/gen_l10n/` to `package:pomo/generated/`

**Generate localization files:**
```bash
flutter gen-l10n
```

### 2. Updated Android Build Configuration
Updated Gradle and Android Gradle Plugin for compatibility with Java 21:

**File: `android/gradle/wrapper/gradle-wrapper.properties`**
- Updated Gradle to version 8.7

**File: `android/settings.gradle`**
- Updated Android Gradle Plugin to 8.6.0
- Updated Kotlin to 2.1.0

**File: `android/gradle.properties`**
- Increased JVM heap size to 4096M for builds

## Building the Application

### Web Build (Static)

Build optimized web release to `docs` folder:
```bash
flutter build web --release -o docs
```

The build output will be in the `docs` directory, ready for GitHub Pages or any static hosting.

### Android APK Build

#### Profile Build (Unsigned, for testing)
```bash
flutter build apk --profile
```

This creates three flavor APKs in `build/app/outputs/flutter-apk/`:
- `app-development-profile.apk`
- `app-production-profile.apk` (recommended)
- `app-staging-profile.apk`

#### Debug Build (For development)
```bash
flutter build apk --debug
```

#### Release Build (Requires signing configuration)
```bash
flutter build apk --release
```
Note: Release builds require setting up a keystore and signing configuration.

## Installing the Application

### Install on Connected Android Device

1. **Check connected devices:**
```bash
flutter devices
```

2. **Install using Flutter (recommended):**
```bash
flutter install --device-id [DEVICE_ID] --flavor production --profile
```

3. **Alternative - Install APK directly with ADB:**
```bash
adb install build/app/outputs/flutter-apk/app-production-profile.apk
```

### Web Installation
No installation needed for web. Deploy the `docs` folder to any static hosting service.

## Running the Application

### Development Mode

#### Run on Web (Hot reload enabled)
```bash
flutter run -d chrome
```

#### Run on Android Device
```bash
flutter run -d [DEVICE_ID]
```

#### Run on specific flavor
```bash
flutter run --flavor development
flutter run --flavor staging
flutter run --flavor production
```

### Production/Static Web

#### Using Python HTTP Server
```bash
cd docs
python3 -m http.server 8000
```
Access at: http://localhost:8000

#### Using Node.js
```bash
npx serve docs
```

#### Using PHP
```bash
cd docs
php -S localhost:8000
```

## Quick Commands Reference

```bash
# Generate localization files
flutter gen-l10n

# Clean build artifacts
flutter clean

# Get dependencies
flutter pub get

# Build web to docs folder
flutter build web --release -o docs

# Build Android APK (profile mode)
flutter build apk --profile

# Install on connected device
flutter install --flavor production --profile

# Run in development mode
flutter run -d chrome           # Web
flutter run -d [DEVICE_ID]       # Android

# Serve static web build
cd docs && python3 -m http.server 8000
```

## Troubleshooting

### Build Errors
1. **Localization errors**: Run `flutter gen-l10n`
2. **Gradle errors**: Check Java version with `flutter doctor -v`
3. **Out of memory**: Increase heap in `android/gradle.properties`

### Common Issues Fixed
- ✅ Missing localization files (`flutter_gen` package)
- ✅ Gradle version incompatibility with Java 21
- ✅ Android Gradle Plugin version too old
- ✅ Insufficient JVM heap size

## Project Structure
```
pomo/
├── lib/                    # Dart source code
│   ├── generated/         # Generated localization files
│   └── l10n/             # Localization configuration
├── android/              # Android-specific files
├── docs/                 # Web build output (for GitHub Pages)
├── build/                # Build artifacts
│   └── app/
│       └── outputs/
│           └── flutter-apk/  # Generated APK files
└── l10n.yaml            # Localization configuration
```

## Notes
- The app uses Material Design 3 (Material You)
- Supports multiple timer fonts and themes
- Web build is optimized and tree-shaken
- APKs are approximately 109MB (includes Flutter engine)

---
Last updated: August 9, 2025
Built with Flutter 3.33.0