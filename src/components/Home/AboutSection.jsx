import React from 'react';

const AboutSection = () => {
    return (
         <section className="w-11/12 mx-auto py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Freelance Market</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            <span className="font-semibold">Freelance Market</span> is a modern
            online platform that connects talented freelancers with clients
            looking for professional services. Whether you’re a developer,
            designer, marketer, or content creator — this is the place where
            opportunities meet skills.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">🚀</span>
              <p className="text-gray-700">
                <span className="font-medium">Post & Find Jobs Easily</span> — A
                simple interface to post jobs or find work in just a few clicks.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">💼</span>
              <p className="text-gray-700">
                <span className="font-medium">Connect with Verified Talent</span>{" "}
                — We help clients and freelancers build trusted connections.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">💰</span>
              <p className="text-gray-700">
                <span className="font-medium">Secure Payments</span> — Safe and
                reliable payment methods ensure a smooth experience for
                everyone.
              </p>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://c8.alamy.com/comp/2B962BG/home-office-concept-woman-working-from-home-student-or-freelancer-cute-vector-illustration-in-flat-style-2B962BG.jpg"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
    );
};

export default AboutSection;