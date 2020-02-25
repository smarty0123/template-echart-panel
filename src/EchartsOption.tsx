import React from 'react';

import ReactEcharts from 'echarts-for-react';

const seriesData = (data: any) => {
  let listData: { value: any; name: string | undefined }[] = [];
  data.series.map((s: any) => {
    const sData = s.fields.find((i: any) => i.type === 'number')?.values.get(0);
    listData.push({ value: sData, name: s.name });
  });
  return listData;
};

const echartOption = (props: any) => {
  const { data, options } = props;
  const legendData = data.series.map((item: any) => item.name);
  const option = {
    title: {
      text: options.text,
      subtext: options.subtext,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: legendData,
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: seriesData(data),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return option;
};

const EchartsOption = (props: any) => {
  return <ReactEcharts option={echartOption(props)} />;
};

export default EchartsOption;
