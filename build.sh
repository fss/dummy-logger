#!/usr/bin/env bash
docker build --platform linux/amd64 -t stryjek4/dummy-logger .
docker push stryjek4/dummy-logger
