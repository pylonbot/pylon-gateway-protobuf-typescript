#!/bin/bash

echo "> installing proto tools"
apt install -y protobuf-compiler

echo "> removing old directories"
rm -rf src
mkdir -p src

echo "> cloning fresh protos..."
rm -rf proto
git clone https://github.com/pylonbot/pylon-gateway-protobuf.git proto

echo "> yarn install"
yarn install

echo "> generating protos"
protoc \
  -Iproto \
  --plugin=./node_modules/ts-proto/protoc-gen-ts_proto \
  --ts_proto_opt=context=true,useContext=true,forceLong=string,unrecognizedEnum=false,outputTypeRegistry=true,outputServices=grpc-js,esModuleInterop=true,oneof=unions \
  --ts_proto_out=src \
  $(find ./ -type f -name "*.proto" | grep -v google)

echo "> building library"
yarn run tsc -p .