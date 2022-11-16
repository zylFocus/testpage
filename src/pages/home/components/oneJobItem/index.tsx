import { memo } from 'react';
import styles from './index.less';

function OneJobItem(props: { info: IJobItem }) {
  return (
    <div className={styles.one_row}>
      <span className={styles.job}>{props.info.jobName}</span>
      <span className={styles.position}>{props.info.position}</span>
      <span className={styles.time}>{props.info.beforeTime}</span>
    </div>
  );
}

export default memo(OneJobItem);
