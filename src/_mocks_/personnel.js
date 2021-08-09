import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const personnel = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  prenom: faker.name.findName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['Nutritionniste', 'medecin', 'infirmier']),
  role: sample(['Fille', 'Garçons'])
}));

export default personnel;
