import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your backend to initiate the password reset process
    setIsSubmitted(true)
  }

  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <a href='/'>
        <div>
          <img src="https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85" alt="Xiaomi Logo" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        </a>
        {!isSubmitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Send reset link
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 text-center">
            <p className="text-green-600 mb-4">
              If an account exists for {email}, you will receive a password reset link shortly.
            </p>
            <Link to="/auth" className="text-orange-600 hover:text-orange-500">
              Return to login
            </Link>
          </div>
        )}
        <div className="text-center">
          <Link to="/auth" className="font-medium text-orange-600 hover:text-orange-500">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}