import styles from './index.less';
import JobListContainer from './components/jobListContainer';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>职位轮播列表</h1>
      <JobListContainer scrollDuration={1000}></JobListContainer>
    </div>
  );
}
