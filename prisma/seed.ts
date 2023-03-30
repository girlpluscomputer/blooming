import { PrismaClient } from '@prisma/client'

import { habits } from '../data/habits'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: 'test@user.com',
      habits: {
        create: habits
      }
    },
    include: {
      habits: {
        include: {
          logs: true
        }
      }
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
