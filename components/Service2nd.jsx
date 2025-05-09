import Service2ItemSmall from "./Service2ItemSmall";
import Service2Icon1 from "/ComponentsSVG/Service2Icon1";
import Service2Icon2 from "/ComponentsSVG/Service2Icon2";
import Service2Icon3 from "/ComponentsSVG/Service2Icon3";
import Service2Part1 from "/components/Service2Part1";

export default function Service2nd() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <Service2Part1 />

          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <Service2ItemSmall
              title="99.99% uptime"
              minDesc="For Landwind, with zero maintenance downtime"
              icon={<Service2Icon1 />}
            />

            <Service2ItemSmall
              title="600M+ Users"
              minDesc="Trusted by over 600 milion users around the world"
              icon={<Service2Icon2 />}
            />

            <Service2ItemSmall
              title="100+ countries"
              minDesc="Have used Landwind to create functional websites"
              icon={<Service2Icon3 />}
            />

            <Service2ItemSmall
              title="5+ Million"
              minDesc="Transactions per day"
              icon={<Service2Icon2 />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
