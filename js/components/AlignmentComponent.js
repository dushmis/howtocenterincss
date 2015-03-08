/** @flow */

var React = require('react');
var RadioComponent = require('./RadioComponent');
var RadioListComponent = require('./RadioListComponent');

var Options = require('../how/Options');

class AlignmentComponent extends React.Component {
  state: {
    horizontalAlignment: ?Options.HorizontalAlignment;
    verticalAlignment: ?Options.VerticalAlignment;
  };

  getHorizontalAlignment(): ?Options.HorizontalAlignment {
    return this.state.horizontalAlignment;
  }

  getVerticalAlignment(): ?Options.VerticalAlignment {
    return this.state.verticalAlignment;
  }

  _handleHorizontalAlignmentChange(horizontalAlignment: Options.HorizontalAlignment) {
    this.setState({horizontalAlignment});
  }

  _handleVerticalAlignmentChange(verticalAlignment: Options.VerticalAlignment) {
    this.setState({verticalAlignment});
  }

	render(): ?ReactElement {
		return (
      <div>
        <h2>Alignment</h2>
        <p>How do you want to align the content?</p>
        <div className="col-group">
          <div className="col-5 col-mb-5">
            <h3>Horizontally</h3>
            <RadioListComponent onChange={this._handleHorizontalAlignmentChange.bind(this)}>
              <RadioComponent
                labelText="Left"
                value={Options.HorizontalAlignment.LEFT}
              />
              <RadioComponent
                labelText="Center"
                value={Options.HorizontalAlignment.CENTER}
              />
              <RadioComponent
                labelText="Right"
                value={Options.HorizontalAlignment.RIGHT}
              />
            </RadioListComponent>
          </div>
          <div className="col-5 col-mb-5">
            <h3>Vertically</h3>
            <RadioListComponent onChange={this._handleVerticalAlignmentChange.bind(this)}>
              <RadioComponent
                labelText="Top"
                value={Options.VerticalAlignment.TOP}
              />
              <RadioComponent
                labelText="Middle"
                value={Options.VerticalAlignment.MIDDLE}
              />
              <RadioComponent
                labelText="Bottom"
                value={Options.VerticalAlignment.BOTTOM}
              />
            </RadioListComponent>
          </div>
        </div>
      </div>
    );
	}
}

module.exports = AlignmentComponent;
