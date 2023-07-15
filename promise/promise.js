const JSON_URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";

function fetcherGET(url){
   return new Promise ((resolve, reject) =>{
    fetch(url)
        .then((response) => response.json())
        .then ((json) =>{
            resolve(json);
        })
        .catch(err => reject(err));
    });
}

async function fetchJD (){
    const jobIds = await fetcherGET( JSON_URL);
    const fetchPromiseArray = jobIds.map((jobId) =>{
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
    })
    const responseArray = await Promise.all(fetchPromiseArray)
    const jsonPromiseArray = responseArray.map((response) => {
        return response.json();
    })
    const jsonArray = await Promise.all(jsonPromiseArray)
    return jsonArray

}
async function fetchJDArray() {
    /** @type {[number]} */
    const jobIds = await fetcherGET( JSON_URL);
    const fetcherGETPromiseArray = jobIds.map((jobId) =>{
        return fetcherGET(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
    })
    const dataArr = await Promise.all(fetcherGETPromiseArray);
    return dataArr;
}
fetchJDArray().then((result)=>console.log(result))



