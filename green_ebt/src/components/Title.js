import React from 'react';
import DocumentMeta from 'react-document-meta';

export default class Title extends React.Component {
  render() {
    const meta = {
      title: 'GreenEBT Map Application',
      description: 'This is a web application that helps find farmer markets that accept EBT',
      canonical: 'https://www.greenebt.com',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };

    return (
      <DocumentMeta {...meta}>
      </DocumentMeta>
    );
  }
}
