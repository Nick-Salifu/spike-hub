import PricingCard from "./PricingCard"

const Pricing = () => {
  return (
    <div className="py-16 bg-[#edfbff]">
        <h2 className="mt-6 text-2xl md:text-3xl text-center capitalize font-bold">
            Meet exciting pricing plans
        </h2>
        <div className="w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <PricingCard price={15} plan="Starter" />  
            </div>
            <div>
                <PricingCard price={45} plan="Business" />  
            </div>
        </div>
    </div>
  )
}

export default Pricing