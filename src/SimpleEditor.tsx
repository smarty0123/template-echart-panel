import React, { PureComponent } from 'react';
import { FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions } from './types';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onSubTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, subtext: target.value });
  };

  onTextChanged = ({target} : any) => {
    this.props.onOptionsChange({ ...this.props.options, text: target.value });
  }

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
        <FormField label="Text" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.text || ''} />
        <FormField label="SubText" labelWidth={5} inputWidth={20} type="text" onChange={this.onSubTextChanged} value={options.subtext || ''} />
      </div>
    );
  }
}
