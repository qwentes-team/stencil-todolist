import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'qw-note-card',
  styleUrl: 'qw-note-card.css',
  shadow: false,
})
export class QwNoteCard {
  @State() notelist : Array<string>;
  @State() isEmpty : boolean;

  @Listen('addNote')
  addNoteHandler(event: CustomEvent<string>){
    if(this.isEmpty){
      this.notelist=[event.detail];
      this.isEmpty=false;
    }
    else{
      this.notelist=[...this.notelist,event.detail];
    }
  }

  @Listen('deleteNotes')
  deleteNotesHandler(){
    this.notelist=[];
    this.isEmpty=true;
  }
  
  componentWillLoad(){
    if(!this.notelist){
      this.isEmpty=true
    }
  }

  render() {
    return (
      <div>
        <qw-note-card-heading titleCard="Notes"></qw-note-card-heading>
        <qw-note-card-insert placeholder="Insert Text here..."></qw-note-card-insert>
        <qw-note-card-list notelist={this.notelist} isEmpty={this.isEmpty}></qw-note-card-list>
        { !this.isEmpty
          ? <qw-note-card-deletebutton buttonTitle="clear list"></qw-note-card-deletebutton>
          : <div></div>
        }
      </div>
    );
  }

}
