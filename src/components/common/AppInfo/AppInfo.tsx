import React from 'react';
import styles from './AppInfo.module.scss';

export const AppInfo = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };
  return (
    <div className={styles.info}>
      <p>
        This application was created from scratch for training and recruitment
        purposes. Please avoid using any passwords that you use for logging into
        other accounts.
      </p>
      <ul>
        <li>
          Login:
          <strong onClick={() => copyToClipboard('alex.dev.wilk@gmail.com')}>
            alex.dev.wilk@gmail.com
          </strong>
        </li>
        <li>
          Password:
          <strong onClick={() => copyToClipboard('AlexDev1!')}>
            AlexDev1!
          </strong>
        </li>
      </ul>
    </div>
  );
};
