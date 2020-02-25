import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import EchartsOption from 'EchartsOption'

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  render() {
    return (
      <div>
          <EchartsOption {...this.props}/>
      </div>
    );
  }
}
