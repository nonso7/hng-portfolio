import React from "react";

export default function Contact() {
  return (
    <section className="mx-auto container px-2 py-14 md:px-12 md:py-16">
      <div className="px-4 md:px-12 lg:px-24">
        <div className="space-y-2">
          <h1 className="text-3xl leading-10 font-bold">
            Contact Me
          </h1>
          <h3 className="text-lg text-gray-600">
            Hi there, contact me to ask me about anything you have in mind.
          </h3>
        </div>
        <form className="mt-4 md:mt-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
              placeholder="yourname@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
              cols="30"
              rows="5"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
            ></textarea>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-600"
            >
              You agree to providing your data to <span className="font-semibold">Chinonso</span> who may contact you.
            </label>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              id="btn__submit"
              className="text-white inline-block w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
