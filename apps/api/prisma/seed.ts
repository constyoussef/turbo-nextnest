import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

// Initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // 1. Clear existing data to ensure a fresh start
  // Order matters here to prevent foreign key constraint errors.
  try {
    await prisma.like.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.tag.deleteMany();
    console.log('Cleared existing data.');
  } catch (error) {
    console.error('Error clearing data:', error);
    process.exit(1);
  }

  // 2. Create users
  const usersData = Array.from({ length: 15 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(), // In a real app, you would hash this
    bio: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  }));
  await prisma.user.createMany({ data: usersData });
  console.log('Created 15 users.');

  // Fetch the created users to get their IDs
  const users = await prisma.user.findMany();
  const userIds = users.map((user) => user.id);

  // 3. Create tags
  const tagsData = Array.from({ length: 10 }).map(() => ({
    name: faker.word.noun(),
  }));
  await prisma.tag.createMany({ data: tagsData });
  console.log('Created 10 tags.');

  const tags = await prisma.tag.findMany();
  // const tagIds = tags.map((tag) => tag.id);

  // 4. Create posts
  const postsData = Array.from({ length: 25 }).map(() => {
    const title = faker.lorem.sentence();
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return {
      title,
      slug,
      content: faker.lorem.paragraphs(2),
      thumbnail: faker.image.url(),
      published: faker.datatype.boolean(),
      authorId: faker.helpers.arrayElement(userIds),
    };
  });
  await prisma.post.createMany({ data: postsData });
  console.log('Created 25 posts.');

  // Fetch created posts to get their IDs
  const posts = await prisma.post.findMany();
  const postIds = posts.map((post) => post.id);

  // 5. Connect tags to posts (many-to-many relationship)
  // This requires individual updates, as createMany doesn't handle m:n relations directly.
  for (const post of posts) {
    // Select a random number of tags (1 to 3) to connect to each post
    const tagsToConnect = faker.helpers.arrayElements(tags, { min: 1, max: 3 });
    await prisma.post.update({
      where: { id: post.id },
      data: {
        tags: {
          connect: tagsToConnect.map((tag) => ({ id: tag.id })),
        },
      },
    });
  }
  console.log('Connected posts and tags.');

  // 6. Create comments
  const commentsData = Array.from({ length: 50 }).map(() => ({
    content: faker.lorem.sentence(),
    published: faker.datatype.boolean(),
    postId: faker.helpers.arrayElement(postIds),
    authorId: faker.helpers.arrayElement(userIds),
  }));
  await prisma.comment.createMany({ data: commentsData });
  console.log('Created 50 comments.');

  // 7. Create likes
  // To avoid duplicate likes (a user liking the same post twice),
  // we'll create a unique list of user-post pairs.
  const uniqueLikes = new Set<string>();
  while (uniqueLikes.size < 30) {
    const userId = faker.helpers.arrayElement(userIds);
    const postId = faker.helpers.arrayElement(postIds);
    uniqueLikes.add(`${userId}-${postId}`);
  }

  const likesData = Array.from(uniqueLikes).map((pair) => {
    const [authorId, postId] = pair.split('-').map(Number);
    return { authorId, postId };
  });

  await prisma.like.createMany({ data: likesData });
  console.log(`Created ${likesData.length} unique likes.`);

  console.log('Database seeding finished successfully!');
}

main()
  .then(async () => {
    console.log('Closing the database connection.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
