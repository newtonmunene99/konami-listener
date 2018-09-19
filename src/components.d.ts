/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface KonamiListener {

    }
  }


    interface HTMLKonamiListenerElement extends StencilComponents.KonamiListener, HTMLStencilElement {}

    var HTMLKonamiListenerElement: {
      prototype: HTMLKonamiListenerElement;
      new (): HTMLKonamiListenerElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'konami-listener': JSXElements.KonamiListenerAttributes;
    }
  }

  namespace JSXElements {

    export interface KonamiListenerAttributes extends HTMLAttributes {
      'onInput'?: (event: CustomEvent) => void;
      'onMatch'?: (event: CustomEvent) => void;
    }
  }

  interface HTMLElementTagNameMap {
    'konami-listener': HTMLKonamiListenerElement
  }

  interface ElementTagNameMap {
    'konami-listener': HTMLKonamiListenerElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;