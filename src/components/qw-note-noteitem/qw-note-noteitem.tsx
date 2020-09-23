import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'qw-note-noteitem',
  styleUrl: 'qw-note-noteitem.css',
  shadow: false,
})
export class QwNoteNoteitem {
  @Prop() note : string;

  render() {
    return (
      <Host>
        {this.note}
      </Host>
    );
  }

}
