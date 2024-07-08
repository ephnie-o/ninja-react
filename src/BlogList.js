import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                        {/* you need to put handleDelete as a prop <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;

// Props could be written as:
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;