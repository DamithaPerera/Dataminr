import request from 'supertest';
import connection from '../database/db';

import app from '../index';

describe('POST /task', () => {
  it('creates task in the database with status code 201', async () => {
    const result = await request(app).post('/task').send({ title: 'test task' });
    expect(result.statusCode).toEqual(201);
    expect(result.body).toHaveProperty('message');
  });
});

describe('POST /task-list', () => {
  it('creates task-list in the database with status code 201', async () => {
    const result = await request(app).post('/taskList').send({ title: 'test task list', taskListId: Math.floor(Math.random() * (500 - 200 + 1)) + 200 });
    expect(result.statusCode).toEqual(201);
    expect(result.body).toHaveProperty('message');
  });
});
