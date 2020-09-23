import { Component, h } from '@stencil/core';

@Component({
  tag: 'qw-note-wrapper',
  styleUrl: 'qw-note-wrapper.css',
  shadow: false,
})
export class QwNoteWrapper {

  render() {
    return (
      <qw-note-card/>
    );
  }

}
