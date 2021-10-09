import { useForm, ValidationError } from '@formspree/react';

export default function SignUp() {
  const [state, handleSubmit] = useForm('xzbywypj');

  if (state.succeeded) {
    return <p className="text-base font-medium text-white">Thanks for joining!</p>;
  }

  return (
    <div className="w-full px-5 sm:w-96">
      <p className="text-sm text-white">Sign up to get OOOFER updates</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              id="email"
              type="email"
              name="email"
              autoCorrect="off"
              autoCapitalize="none"
              className="focus:ring-black focus:border-black block w-full rounded-none rounded-l-md sm:text-base border-black"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-700 text-sm font-medium rounded-r-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Submitting' : <span>Notify me</span>}
          </button>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </form>
      <p className="mt-3 text-xs text-white opacity-70">
        We care about the protection of your data. Your email address will only be used to
        share updates about our service.
      </p>
    </div>
  );
}
