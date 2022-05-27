import React from 'react';
import first from '../../images/blog/first.jpg';
import second from '../../images/blog/second.png';
import third from '../../images/blog/third.PNG';
import fourth from '../../images/blog/fourth.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div className='mt-5'>
            <div className='blog-container container my-5shadow-lg border rounded'>
                <div className='blog-container-image'>
                    <img src={first} alt="" />
                </div>
                <div>
                    <h2 className='ms-3 mt-2'>How will you improve the performance of a React Application?</h2>
                    <p className='ms-3 mt-2'>With React apps, we can expect a very fast user interface by default. As an application grows, developers may encounter performance issues. In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. Among them are: Keeping component state local when necessary Memoizing React components to prevent unnecessary re-rendering React code splitting using dynamic import() Windows or list virtualization in React React lazy loading of images</p>
                </div>
            </div>
            <div className='blog-container container my-5 shadow-lg border rounded'>
                <div className='blog-container-image'>
                    <img src={second} alt="" />
                </div>
                <div>
                    <h2 className='ms-3 mt-2'>What are the different ways to manage a state in a React application?</h2>
                    <p className='ms-3 mt-2'>Components in React have a built-in state object. The state is just a fancy term for a JavaScript data structure where you store assets that persist between component renderings. When a user changes states by interacting with your application, the UI may look completely different afterwards, as it is represented by the new state, rather than the old state. We need to properly manage four types of state in your React apps: Local State Local state is usually managed by using the useState hook in React. Global State Global state is data spread across multiple components. Server state is a simple concept, but it can be hard to maintain alongside all of our local and global UI states. URL state is often overlooked, but it is an important category of state. Many major parts of our application rely on URL state.</p>
                </div>
            </div>
            <div className='blog-container container my-5 shadow-lg border rounded py-3'>
                <div className='blog-container-image'>
                    <img src={third} alt="" />
                </div>
                <div>
                    <h2 className='ms-3 mt-2'>How does prototypical inheritance work?</h2>
                    <p className='ms-3 mt-2'>Every object has an internal and hidden property known as a prototype. Javascript's prototypal inheritance feature adds methods and properties to objects. An object can inherit the properties and methods of another object using this method. For getting and setting the prototype of an object, we use Object.getPrototypeOf and Object.setPrototype.</p>
                </div>
            </div>
            <div className='blog-container container my-5 shadow-lg border rounded'>
                <div className='blog-container-image'>
                    <img src={fourth} alt="" />
                </div>
                <div>
                    <h2 className='ms-3 mt-2'>What is a unit test? Why should write unit tests?</h2>
                    <p className='ms-3 mt-2'>What is a unit test? unit testing is a method of testing the smallest pieces of code, typically individual functions, in isolation. These small pieces of code are called units. A unit can be a line of code, a class, or a method. Why should write unit tests? Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money and helps developers write better code, more efficiently.</p>
                </div>
            </div>
            <div className='blog-container container my-5 shadow-lg border rounded'>
                <div className='blog-container-image'>
                    <img src={fourth} alt="" />
                </div>
                <div>
                    <h2 className='ms-3 mt-2'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p className='ms-3 mt-2'>We can use find, to get the specific name product. As example, const products = [x,y,z]; Here ,x,y,z are object where every object of the array contains a name. We can create a function to find product by its name. if (product.name==='searched name') matched, then this function will return the product.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;