import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  console.log(blog);

  return (
   <div>
     <Helmet>
                <title>Crestview | blog</title>
    </Helmet>
    <div className=" gap-3 max-w-[1280px] mx-auto " >
    <div className="w-">
    {blog.map((blogs) => (
        <div className="bg-gray-700 p-4 mb-5 shadow-2xl shadow-neutral-950 bg-gradient-to-r from-gray-600 from-10%  to-gray-900   ...">
        <div className="lg:flex gap-6">
        <div className="flex-" >
            <img className="w-96 h-" src={blogs.image} alt="" />
          </div>
          <div className="flex-1 p-10" data-aos-duration="1000" data-aos="fade-up"
     data-aos-duration="3000">
          <p className="text-2xl text-gray-200 leading-10">{blogs.description}</p>
          </div>
        </div>
          <div data-aos="fade-left">
          <h1 className="text-5xl font-bold py-4 text-white"> {blogs.title}</h1>
          </div>
          <div >
            <h1 className="py-4 text-green-500">{blogs.postDate}</h1>
          </div>

        </div>
      ))}
    </div>
{/* <div className="w-1/4">
<h1 className="border text-center text-3xl">side card</h1>
    <div>
      <h1>Search</h1>
      <hr />
      <input type="text" placeholder="Enter a keyword to serch" name="" id="" />
    </div>
    <div>
      Recent Posts
    </div>

</div> */}
    </div>
   </div>
  );
};

export default Blog;
