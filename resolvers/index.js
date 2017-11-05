import { merge } from 'lodash';
import QueryResolvers from './query';
import MutationResolvers from './mutation';

const Resolvers = merge(
  QueryResolvers,
  MutationResolvers,
);

export default Resolvers;