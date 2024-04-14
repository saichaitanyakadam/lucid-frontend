import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DataTable = ({ tableData, handleModal, handleDeleteHostedZone }) => {
  return (
    <div className="relative overflow-x-auto w-full lg:w-[50%] flex flex-col gap-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:text-gray-400">
          <tr className="border-b border-gray-300">
            <th scope="col" className="px-6 py-3 rounded-s-lg">
              Name
            </th>
            <th scope="col" className="px-6 py-3 rounded-e-lg">
              Resource Count
            </th>
            <th scope="col" className="px-6 py-3 rounded-e-lg">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr className="font-semibold text-gray-900 " key={index}>
              <th scope="row" className="px-6 py-3 text-base">
                <Link
                  to={`/dns-records/${item.Id.split("/")[2]}`}
                  className="w-full underline"
                >
                  {item.Name.slice(0, -1)}
                </Link>
              </th>
              <td className="px-6 py-3">{item.ResourceRecordSetCount}</td>
              <td className="px-6 py-3">
                {
                  <MdDeleteOutline
                    onClick={() => {
                      handleDeleteHostedZone(item.Id.split("/")[2]);
                    }}
                    className="text-red-400 cursor-pointer"
                    size={20}
                  />
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-purple-200 px-4 py-1 rounded self-end font-semibold"
        type="button"
        onClick={() => {
          handleModal();
        }}
      >
        Add HostedZone
      </button>
    </div>
  );
};

export default DataTable;
