import { Component, h, Prop, EventEmitter, Event, Listen } from '@stencil/core';

@Component({
  tag: 'qw-note-card-deletebutton',
  styleUrl: 'qw-note-card-deletebutton.css',
  shadow: false,
})
export class QwNoteCardDeletebutton {
  @Prop() buttonTitle : string;

  @Event() deleteNotes: EventEmitter;

  @Listen('click')
  handleClick() {
    console.log("click");
    this.deleteNotes.emit();
  }

  render() {
    return (
      <button> {this.buttonTitle} </button>
    );
  }

}
