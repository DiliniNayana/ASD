
/**
 * @param {String} URL 
 * @param {String} method 
 * @param {String} body 
 * 
 * @returns {Promise}
 */
export default function fetchFunc(URL, method, body) {
  return new Promise((resolve, reject) => {
    fetch(URL, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     },
            body
        })
            .then((response) => response.json())
            .then((res => {
                resolve(res);
            }))
            .catch(error => reject(error));
    });
}