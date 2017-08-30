#自定义android打包 lsj
#!/bin/bash
rm android/app/build/outputs/app-release.apk
cd android
./gradlew assembleRelease