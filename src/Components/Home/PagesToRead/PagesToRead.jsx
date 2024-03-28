import { useState, useEffect } from "react";
import { getStoredReadList } from "../../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import {Cell,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const PagesToRead = () => {
  const books = useLoaderData();
  const [bookLists, setBookList] = useState([]);
  useEffect(() => {
    const storedReadIds = getStoredReadList();
    if (books.length > 0) {
      const listedBook = books.filter((book) =>
        storedReadIds.includes(book.id)
      );
      setBookList(listedBook);
    }
  }, [books]);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const dataList = bookLists.map((book) => {
    const obj = {
      name: book.bookName,
      pages: book.totalPages,
    };
    return obj;
  });
  console.log(dataList);
  console.log(bookLists.length);
  return (
    <div>
      <div className="flex justify-center mt-10">
      <BarChart
        width={1100}
        height={400}
        data={dataList}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {dataList.map((name, pages ) => (
            <Cell key={`cell-${name}`} fill={colors[pages % 20]} />
          ))}
        </Bar>
      </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
