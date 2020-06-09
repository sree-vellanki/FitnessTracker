const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/fitness-dev");

async function createUser({ username, name, password }) {
  try {
    const result = await client.query(
      `
        INSERT INTO users(username, name, password)
        VALUES ($1, $2, $3);
      `,
      [username, name, password]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function createActivity({ name, desciprtion }) {
  try {
    const result = await client.query(
      `
      INSERT INTO activities(name, description)
      VALUES ($1, $2);
      `,
      [name, description]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(`SELECT id, username FROM users;`);

  return rows;
}

async function getAllActivites() {
  const { rows } = await client.query(`SELECT id, name FROM activites;`);

  return rows;
}
module.exports = {
  client,
  createUser,
  getAllUsers,
  createActivity,
  getAllActivites,
};
