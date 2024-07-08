import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // you need to put handleDelete={handleDelete} in the parent prop
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }


    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = (e) => {
    //     console.log("hello", e);
    // }

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(30)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }

    return (
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{ name } is { age } years</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('steph', e)}>Click again</button> */}
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs" />} */}
        </div>
    );
}

export default Home;