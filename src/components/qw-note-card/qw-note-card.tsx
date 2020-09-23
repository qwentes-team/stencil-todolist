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
<<<<<<< HEAD
    this.notelist=[...this.notelist,event.detail];
=======
    this.notelist = [ ...this.notelist, event.detail ];
>>>>>>> 245f7052fe8a1bf492d555f292bb6ae6308f2d82
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
<<<<<<< HEAD
        <qw-note-card-list notelist={this.notelist} isEmpty={this.notelist.length==0}/>
=======
        <div class="notelist">
          { this.notelist.map((note) => <qw-note-noteitem note={note}/>)}
        </div>
>>>>>>> 245f7052fe8a1bf492d555f292bb6ae6308f2d82
        { this.notelist.length && <qw-note-card-deletebutton buttonTitle="clear list"/> }
      </Host>
    );
  }

}
