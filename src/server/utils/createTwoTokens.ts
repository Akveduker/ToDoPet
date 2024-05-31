import createRefreshToken from '@server-utils/createRefreshToken';
import createAccessToken from '@server-utils/createAccessToken';

const CreateTwoTokens = <T extends object>(data: T) => {
  const refResh = createRefreshToken(data);
  const access = createAccessToken(data);
  return [access, refResh];
};

export default CreateTwoTokens;
