import { Mountain, Sailboat, Waves } from "lucide-react"


export default function ServicesOfferedSection() {
  return (
    <div className="wrapper flex flex-col gap-8 py-10">
      <h1 className="text-4xl text-center font-semibold pb-5">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center flex justify-center items-center flex-col">
          <div className="bg-gray-300 w-15 h-15 rounded-full mb-2 flex justify-center items-center">
            <Mountain className="w-6 h-6 text-gray-800" />
          </div>
          <h2 className="font-bold">Fly Fishing in the Rocky Mountains</h2>
          <p>You'll get a season guide and lots <br/> of dehydrated ravioli.</p>
        </div>
        <div className="text-center flex justify-center items-center flex-col">
          <div className="bg-gray-300 w-15 h-15 rounded-full mb-2 flex justify-center items-center">
            <Sailboat className="w-6 h-6 text-gray-800" />
          </div>
          <h2 className="font-bold">Level 5 Rapids!</h2>
          <p>Put your helmet and grab your wetsuit.<br/>It's time to conquer Siberia</p>
        </div>
        <div className="text-center flex justify-center items-center flex-col">
          <div className="bg-gray-300 w-15 h-15 rounded-full mb-2 flex justify-center items-center">
            <Waves className="w-6 h-6 text-gray-800" />
          </div>
          <h2 className="font-bold">Puget   Sounds Kayaking</h2>
          <p>One week of Ocean Kayaking in the <br/> Puget Sound</p>
        </div>
      </div>
    </div>
  )
}
