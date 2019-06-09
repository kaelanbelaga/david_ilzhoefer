import * as React from "react";
import * as Scrivito from "scrivito";
import { ReactTypeformEmbed } from 'react-typeform-embed';


  class TypeformClass extends React.Component {
    render() {
      return <div style={{height: "300px"}}><ReactTypeformEmbed url="https://sowlmate.typeform.com/to/Jm9Jxo" style={{height: "100%",}} opacity="0"/></div>;
    }
  }

Scrivito.provideComponent("TypeformWidget", TypeformClass);
