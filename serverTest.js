import { db } from "./src/lib/prisma.js";


async function test() {
  try {
    const users = await db.user.findMany();
    console.log(users);
  } catch (e) {
    console.error(e);
  }
}

test();
