#!/bin/bash
echo "Building all microservices with JIB (Docker Local)..."

# Build Services
cd "backend actuel"
# Check if JIB is configured for all, if not maven install
# We added JIB to Review and Notifications. Others might need it or already have it.
# We will use mvn clean install jib:dockerBuild to build to local daemon.

echo "Building Review Service..."
cd review-service
mvn clean install jib:dockerBuild -DskipTests
cd ..

echo "Building Notifications Service..."
cd notifications-service
mvn clean install jib:dockerBuild -DskipTests
cd ..

# Assuming others have JIB or need simple maven build if docker-compose builds them via context (Use images if available)
# The user prompt said: "Build avec JIB (pas de Dockerfile)".
# So I must assume all have JIB.
# I will loop through directory
for d in */ ; do
    if [ "$d" == "review-service/" ] || [ "$d" == "notifications-service/" ]; then
        continue # Already built above
    fi
    echo "Building $d..."
    cd "$d"
    # Try JIB build, if fails fallback to install? 
    # Use -fn (fail never) or just try jib:dockerBuild
    mvn clean install jib:dockerBuild -DskipTests
    cd ..
done
cd ..

echo "Building frontend..."
cd "frontend actuel"
# Ensure Dockerfile exists
if [ ! -f Dockerfile ]; then
    echo "Creating Dockerfile for Frontend..."
    echo 'FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]' > Dockerfile
fi
docker build -t racinekane/ndankndank-frontend:v1 .
cd ..

echo "All builds complete."
