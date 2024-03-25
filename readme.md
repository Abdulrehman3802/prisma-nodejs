# Node Js Prisma Setup

## Description
This project requires the following dependencies to be installed before running:

- Prisma CLI
- Prisma Client

## Installation
To install the necessary dependencies, run the following command:
```bash
npm install
```

## Migration Command
To perform database migration using Prisma, run the following command:
```bash
prisma migrate dev --schema=./schema.prisma init
```

Make sure to have your schema defined in `schema.prisma` before running the migration command.

---

Feel free to customize this template further to suit your project's specific requirements.