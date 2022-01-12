import axios from "axios";

async function getData(user_id) {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+ user_id);
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/"+ user_id);

    users.post = [{...post}];
    console.log(users)
}

export default getData;
