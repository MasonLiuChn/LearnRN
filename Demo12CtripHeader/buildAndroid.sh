#!/usr/bin/env bash
cd `dirname $0`
chmod 777 copy.sh
./copy.sh
cd ../MainProject
react-native run-android