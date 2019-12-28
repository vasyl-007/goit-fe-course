export default function fetchCountry(baseUrl, value, onData) {
  fetch(baseUrl + value).then(response =>
    response
      .json()
      .then(data => {
        onData(data);
      })
      .catch( e => {
        console.log(e)
        throw new Error("fetch county error!!!!!");
      })
  );
}