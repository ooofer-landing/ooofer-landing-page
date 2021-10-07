import { useForm, ValidationError } from "@formspree/react";

export default function SignUp() {
  const [state, handleSubmit] = useForm("xzbywypj");

  if (state.succeeded) {
    return (
      <p className="text-base font-medium text-white">Thanks for joining!</p>
    );
  }

  return (
    <div>
      <p className="text-base font-medium text-white">
        Sign up to get notified when it’s ready.
      </p>
      <form onSubmit={handleSubmit} className="mt-3 sm:flex">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoCorrect="off"
          autoCapitalize="none"
          className="block w-80 py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
          placeholder="Enter your email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
        >
          Notify me
        </button>
      </form>
      <p className="mt-3 text-sm text-white opacity-70">
        We care about the protection of your data.
      </p>
    </div>
  );
}
