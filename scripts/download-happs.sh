#!/bin/bash

# bump this in tandem with bumping the INTEGRITY_VERSION_NUMBER
mkdir -p electron/binaries
wget https://github.com/lightningrodlabs/acorn-happ/releases/download/v6.0.0/profiles.happ -O electron/binaries/profiles.happ
wget https://github.com/lightningrodlabs/acorn-happ/releases/download/v6.0.0/projects.happ -O electron/binaries/projects.happ