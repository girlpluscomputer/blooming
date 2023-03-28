import { PrismaClient } from '@prisma/client'
import { habits } from '../data/habits'
import { users } from '../data/users'
import { categories } from '../data/categories'
import { logs } from '../data/logs'

const prisma = new PrismaClient()

async function main() {
  await prisma.category.createMany({
    data: categories
  })
  await prisma.user.createMany({
    data: users
  })
  await prisma.habit.createMany({
    data: habits
  })
  await prisma.log.createMany({
    data: logs
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
