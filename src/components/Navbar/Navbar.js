import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState({
    home: true,
    products: false,
    checkout: false,
    about: false,
  });
  console.log('active object', active);
  return (
    <div>
      <nav class="bg-white shadow-lg">
        <div class="max-w-8xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                  <img
                    src="https://png.pngtree.com/template/20191017/ourlarge/pngtree-mono-line-e-letter-logo-vector-image_320363.jpg"
                    alt="Logo"
                    class="h-8 w-8 mr-2"
                  />
                  <span class="font-semibold text-gray-500 text-lg">ESOFI</span>
                </a>
              </div>
              <div class="hidden md:flex items-center space-x-1">
                <Link to="/">
                  <div
                    class={`py-4 px-2 ${
                      active.home
                        ? 'text-blue-400 border-blue-500  border-b-4'
                        : 'text-gray-500'
                    }    focus:border-blue-500 font-semibold`}
                    onClick={() => {
                      setActive({ home: true, products: false });
                    }}
                  >
                    Home
                  </div>
                </Link>
                <Link to="/product">
                  <div
                    class={`py-4 px-2 ${
                      active.products
                        ? 'text-blue-400 border-blue-500 border-b-4'
                        : 'text-gray-500'
                    }    focus:border-blue-500  font-semibold`}
                    onClick={() => {
                      setActive({
                        products: true,
                        home: false,
                        checkout: false,
                        about: false,
                      });
                    }}
                  >
                    Products
                  </div>
                </Link>
                <Link to="/checkout">
                  <div
                    class={`py-4 px-2 ${
                      active.checkout
                        ? 'text-blue-400 border-blue-500 border-b-4'
                        : 'text-gray-500'
                    }    focus:border-blue-500  font-semibold`}
                    onClick={() => {
                      setActive({
                        checkout: true,
                        home: false,
                        products: false,
                        about: false,
                      });
                    }}
                  >
                    Checkout
                  </div>
                </Link>
                <Link to="/about">
                  <div
                    class={`py-4 px-2 ${
                      active.about
                        ? 'text-blue-400 border-blue-500 border-b-4'
                        : 'text-gray-500'
                    }    focus:border-blue-500  font-semibold`}
                    onClick={() => {
                      setActive({
                        about: true,
                        home: false,
                        products: false,
                        checkout: false,
                      });
                    }}
                  >
                    About
                  </div>
                </Link>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-3 ">
              <a
                href=""
                class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Log In
              </a>
              <a
                href=""
                class="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
              >
                Sign Up
              </a>
            </div>
            <div class="md:hidden flex items-center">
              <button class="outline-none mobile-menu-button">
                <svg
                  class=" w-6 h-6 text-gray-500 hover:text-blue-400 "
                  x-show={true}
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden mobile-menu">
          <ul class="">
            <li class="active">
              <a
                href="index.html"
                class="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
			</script> */}
      </nav>
    </div>
  );
};

export default Navbar;
