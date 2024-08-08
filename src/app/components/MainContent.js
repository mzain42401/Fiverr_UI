import EmailCompaign from "./graphs/EmailCompaign";
import SocialMediaChart from  "./graphs/SocialMediaChart"
import BudgetChart from "./graphs/BudgetChart";
import WebsiteChart from "./graphs/WebsiteChart";
import SEOChart from "./graphs/SEOChart";
import WebTrafficChart from "./graphs/WebTrafficChart";
import LeadChart from "./graphs/LeadChart";
import ConversationChart from "./graphs/ConversationChart";




const MainContent = () => {
  return (
    <>
    <h1 className="font-bold text-[30px] pl-4 pt-4">Marketing Dashboard</h1>
    <div className="flex-1 p-4 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
      <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className=" bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
       <SocialMediaChart/>
      </div>
           </div>
      
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
        <EmailCompaign/>
      </div>
</div> 
      
<div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
<WebsiteChart/>

      </div>
           </div>
      
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
  <SEOChart/>
      </div>
</div>
<div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
      <WebTrafficChart/>
      </div>
</div>
<div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
      <BudgetChart/>
      </div>
</div>
      
<div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
      <LeadChart/>
      </div>
</div>
<div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div  className="bg-[#2c2c2c] border-2 shadow-custom-dark border-[#3a3a3a] border-solid p-4 rounded ">
      <ConversationChart/>
      </div>
</div>

      </div>
    </div>
    </>
  );
};

export default MainContent;











