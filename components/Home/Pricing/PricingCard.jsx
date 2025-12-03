import { FaCheck } from "react-icons/fa"

const PricingCard = ({price, plan}) => {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg">
        <p className="mt-8 font-semibold text-xl text-blue-600 text-center">
            {plan} plan
        </p>
        <div className="font-medium text-3xl mt-4 text-center">
            $<span className="font-bold text-5xl">{price}</span>/mo
        </div>
        <p className="mt-2 text-gray-600 text-center">Per user</p>
        <div className="mt-10">
          <div className="text-center mb-4 flex items-center space-x-3">
            <div className="text-center h-8 w-8 bg-gray-300 rounded-full flex items-center flex-col justify-center">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Unlimited Connection
            </p>
          </div>
          <div className="text-center mb-4 flex items-center space-x-3">
            <div className="text-center h-8 w-8 bg-gray-300 rounded-full flex items-center flex-col justify-center">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Basic Actions & Triggers
            </p>
          </div>
          <div className="text-center mb-4 flex items-center space-x-3">
            <div className="text-center h-8 w-8 bg-gray-300 rounded-full flex items-center flex-col justify-center">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Draft Payments
            </p>
          </div>
          <div className="text-center mb-4 flex items-center space-x-3">
            <div className="text-center h-8 w-8 bg-gray-300 rounded-full flex items-center flex-col justify-center">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Unlimited Flows and Support
            </p>
          </div>
          <div className="text-center mb-4 flex items-center space-x-3">
            <div className="text-center h-8 w-8 bg-gray-300 rounded-full flex items-center flex-col justify-center">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Lifetime Updates
            </p>
          </div>
          <div className="mt-8">
            <button className="block w-full p-4 text-base md:text-lg text-white font-bold bg-blue-900 hover:bg-blue-950 transition-all duration-300">
              Start 14 days free trial
            </button>
          </div>
        </div>
    </div>
  ) 
}

export default PricingCard