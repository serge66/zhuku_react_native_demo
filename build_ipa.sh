#自定义ios打包 lsj
#!/bin/bash
cd ios
rm -rf build/*
# clean project 
xcodebuild clean -project zhuku02.xcodeproj -configuration Release -alltargets
# make archive 
xcodebuild archive -project zhuku02.xcodeproj -scheme zhuku02 -archivePath build/zhuku02.xcarchive
# export .ipa
xcrun xcodebuild -exportArchive -archivePath build/zhuku02.xcarchive -exportPath build -exportOptionsPlist exportPlist.plist
# notice: 需要替换上述zhuku02为自己的应用名。
