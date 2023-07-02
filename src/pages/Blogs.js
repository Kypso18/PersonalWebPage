import React from 'react'

const Blogs = () => {
  return (
    <section className="w-auto h-full text-white" style={{
        background: "linear-gradient(90deg, rgba(131, 126, 226, 0.55) 24%, rgba(114, 114, 226, 0.55) 58%, rgba(0, 212, 255, 0.55) 100%)"
      
      }}>
         <div className="container px-9 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        <div className="p-4 bg-white/60 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-gray-700">Blog Post 1</h2>
          <p className="text-gray-600 mb-2">June 1, 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla mauris vel mi ullamcorper, vel volutpat est vulputate. Nulla ac efficitur elit.</p>
        </div>
        <div className="p-4 bg-white/60 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-gray-700">Blog Post 2</h2>
          <p className="text-gray-600 mb-2">June 15, 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla mauris vel mi ullamcorper, vel volutpat est vulputate. Nulla ac efficitur elit.</p>
        </div>
        <div className="p-4 bg-white/60 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-gray-700">Blog Post 3</h2>
          <p className="text-gray-600 mb-2">June 30, 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla mauris vel mi ullamcorper, vel volutpat est vulputate. Nulla ac efficitur elit.</p>
        </div>
      </div>
    </div>
        
      </section>
  )
}

export default Blogs