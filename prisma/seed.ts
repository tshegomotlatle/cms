import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();

    // Create the trigger function with logging
    await prisma.$executeRaw`
      CREATE OR REPLACE FUNCTION notify_insert() RETURNS trigger AS $$
      BEGIN
        RAISE NOTICE 'Trigger fired: New row inserted with id = %', NEW.id;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `;

    console.log("Trigger function 'notify_insert' created successfully.");

    // Create the trigger on your table
    await prisma.$executeRaw`
      CREATE TRIGGER after_insert_on_your_table
      AFTER INSERT ON user_entity
      FOR EACH ROW
      EXECUTE FUNCTION notify_insert();
    `;

    console.log("Trigger 'after_insert_on_your_table' created successfully.");
  } catch (error) {
    console.error("Error creating trigger or function:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("Unhandled error in main:", e);
  process.exit(1);
});
