import { Component, Host, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'qw-note-card',
  styleUrl: 'qw-note-card.css',
  shadow: false,
})
export class QwNoteCard {
  @State() notelist : Array<string>;

  @Listen('addNote')
  addNoteHandler(event: CustomEvent<string>){
    this.notelist=[...this.notelist,event.detail];
  }

  @Listen('deleteNotes')
  deleteNotesHandler(){
    this.notelist=[];
  }
  
  componentWillLoad(){
    this.notelist=[]
  }

  render() {
    return (
      <Host>
        <qw-note-card-heading titleCard="Notes"/>
        <qw-note-card-insert placeholder="Insert Text here..."/>
        <qw-note-card-list notelist={this.notelist} isEmpty={this.notelist.length==0}/>
        { this.notelist.length && <qw-note-card-deletebutton buttonTitle="clear list"/> }
      </Host>
    );
  }

}
