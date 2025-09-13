import React from 'react';

const CSSTestComponent = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid red' }}>
      <div>
        <strong>Text to compare, here is the icon:</strong>
        <i className="test-icon-jira"></i>
      </div>

      <div>
        <strong>Text to compare, here is the icon:</strong>
        <i className="test-icon-none-exists"></i>
      </div>

      <style>{`
        .test-icon-jira::before {
          content: '\\e910';
          font-family: 'jira';
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
        }

        .test-icon-none-exists::before {
          content: '\\e910';
          font-family: 'noneExistent';
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
        }
      `}</style>
    </div>
  );
};

export default CSSTestComponent;
