
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, } from 'recharts';

const Statistic = () => {

    const [getDonatedData, setGetDonatedData] = useState([]);
    const [getTotalData, setGetTotalData] = useState([])
    
    
    useEffect(()=>{
        fetch('/card.json')
        .then(res => res.json())
        .then(data => setGetTotalData(data));
        
        const donations = JSON.parse(localStorage.getItem('donation'));
        setGetDonatedData(donations)
    },[]);
    
    const myDonation = getDonatedData.length;
    const totalCard = getTotalData.length;
    // console.log(myDonation);
    // console.log(totalCard);

    const data = [
        { name: 'Total donation', value: totalCard },
        { name: 'My donation', value: myDonation }
       
      ];
      
      const COLORS = ['#241468', '#EA1179'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <div>
            <div className='grid justify-center items-center'>
            <PieChart width={400} height={300}>
                <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel}
                    outerRadius={120} fill="#8884d8" dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='font-bold'>My donation:</h1>
                    <div className='bg-[#EA1179] w-20 h-3 rounded-lg'></div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='font-bold'>Total donation:</h1>
                    <div className='bg-[#241468] w-20 h-3 rounded-lg'></div>
                </div>
            </div>
            </div>
        </div>
    );
 };
export default Statistic;