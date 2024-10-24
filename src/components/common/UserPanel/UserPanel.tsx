import React, { useEffect, useState } from 'react';
import { BiError } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useAsistantMessageContext } from '../../../utils/hooks/index';
import { userAvatar } from '../../../images';
import styles from './UserPanel.module.scss';

interface Props {
  userName?: string | null;
}

const UserPanel = ({ userName }: Props) => {
  const { messageState } = useAsistantMessageContext();
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (messageState.message) {
      setIsMessageVisible(true);
      setCollapsed(false);
    } else {
      setIsMessageVisible(false);
    }
  }, [messageState.message]);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.userWrap}>
      {isMessageVisible && (
        <div
          className={`${styles.text} ${
            collapsed ? styles.collapsed : styles.expanded
          }`}
          onClick={handleToggle}
        >
          {!collapsed ? (
            <>
              <div className={styles.close}>&times;</div>
              {messageState.ikonError ? (
                <BiError className={styles.ikonError} />
              ) : (
                <AiOutlineCheckCircle className={styles.ikonOk} />
              )}
              <p>{messageState.message}</p>
            </>
          ) : (
            <p className={styles.shortMessage} onClick={handleToggle}>
              {messageState.message?.slice(0, 4)}...
            </p>
          )}
        </div>
      )}

      <div className={styles.imgWrap}>
        <img src={userAvatar} alt='avatar' />
      </div>
    </div>
  );
};

export { UserPanel };
