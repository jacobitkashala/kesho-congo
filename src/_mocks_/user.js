import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: '20/12/2020',
  isVerified: faker.datatype.boolean(),
  status: sample(['autre', 'moderer', 'severe']),
  role: sample(['Fille', 'Garçons'])
}));

export default users;
