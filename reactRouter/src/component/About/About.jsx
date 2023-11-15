import React from "react";


export default function About() {
    return (
        <div className="py-16 bg-gray-900 text-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        GitHub is a collaborative platform that has revolutionized the world of software development. Founded in 2008, GitHub provides a web-based platform for version control using Git, making it easier for developers to collaborate on projects, track changes, and manage code repositories. Offering a powerful set of tools, GitHub has become the go-to platform for hosting open-source projects and facilitating seamless collaboration among developers globally. With features such as pull requests, issues, and a vibrant ecosystem of integrations, GitHub has fostered a community-driven approach to software development
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}