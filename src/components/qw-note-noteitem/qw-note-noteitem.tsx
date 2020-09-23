import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'qw-note-noteitem',
  styleUrl: 'qw-note-noteitem.css',
  shadow: false,
})
export class QwNoteNoteitem {
  @Prop() note : string;

  render() {
    return this.note;
  }

}
