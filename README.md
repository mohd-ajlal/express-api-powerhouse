# Express API Powerhouse

A powerful backend API built with Express.js, PostgreSQL, Prisma, Redis, Nodemailer, and BullMQ. This project includes robust features such as authentication, authorization, caching, rate limiting, CORS, pagination, API transformation, email sending, and queuing.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Authentication**: Secure user authentication using JWT.
- **Authorization**: Role-based access control.
- **Caching**: Optimized data retrieval with Redis.
- **Rate Limiter**: Protect your API from abuse.
- **CORS**: Cross-Origin Resource Sharing configured.
- **Pagination**: Efficient data handling with pagination.
- **API Transformation**: Consistent and flexible API responses.
- **Email Sending**: Automated email sending using Nodemailer.
- **Queue**: Background processing with BullMQ.

## Prerequisites

- Node.js
- PostgreSQL
- Redis

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohd-ajlal/express-api-powerhouse.git
   cd express-api-powerhouse

2. Install dependencies:

    ```bash
    npm install

3. Set up the environment variables:

    ```bash
    cp .env.example .env

4. Configure the database:

    ```bash
    npx prisma migrate dev
