import ListCheckIcon from "../ComponentsSVG/ListCheckIcon";

export default function listItem(listData) {
  let listItem = [];
  listData.map((item, index) => {
    listItem.push(
      <li key={index} className="flex space-x-3">
        <ListCheckIcon />
        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
          {item}
        </span>
      </li>
    );
  });
  return listItem;
}
