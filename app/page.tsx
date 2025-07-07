import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = false;
  const name = "Marc";

  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">NextJS Training</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name}></ButtonLogin>
          </div>
        </div>
      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">Collect customer feedback to build better products.</h1>
        <div className="opacity-90 mb-10">Create a feedback  boards in minute, prioritize features, and build a products your customer will loves</div>
      </section>
      <section className="bg-base-200">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
          <h1 className="text-3xl font-extrabold mb-12 text-center">A pricing that adapt your need</h1>
        
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">
                $19
              </div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-green-600 size-4">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>

                Collect customer feedback
              </li>
              <li className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-green-600 size-4">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>

                Unlimited boards
              </li>
              <li className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-green-600 size-4">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>

                Unlimited boards
              </li>
              <li className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-green-600 size-4">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>

                24/7 support
              </li>
            </ul>
            <div className="text-center">
              <ButtonLogin isLoggedIn={isLoggedIn} name={name}></ButtonLogin>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
