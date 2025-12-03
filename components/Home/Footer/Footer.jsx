
const Footer = () => {
  return (
      <div className="bg-white py-10">
          <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div>
                    {/* Logo */}
                    <h1 className="text-xl md:text-2xl font-bold text-orange-500">Spike 
                        <span className="text-3xl text-green-600">Hub</span>
                    </h1>
                    {/* Descriptions */}
                    <p className="mt-4 text-sm font-medium w-80%] text-gray-600 leading-8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi harum officiis, unde molestiae ratione inventore illo rem!
                    </p>
                </div>
                
            </div>
          </div>
    </div>
  )
}

export default Footer