import getConfig from 'next/config';
import goFetch from 'isomorphic-unfetch';

const { publicRuntimeConfig } = getConfig();

async function fetch (url, options) {
  const finalUrl = url.startsWith('http')
    ? url
    : publicRuntimeConfig.SERVER_ADDR
      .replace(/\/$/, '') + '/' + url.replace(/^(\.|\/)/g, '');

  return new Promise((resolve, reject) => {
    goFetch(finalUrl, options)
      .then(async data => {
        resolve({ data: await data.json() });
      })
      .catch(error => {
        resolve({error});
      });
  });
}

export { fetch };

export default fetch;
