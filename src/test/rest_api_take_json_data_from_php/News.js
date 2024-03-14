// import React from 'react';
//
// class News extends React.Component {
//
//     componentDidMount() {
//         const apiUrl = 'http://localhost/Test/News.php';
//         fetch(apiUrl, {mode: 'no-cors'})
//             .then((response) => response.json())
//             .then((data) => console.log('This is your data', data))
//             .catch(error => console.error(error));
//     }
//     render() {
//         return <h1>my Component has Mounted, Check the browser 'console' </h1>;
//     }
// };
// export default News;
import React, { useEffect, useState } from 'react';

const News = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost/Test/News.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load data');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }
    else {
        console.log(data);
    }

    return (
        <div>
            {/* Вывод данных */}
        </div>
    );
};

export default News;
