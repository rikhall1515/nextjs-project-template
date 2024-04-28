import { FaChartLine, FaTable } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

import ItemWrapper from "./itemWrapper";

export default function Items() {
  return (
    <>
      <ul className="relative mb-24 box-border w-full">
        <ItemWrapper name="overview" alert={false}>
          <div className="w-6">
            <MdDashboard />
          </div>
        </ItemWrapper>
        <ItemWrapper name="items" alert={false}>
          <div className="w-6">
            <FaTable />
          </div>
        </ItemWrapper>
        <ItemWrapper name="analytics" alert={false}>
          <div className="w-6">
            <FaChartLine />
          </div>
        </ItemWrapper>
      </ul>
    </>
  );
}
