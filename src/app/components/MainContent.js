import LineChart from "./graphs/LineChart";
import PieChart from "./graphs/PieChart";
import BarChart from  "./graphs/Barchart"
import DoughnutChart from "./graphs/DoughnutChart";

const MainContent = () => {
  return (
    <>
    <h1 className="font-bold text-[30px] pl-4 pt-4">Marketing Dashboard</h1>
    <div className="flex-1 p-4 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
      <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
       <BarChart/>
      </div>
           </div>
      
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
        <LineChart/>
      </div>
</div>
      
<div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
        <PieChart/>
      </div>
           </div>
      
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
       <DoughnutChart/>
      </div>
</div>
<div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
       <BarChart/>
      </div>
</div>
      
     
      
      </div>
    </div>
    </>
  );
};

export default MainContent;











