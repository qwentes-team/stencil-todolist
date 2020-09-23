import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'qw-note-noteitem',
  styleUrl: 'qw-note-noteitem.css',
  shadow: false,
})
export class QwNoteNoteitem {
  @Prop() nota : string;

  render() {
    return (
      <div>
        {this.nota}
      </div>
    );
  }

}
