import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  dataNaissance: '20/12/2020',
  derniereDataCons: '20/12/200',
  typeMalnutri: sample(['Aigu modéré', 'Aigui sévère', 'légère']),
  sex: sample(['F', 'G'])
}));

export default users;
