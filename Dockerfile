# Use the official Node.js xx image as the base image
FROM  node:18-alpine

ENV SITE_URL=http://getenergy.ng

ENV NEXT_PUBLIC_API_URL=https://api.getenergy.ng/api/v1
ENV NEXT_PUBLIC_DASHBOARD_URL=https://dashboard.getenergy.ng
ENV NEXT_PUBLIC_GET_STARTED_ADDRESS=https://dashboard.getenergy.ng
ENV NEXT_PUBLIC_INTERN_FORM_URL=https://forms.gle/yKcaBXTbJij7nkRq6
ENV NEXT_PUBLIC_VOLUNTEER_FORM_URL=https://forms.gle/ry1ns72EMi7TCfxz9
ENV NEXT_PUBLIC_WAITLIST_URL=https://4e9ggpej5so.typeform.com/to/dAh3NSqp
# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY tsconfig*.json .
COPY package*.json .
COPY yarn.lock .

# Install the app's dependencies
RUN yarn install

# Copy the rest of the app's source code to the container
COPY . .

# Build the Nest.js app
RUN yarn build
EXPOSE 3000

# Set the command to start the app
CMD ["npm", "start"]
