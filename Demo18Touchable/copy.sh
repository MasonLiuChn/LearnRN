#!/usr/bin/env bash
cd `dirname $0`
rm -rf ../MainProject/*.js
cp -rf *.js ../MainProject
echo " "   >> ../MainProject/index.android.js