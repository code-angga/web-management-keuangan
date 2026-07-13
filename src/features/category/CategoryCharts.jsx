import Chart from "react-apexcharts";
const CategoryCharts = ({ categories }) => {
  const options = {
    chart: {
      id: "category-charts",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories.map((item) => item.name),
    },
    dataLabels: {
      enabled: true,
    },
    title: {
      text: "Daftar Category",
      enable: true,
    },
  };

  const series = [
    {
      name: "Ccategory",
      data: categories.map(() => 1),
    },
  ];

  return (
    <div className="">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default CategoryCharts;
