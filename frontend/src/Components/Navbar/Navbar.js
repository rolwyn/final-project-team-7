import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navbar.scss';
import EventCreation from '../EventCreation/EventCreation.js'
import { Transition } from "@headlessui/react";
import { Disclosure, Menu } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'




const Navbar = ({ user, setUser, isSignup, setIsSignup }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const logout = () => {
        dispatch({ type: "LOGOUT" })
        navigate('/')
    }
    //need to add logic for create
    const addEvent = () => {
        console.log('add event is called');
        dispatch({ type: "CREATE" })
        navigate('/')
    }

    const [show, setShow] = useState(false); //default
    const handleShow = () => setShow(true); //set true

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('userProfile')))
    }, [location])


    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'My Events', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
        { name: 'Login', href: '#', current: false },
        // { name: 'Reports', href: '#', current: false },
      ]
      const userNavigation = [
        { name: 'Your Profile', href: '#' },
        // { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
    function Nav() {
        const [isOpne, setIsOpen] = useState(false);
        return (
            <>
            {/*
              This example requires updating your template:
      
              ```
              <html class="h-full bg-gray-100">
              <body class="h-full">
              ```
            */}
            <div className="min-h-full">
              <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                  <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                              alt="Workflow"
                            />
                          </div>
                          <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-900 text-white'
                                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium'
                                  )}
                                  aria-current={item.current ? 'page' : undefined}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-4 flex items-center md:ml-6">
                            <button
                              type="button"
                              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                              <span className="sr-only">View notifications</span>
                              <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
      
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                              <div>
                                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                  <span className="sr-only">Open user menu</span>
                                  {/* <img className="h-8 w-8 rounded-full" src={} alt="" /> */}
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                      {({ active }) => (
                                        <a
                                          href={item.href}
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          {item.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
      
                          {/* Mobile menu button */}
                          <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>
      
                    <Disclosure.Panel className="md:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                      <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                          <div className="flex-shrink-0">
                            {/* <img className="h-10 w-10 rounded-full" src={} alt="" /> */}
                          </div>
                          <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">{user?.profileObj?.name}</div>
                            {/* <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div> */}
                          </div>
                          <button
                            type="button"
                            className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          {userNavigation.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
      
            </div>
          </>
          
            // <div>
            //     <nav className="bg-gray-800">
            //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            //             <div className="flex items-center justify-between h-16">
            //                 <div className="flex items-center">
            //                     <div className="flex-shrink-0">
            //                         <img
            //                             className="h-8 w-8"
            //                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            //                             alt="Workflow"
            //                         />
            //                     </div>
            //                     <div className="hidden md:block">
            //                         <div className="ml-10 flex items-baseline space-x-4">
            //                             <a
            //                                 href="#"
            //                                 className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            //                             >
            //                                 Dashboard
            //                             </a>
    
            //                             <a
            //                                 href="#"
            //                                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            //                             >
            //                                 My Events
            //                             </a>
    
    
            //                             <a
            //                                 href="#"
            //                                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            //                             >
            //                                 Calendar
            //                             </a>
    
    
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="-mr-2 flex md:hidden">
            //                     <button
            //                         type="button"
            //                         className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            //                         aria-controls="mobile-menu"
            //                         aria-expanded="false"
            //                     >
            //                         <span className="sr-only">Open main menu</span>
    
            //                         <svg
            //                             className="block h-6 w-6"
            //                             xmlns="http://www.w3.org/2000/svg"
            //                             fill="none"
            //                             viewBox="0 0 24 24"
            //                             stroke="currentColor"
            //                             aria-hidden="true"
            //                         >
            //                             <path
            //                                 stroke-linecap="round"
            //                                 stroke-linejoin="round"
            //                                 stroke-width="2"
            //                                 d="M4 6h16M4 12h16M4 18h16"
            //                             />
            //                         </svg>
    
            //                         <svg
            //                             className="hidden h-6 w-6"
            //                             xmlns="http://www.w3.org/2000/svg"
            //                             fill="none"
            //                             viewBox="0 0 24 24"
            //                             stroke="currentColor"
            //                             aria-hidden="true"
            //                         >
            //                             <path
            //                                 stroke-linecap="round"
            //                                 stroke-linejoin="round"
            //                                 stroke-width="2"
            //                                 d="M6 18L18 6M6 6l12 12"
            //                             />
            //                         </svg>
            //                     </button>
            //                 </div>
            //             </div>
            //         </div>
    
            //         <div className="md:hidden" id="mobile-menu">
            //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            //                 <a
            //                     href="#"
            //                     className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            //                 >
            //                     Dashboard
            //                 </a>
    
            //                 <a
            //                     href="#"
            //                     className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            //                 >
            //                     My Events
            //                 </a>
            //                 \
    
            //                 <a
            //                     href="#"
            //                     className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            //                 >
            //                     Calendar
            //                 </a>
    
            //             </div>
            //         </div>
            //     </nav>
    
            //     {/* <header className="bg-white shadow">
            //   <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            //     <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            //   </div>
            // </header> */}
            //     {/* <main>
            //   <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            //     {/* <!-- Replace with your content --> */}
            //     {/* <div className="px-4 py-6 sm:px-0">
            //       <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
    
    
            //     </div>
            //     {/* <!-- /End replace --> */}
            //     {/* </div>
            // </main> */}
    
            // </div>
        );
    }
    

    return (
        <Nav></Nav>
        // <nav>

        //     <button className='navbar-username'>
        //         <a href="/">
        //             Welcome, {user !== null ? user?.profileObj?.name : 'Guest'}
        //         </a>
        //     </button>
        //     {user?.profileObj === undefined ?
        //         <button className='loginbtn' onClick={() => setIsSignup(!isSignup)}>
        //             <a href="/auth">Login</a>
        //         </button> :
        //         <div>
        //             <button className='addbtn' onClick={addEvent, handleShow}>
        //                 <a href="/">Add</a>
        //             </button>

        //             <button className='loginbtn' onClick={logout}>
        //                 Logout
        //             </button>
        //         </div>

        //     }


        // </nav>


    )
}

export default Navbar
