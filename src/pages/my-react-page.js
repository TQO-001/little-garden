import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout title="My React Page" description="A simple React page in Docusaurus">
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to My React Page</h1>
        <p>This is a simple React component rendered within a Docusaurus layout.</p>
      </main>
    </Layout>
  );
}

