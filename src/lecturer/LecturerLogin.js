import React from 'react'
import mainLogo from '../icons/gazi_university_logo.png';

function LecturerLogin() {
  return (
    <div className='font-roboto'>
      <div>
       <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-24 w-auto" src={mainLogo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login your account</h2>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label for="text" className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  className="p-1 border-2 border-opacity-70 w-full rounded-md appearance-none"
                />
              </div>

            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700 ">Password</label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" required className="p-2 border-2 border-opacity-70 w-full rounded-md" />
              </div>
            </div>


            <div className="flex items-center">
              <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
              <label for="terms-and-privacy" className="ml-2 block text-sm text-gray-900"
              >I agree to the
                <a href="#" className="text-indigo-600 hover:text-indigo-500"> Terms </a>
                and
                <a href="#" className="text-indigo-600 hover:text-indigo-500"> Privacy Policy</a>.
              </label>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-dark-blue  shadow-sm text-white hover:bg-light-blue hover:text-dark-blue ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default LecturerLogin