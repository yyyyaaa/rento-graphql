import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import dotenv from 'dotenv';
import models from './db/models';
import schema from './schema';

// Configure environment variables
dotenv.config();

const willForceSync = process.env.NODE_ENV === 'development';
var app = express();

// Middlewares
app.use(cors({ origin: process.env.HOST, credentials: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/graphql', bodyParser.json(), graphqlExpress((req, res) => ({ 
  schema,
  context: { 
    models,
    res
  },
}))
);
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

models.sequelize.sync({ force: willForceSync }).then(() => {
  app.listen(process.env.PORT || 4000);
  console.log("Server is listening on port: 4000");
});
