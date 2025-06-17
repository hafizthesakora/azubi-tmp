import React from 'react';
import products from '../data.json';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section - Black background like in the design */}
      <div className="bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <p className="text-[#D87D4A] text-sm font-normal uppercase tracking-[10px] mb-6 opacity-50">
                New Product
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight uppercase">
                XX99 Mark II
                <br />
                Headphones
              </h1>
              <p className="text-[#FFFFFF] opacity-75 text-[15px] leading-[25px] mb-10 max-w-[349px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link
                to="/product/1"
                className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] font-bold py-4 px-8 uppercase tracking-[1px] transition-colors duration-200"
              >
                See Product
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="/assets/home/desktop/image-hero.jpg"
                alt="XX99 Mark II Headphones"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Headphones */}
          <div className="bg-white rounded-lg p-8 text-center group hover:shadow-md transition-shadow duration-200">
            <div className="mb-6">
              <img
                src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
                alt="Headphones"
                className="mx-auto w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-4">
              Headphones
            </h3>
            <Link
              to="/category/headphones"
              className="inline-flex items-center text-[13px] font-bold text-black/50 hover:text-[#D87D4A] uppercase tracking-wide transition-colors duration-200"
            >
              Shop
              <svg
                className="ml-2 w-2 h-2"
                fill="currentColor"
                viewBox="0 0 8 12"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </Link>
          </div>

          {/* Speakers */}
          <div className="bg-white rounded-lg p-8 text-center group hover:shadow-md transition-shadow duration-200">
            <div className="mb-6">
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="Speakers"
                className="mx-auto w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-4">
              Speakers
            </h3>
            <Link
              to="/category/speakers"
              className="inline-flex items-center text-[13px] font-bold text-black/50 hover:text-[#D87D4A] uppercase tracking-wide transition-colors duration-200"
            >
              Shop
              <svg
                className="ml-2 w-2 h-2"
                fill="currentColor"
                viewBox="0 0 8 12"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </Link>
          </div>

          {/* Earphones */}
          <div className="bg-white rounded-lg p-8 text-center group hover:shadow-md transition-shadow duration-200">
            <div className="mb-6">
              <img
                src="/assets/home/desktop/image-earphones-yx1.jpg"
                alt="Earphones"
                className="mx-auto w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-4">
              Earphones
            </h3>
            <Link
              to="/category/earphones"
              className="inline-flex items-center text-[13px] font-bold text-black/50 hover:text-[#D87D4A] uppercase tracking-wide transition-colors duration-200"
            >
              Shop
              <svg
                className="ml-2 w-2 h-2"
                fill="currentColor"
                viewBox="0 0 8 12"
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* ZX9 Speaker - Orange Section */}
        <div className="bg-[#D87D4A] rounded-lg p-8 lg:p-16 mb-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                className="mx-auto lg:mx-0 max-w-[300px] h-auto"
              />
            </div>
            <div className="text-center lg:text-left text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 uppercase leading-tight">
                ZX9
                <br />
                Speaker
              </h2>
              <p className="text-white/75 text-[15px] leading-[25px] mb-10 max-w-[349px] mx-auto lg:mx-0">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to="/product/6"
                className="inline-block bg-black hover:bg-[#4C4C4C] text-white text-[13px] font-bold py-4 px-8 uppercase tracking-[1px] transition-colors duration-200"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>

        {/* ZX7 Speaker - Gray Section */}
        <div className="bg-[#F1F1F1] rounded-lg p-8 lg:p-16 mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8 uppercase">
                ZX7 Speaker
              </h2>
              <Link
                to="/product/5"
                className="inline-block border-2 border-black hover:bg-black hover:text-white text-black text-[13px] font-bold py-4 px-8 uppercase tracking-[1px] transition-colors duration-200"
              >
                See Product
              </Link>
            </div>
            <div className="text-center">
              <img
                src="/assets/home/desktop/image-speaker-zx7.jpg"
                alt="ZX7 Speaker"
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* YX1 Earphones - Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#F1F1F1] rounded-lg p-8 flex items-center justify-center">
            <img
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="max-w-full h-auto"
            />
          </div>
          <div className="bg-[#F1F1F1] rounded-lg p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8 uppercase">
              YX1 Earphones
            </h2>
            <Link
              to="/product/4"
              className="inline-block border-2 border-black hover:bg-black hover:text-white text-black text-[13px] font-bold py-4 px-8 uppercase tracking-[1px] transition-colors duration-200 w-fit"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <img
              src="/assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
              alt="Person with headphones"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 uppercase leading-tight">
              Bringing you the
              <br />
              <span className="text-[#D87D4A]">best</span> audio gear
            </h2>
            <p className="text-black/50 text-[15px] leading-[25px] mb-6">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products.
            </p>
            <p className="text-black/50 text-[15px] leading-[25px]">
              Stop by our store to meet some of the fantastic people who make
              Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Orange accent line */}
          <div className="h-1 bg-[#D87D4A] w-24 mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
            {/* Left section */}
            <div>
              <Link
                to="/"
                className="text-2xl font-bold tracking-wide lowercase mb-8 block"
              >
                audiophile
              </Link>
              <p className="text-white/50 text-[15px] leading-[25px] max-w-[540px]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we're open 7 days a week.
              </p>
            </div>

            {/* Right section - Navigation */}
            <div className="flex flex-col lg:items-end">
              <nav className="mb-8 lg:mb-0">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                  <Link
                    to="/"
                    className="text-white hover:text-[#D87D4A] text-[13px] font-bold uppercase tracking-[2px] transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/category/headphones"
                    className="text-white hover:text-[#D87D4A] text-[13px] font-bold uppercase tracking-[2px] transition-colors duration-200"
                  >
                    Headphones
                  </Link>
                  <Link
                    to="/category/speakers"
                    className="text-white hover:text-[#D87D4A] text-[13px] font-bold uppercase tracking-[2px] transition-colors duration-200"
                  >
                    Speakers
                  </Link>
                  <Link
                    to="/category/earphones"
                    className="text-white hover:text-[#D87D4A] text-[13px] font-bold uppercase tracking-[2px] transition-colors duration-200"
                  >
                    Earphones
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 border-t border-white/10">
            <p className="text-white/50 text-[15px] mb-8 lg:mb-0">
              Copyright 2021. All Rights Reserved
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#D87D4A] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
