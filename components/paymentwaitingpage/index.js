import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const LoadingPage = () => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '70px'
      }}
    >
      <h1 style={{  }}>En attente de paiement...</h1>
      <ClipLoader color="#1d5d1d" loading size={40} css={override} />
    </div>
  );
};

export default LoadingPage;
