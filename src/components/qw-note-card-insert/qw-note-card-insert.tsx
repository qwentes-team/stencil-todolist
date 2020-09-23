import { Component, h, Listen, State, Event, EventEmitter } from '@stencil/core';
import { Prop } from '@stencil/core';

@Component({
  tag: 'qw-note-card-insert',
  styleUrl: 'qw-note-card-insert.css',
  shadow: false,
})

export class QwNoteCardInsert {

  @Prop() placeholder : string;

  @State() value : string;

  @Event() addNote: EventEmitter<string>;


  @Listen('keyup')
  handleKey(ev) {
    if (ev.keyCode === 13) {
      this.addNote.emit(ev.target.value);
      ev.target.value='';
    }
  }

  render() {
    return (
      <input placeholder={this.placeholder}></input>
    );
  }

}
