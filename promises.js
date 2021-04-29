let delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

delay(1000)
  .then(() => {
    console.log("Hello");
    return "Kumar";
  })
  .then((msg) => console.log(msg))
  .then(() => console.log("Hello"))
  .finally(() => console.log("finally called"));

async function loadJson(url) {
  try {
    let response = await fetch(url);
    if (response.json()) {
      return response.json();
    }
    throw new Error(response.status);
  } catch (err) {
    console.log(err);
  }
}
