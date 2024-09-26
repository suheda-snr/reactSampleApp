import { useState, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";

function App() {

    return (
        <div>
            <Header />
            <div className="max-w-5xl mx-auto">
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="p-4 mb-20">
            <nav className="space-x-4 text-2xl flex justify-center items-center shadow">
                <Link className="px-8 py-5 block" to="/">Home</Link>
                <Link className="px-8 py-5 block" to="/about">About</Link>
                <Link className="px-8 py-5 block" to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

function Home() {
    return (
        <div className="space-y-16 text-center">
            <h2 className="text-2xl">Welcome to My Website!</h2>
            <p className="text-lg">Hi there! This is a simple React website created to practice cloud hosting as part of my Cloud Systems class. It's hosted using Cloudflare and serves as a hands-on exercise in web development and cloud hosting.</p>
            <div className="flex gap-4 flex-wrap items-start">
                <img src="http://placekitten.com/200/300" alt="" />
                <img src="http://placekitten.com/400/400" alt="" />
                <img src="http://placekitten.com/300/300" alt="" />
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="flex justify-center flex-col items-center">
            <img src="http://placekitten.com/200/200" alt="" className="rounded-full mb-20" />
            <h2 className="text-2xl mb-10">About This Site</h2>
            <p className="text-lg">This sample React website was built as part of my Cloud Systems class assignment. The goal was to get familiar with deploying web applications to the cloud, specifically using Cloudflare for hosting. This exercise helped me understand the deployment pipeline and cloud infrastructure better.</p>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h2 className="text-2xl mb-10">Contact me</h2>
            <p className="text-lg">Email: <a href="mailto:someone@somewhere.gone"
                className="underline text-blue-700 leading-relaxed">someone@somewhere.gone</a>
            </p>
        </div>
    )
}

export default App
