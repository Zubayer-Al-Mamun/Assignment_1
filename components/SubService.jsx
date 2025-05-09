import ListCheckIcon from "../ComponentsSVG/ListCheckIcon";
export default function SubService({ data, orderChange }) {
  let listItem = data.list.map((item, index) => {
    return (
      <li key={index} className="flex space-x-3">
        <ListCheckIcon />
        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
          {item}
        </span>
      </li>
    );
  });

  if (orderChange) {

    return (
      <>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="./assets/features/feature-1.png"
            alt="dashboard feature image"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h2>
            <p className="mb-8 font-light lg:text-xl">{data.description}</p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {listItem}
            </ul>

            <p className="mb-8 font-light lg:text-xl">{data.endLine}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h2>
            <p className="mb-8 font-light lg:text-xl">{data.description}</p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {listItem}
            </ul>

            <p className="mb-8 font-light lg:text-xl">{data.endLine}</p>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="./assets/features/feature-1.png"
            alt="dashboard feature image"
          />
        </div>
      </>
    );
  }
}
