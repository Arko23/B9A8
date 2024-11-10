import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { useLoaderData } from "react-router-dom";


const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesRead = () => {
  const info = useLoaderData();
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
   
  return (
    <section className="ml-[40px] mt-20 bg-[#13131308] w-[1370px]">
      {/* <h2>Books and Total Pages</h2>  */}
      <BarChart
        width={1350}
        height={450}
        data={info}
        margin={{ top: 20, right: 1, left: 1, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
          {info.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </section>
  );
};

export default PagesRead;
