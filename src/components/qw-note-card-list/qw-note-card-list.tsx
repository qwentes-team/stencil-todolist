import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'qw-note-card-list',
  styleUrl: 'qw-note-card-list.css',
  shadow: false,
})
export class QwNoteCardList {
  @Prop() notelist :Array<string>;
  @Prop() isEmpty : boolean;
  
  render() {
    if(this.isEmpty){
      return(<div></div>)
    }
    else{
      return (
        <div>
          { this.notelist.map((nota) => 
            <qw-note-noteitem nota={nota}></qw-note-noteitem> )
          }
        </div>
      );
    }
  }
}
