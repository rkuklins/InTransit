const graphQLURL = "http://localhost:9000/";
async function fetchData() {
    const response = await fetch(graphQLURL,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query:`
                query  {
                    greeting
                }
            `,
        }),
    });
    const {data} = await response.json();
    return data;
}

const element = document.getElementById('greeting');
element.textContent = 'Loading...';
fetchData().then(({ greeting }) => {
    element.textContent = 'Hmm';
    element.textContent = greeting;
});