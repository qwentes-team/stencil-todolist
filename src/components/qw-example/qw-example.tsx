import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'qw-example',
  styleUrl: 'qw-example.css',
  shadow: false,
})
export class QwExample {
  @Prop() message: string;

  render() {
    return (
      <Host>
        {this.message}
      </Host>
    );
  }
}
