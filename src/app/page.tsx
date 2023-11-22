export default function Home() {
  return (
    <>
      <div className="heroBg"></div>
      <div>
        <header className="flex flex-row justify-between pt-6 px-36 items-center">
          <h1 className="bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent text-4xl font-bold">
            fhub-client
          </h1>
          <div className="flex flex-row space-x-8 font-medium text-[#A2A3A3]">
            <span className="hover:text-white cursor-pointer">
              Documentation
            </span>
            <span className="hover:text-white cursor-pointer">About us</span>
          </div>
        </header>
        <main className="flex flex-col py-24 px-[30%] text-center items-center space-y-8">
          <h1 className="text-6xl text-[#f3f3f3]">
            <span className="bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent">
              Fhub-client
            </span>
            , lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            recusandae.
          </h1>
          <h2 className="text-lg px-20 text-[#949494]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            sunt architecto ab nulla quia laborum quas praesentium ipsum
            eligendi odio, commodi fugiat asperiores itaque dolorum, quod
            accusamus tempora ipsam id neque? Voluptatibus commodi perferendis
            odit.
          </h2>
          <div className="flex flex-row space-x-12">
            <a
              className="rounded-md border-2 border-blue-400 text-blue-400 font-semibold
              p-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer"
            >
              Sign in
            </a>
            <a
              className="rounded-md border-2 border-white text-white font-semibold p-2 
          hover:bg-white hover:text-black hover:cursor-pointer"
            >
              View on Github
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
