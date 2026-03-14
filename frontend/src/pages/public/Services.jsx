import React from "react";

export default function Services() {
  return (
    <section className="bg-gray-50 py-6 px-6 lg:px-24">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How We Help Communities
        </h2>
        <p className="text-gray-500 italic text-sm">
          This platform focuses on providing essential emergency services
          during disasters and difficult situations. From medical assistance
          to rescue operations, we work to ensure safety, relief, and support
          for affected communities.
        </p>
      </div>


      {/* SERVICE 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/src/assets/FirstAid.webp"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>

       <div className="lg:w-1/2">
  <h3 className="text-xl font-semibold text-gray-800">
    Medical Kit Support
  </h3>

  <span className="block w-46 border-b-4 border-green-400 mt-2 mb-4"></span>

          <p className="text-gray-600 leading-relaxed">
            Our medical kit support program ensures that individuals affected by
            emergencies receive immediate access to basic healthcare supplies.
            These kits contain essential medicines, bandages, disinfectants,
            and first-aid tools that are crucial during the first moments after
            an accident or disaster. By distributing these kits quickly to
            communities, volunteers, and rescue teams, we help prevent further
            health complications and support faster recovery. This initiative
            plays an important role in protecting lives when professional
            medical services may not be immediately available.
          </p>
        </div>

      </div>


      {/* SERVICE 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-12">

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/src/assets/Traveller-Ambulance-3350WB-B-Type-mob.webp"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Ambulance Service
          </h3>

            <span className="block w-42 border-b-4 border-red-400 mt-2 mb-4"></span>

          <p className="text-gray-600 leading-relaxed">
            Our ambulance service is designed to provide rapid transportation
            for injured or critically ill individuals during emergencies. With
            trained medical staff and properly equipped vehicles, we ensure
            that patients receive immediate care while being safely transported
            to nearby hospitals or medical facilities. Fast response time is
            essential in saving lives, especially during accidents or natural
            disasters. Our team works around the clock to ensure that help
            reaches people as quickly as possible when they need it most.
          </p>
        </div>

      </div>


      {/* SERVICE 3 */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/src/assets/Rescue.jpeg"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Rescue Teams
          </h3>
            <span className="block w-32 border-b-4 border-cyan-400 mt-2 mb-4"></span>

          <p className="text-gray-600 leading-relaxed">
            Our rescue teams are trained professionals and volunteers who are
            prepared to respond quickly during disasters and crisis situations.
            They specialize in search-and-rescue operations, evacuation
            assistance, and providing immediate help to people trapped or
            injured during emergencies. Equipped with proper tools and
            training, the teams work tirelessly to ensure the safety of
            communities. Their dedication and courage help save lives and
            provide hope to families during some of the most difficult moments.
          </p>
        </div>

      </div>


      {/* SERVICE 4 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1593113630400-ea4288922497"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Food and Clothes Distribution
          </h3>
            <span className="block w-68 border-b-4 border-yellow-400 mt-2 mb-4"></span>

          <p className="text-gray-600 leading-relaxed">
            During disasters and humanitarian crises, many families lose access
            to basic necessities such as food and clothing. Our distribution
            program focuses on delivering essential supplies to affected
            communities to ensure that people can meet their daily needs.
            Volunteers work closely with local organizations to distribute food
            packages, clean water, and clothing to those who need it most.
            Through this effort, we aim to restore dignity, provide relief,
            and support families as they begin rebuilding their lives.
          </p>
        </div>

      </div>

    </section>
  );
}