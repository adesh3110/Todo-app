export default function HomePage() {
  return (
    <div className='bg-gray-50'>
      <header className='bg-blue-600 text-white p-4 shadow-md'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold'>Todo App</h1>
        </div>
      </header>
      <main className='container mx-auto mt-10'>
        <section className='text-center'>
          <h2 className='text-4xl font-semibold mb-4'>
            Manage Your Tasks Efficiently
          </h2>
          <p className='text-lg text-gray-700 mb-6'>
            Our app helps you stay organized and focused.
          </p>
          <a
            href='#signup'
            className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500'
          >
            Get Started
          </a>
        </section>
        <section
          id='features'
          className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          <div className='p-6 bg-white shadow-md rounded'>
            <h3 className='text-xl font-semibold mb-2'>Feature 1</h3>
            <p className='text-gray-600'>Description of feature 1.</p>
          </div>
          <div className='p-6 bg-white shadow-md rounded'>
            <h3 className='text-xl font-semibold mb-2'>Feature 2</h3>
            <p className='text-gray-600'>Description of feature 2.</p>
          </div>
          <div className='p-6 bg-white shadow-md rounded'>
            <h3 className='text-xl font-semibold mb-2'>Feature 3</h3>
            <p className='text-gray-600'>Description of feature 3.</p>
          </div>
        </section>
        <section id='testimonials' class='mt-10'>
          <div class='container mx-auto'>
            <h2 class='text-3xl font-semibold text-center mb-8'>
              What Our Users Say
            </h2>
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div class='bg-white shadow-md rounded p-6'>
                <p class='text-lg mb-4'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus accumsan turpis sed urna laoreet."
                </p>
                <p class='text-sm font-semibold'>- John Doe</p>
              </div>
              <div class='bg-white shadow-md rounded p-6'>
                <p class='text-lg mb-4'>
                  "Integer consequat ultricies lorem sit amet facilisis. Fusce
                  sed urna libero. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas."
                </p>
                <p class='text-sm font-semibold'>- Jane Smith</p>
              </div>
              <div class='bg-white shadow-md rounded p-6'>
                <p class='text-lg mb-4'>
                  "Aenean bibendum vestibulum nunc, nec mattis magna fermentum
                  a. Morbi id luctus dui. Nulla facilisi."
                </p>
                <p class='text-sm font-semibold'>- David Johnson</p>
              </div>
              <div class='bg-white shadow-md rounded p-6'>
                <p class='text-lg mb-4'>
                  "Donec vitae justo vel odio fermentum finibus a nec risus.
                  Integer vel nulla ac turpis vestibulum egestas. Phasellus vel
                  tincidunt magna."
                </p>
                <p class='text-sm font-semibold'>- Emily Wilson</p>
              </div>
              <div class='bg-white shadow-md rounded p-6'>
                <p class='text-lg mb-4'>
                  "Praesent eget libero quis libero lacinia tempus. Duis in arcu
                  at sem commodo feugiat nec id ex."
                </p>
                <p class='text-sm font-semibold'>- Michael Brown</p>
              </div>
            </div>
          </div>
        </section>
        <section id='signup' className='mt-10 text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Sign Up Today</h2>
          <form className='max-w-md mx-auto'>
            <input
              type='email'
              className='w-full p-2 border border-gray-300 rounded mb-4'
              placeholder='Email Address'
            />
            <button
              type='submit'
              className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500'
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>
      <footer className='bg-gray-800 text-white p-4 mt-10'>
        <div className='container mx-auto text-center'>
          &copy; 2024 Todo App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
