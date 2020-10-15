import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

function createApolloClient(authStorage) {
  return new ApolloClient({
    uri: Constants.manifest.extra.APOLLO_URI,
    request: async operation => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
}

export default createApolloClient;
