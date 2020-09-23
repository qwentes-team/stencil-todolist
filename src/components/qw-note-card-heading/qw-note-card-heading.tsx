import { Component, h } from '@stencil/core';
import { Prop } from '@stencil/core';

@Component({
  tag: 'qw-note-card-heading',
  styleUrl: 'qw-note-card-heading.css',
  shadow: false,
})
export class QwNoteCardHeading {
  @Prop() titleCard: string;

  render() {
    return (
      <h1>{this.titleCard}</h1>
    );
  }

}
