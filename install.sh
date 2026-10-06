#!/bin/sh
set -eu

# https://github.com/mzgs/Visual-Studi-Code-Extension-for-Raycast-1
work_dir=$(mktemp -d)
trap 'rm -rf "$work_dir"' 0
trap 'exit 130' INT
trap 'exit 143' TERM

cd "$work_dir"
git clone https://github.com/mzgs/Visual-Studi-Code-Extension-for-Raycast-1.git
cd Visual-Studi-Code-Extension-for-Raycast-1
npm ci
npm run build
npm run dev
cd ..
rm -rf Visual-Studi-Code-Extension-for-Raycast-1
