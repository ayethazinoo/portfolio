import React from 'react'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <main class="grid min-h-full place-items-center bg-gray-500 mt-2 px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-400">404</p>
          <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Page not found
          </h1>
          <p class="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div
            class="mt-10 flex items-center justify-center gap-x-6 text-white"
            onClick={() => navigate("/")}
          >
            Go back home
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFoundPage
