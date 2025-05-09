import PriceCard from "../components/PriceCard";

export default function Pricing() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Landwind we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <PriceCard
              price="29"
              teamSize="1"
              premiumSupport="6"
              freeUpdate="6"
            />
            <PriceCard
              price="99"
              teamSize="10"
              premiumSupport="24"
              freeUpdate="24"
            />
            <PriceCard
              price="499"
              teamSize="100"
              premiumSupport="36"
              freeUpdate="36"
            />
          </div>
        </div>
      </section>
    </>
  );
}
