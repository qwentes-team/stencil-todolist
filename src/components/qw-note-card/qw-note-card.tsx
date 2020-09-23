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
    for( let i=0; i<this.notelist.length; i++ ){
      window.localStorage.setItem('item'+i, this.notelist[i]);
    } 
  }

  @Listen('deleteNotes')
  deleteNotesHandler(){
    this.notelist=[];
    window.localStorage.clear();
  }

  componentWillLoad(){
    this.notelist=[]
    for(let i=0; i< Object.keys(localStorage).length; i++){
      this.notelist.push(window.localStorage.getItem('item'+i));
    }
    
  }

  render() {
    return (
      <Host>
        <qw-note-card-heading titleCard="Notes"/>
        <qw-note-card-insert placeholder="Insert Text here..."/>
        <div class="notelist">
          { this.notelist.map((note) => <qw-note-noteitem note={note}/>)}
        </div>
        { !!this.notelist.length && <qw-note-card-deletebutton buttonTitle="clear list"/> }
      </Host>
    );
  }

}
