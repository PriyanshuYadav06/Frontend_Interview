// API Calling With Promises
const getData = () => {
  fetch("https://dummyjson.com/products")
    .then((response) => {
      /*  data here is a Response object.
          It contains metadata like status code, headers, etc.
          To get the actual JSON, you need to call data.json().
      */
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error While Fetching Data:", err);
    });
};
getData();

// Api Calling WIth Async-Await

const getDataByAsync = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error While Fetching Data:", err);
  }
};
getDataByAsync();
