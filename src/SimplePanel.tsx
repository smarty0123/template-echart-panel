import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import ReactEcharts from 'echarts-for-react';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  
  getOption = () => {
    const {data, options} = this.props
    const legendData = data.series.map(item => item.name)
    
    //const seriesData = [{value:200, name:"Savings Account Dam"}, {value:200, name:"alarm"}, {value:200, name:"Electronics"}, {value:200, name:"intangible"}, {value:200, name:"Licensed Savings Account"}, {value:200, name:"Credit Card Account Table Small Frozen Sausages"}, {value:200, name:"Monitored Bahamian Dollar Investment Account"}, {value:200, name:"hardware Costa Rica Mayotte"}, {value:200, name:"Views e-enable Communications"}, {value:200, name:"software scale interactive"}]
    const seriesData = () =>{
      let listData: { value: any; name: string | undefined; }[] = [];
      data.series.map(s => {
        const sData = s.fields.find(i => i.type === 'number')?.values.get(0);
        listData.push({value:sData, name:s.name})
      })
      return listData
    } 
    return{
      title: {
        text: 'This is Pie Chart',
        subtext: options.text,
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
          data: seriesData(),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
  };
  render() {
    return (
      <div>
        <ReactEcharts option={this.getOption()} />

      </div>
    );
  }
}
