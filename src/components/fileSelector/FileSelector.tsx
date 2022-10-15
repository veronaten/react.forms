/* eslint-disable class-methods-use-this */
import React from 'react';

class FileSelector extends React.Component {
  fileInput = React.createRef<HTMLInputElement>();

  handleFileChange(selectorFiles: FileList | null) {
    if (selectorFiles) console.log(selectorFiles[0].name);
  }

  render() {
    return (
      <input
        type="file"
        className="form__input"
        ref={this.fileInput}
        onChange={(e) => this.handleFileChange(e.target.files)}
      />
    );
  }
}

export default FileSelector;
