#!/bin/bash
echo "Starting Ndank Ndank Stack..."
docker-compose up -d --remove-orphans
echo "Stack started. Access at http://localhost:3000"
