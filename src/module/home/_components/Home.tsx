import { useState } from "react";
import Navbar from "../../../components/Navbar";
import type { ResourceType } from "../types/ResourceType";

const Home = () => {
  const [resource, setResource] = useState<ResourceType>();
  return (
    <>
      <Navbar />
      <div className="mx-5 rounded-lg">
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div key={resource?._id} className="group relative">
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{resource?.title}</h3>
                    <h3 className="text-sm text-"></h3>

                    <div className="flex flex-row gap-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
