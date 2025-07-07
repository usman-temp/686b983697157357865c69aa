export default function AboutUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Usman
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">
              We are dedicated to delivering exceptional solutions tailored to your needs. Founded by Usman, our team combines innovation with expertise to create meaningful impacts.
            </p>
            <p className="text-lg">
              Our commitment to excellence drives every project, ensuring we meet the highest standards of quality and user experience.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Team illustration or photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}