import styles from './index.less';
import JobListContainer from './components/jobListContainer';
export default function IndexPage() {
  const mockList: Array<IJobItem> = new Array(20).fill('').map((_, i) => ({
    jobName: '工作-同城零售' + i,
    position: '杭州',
    time: 1668610877233,
    beforeTime: '9分钟前',
  }));
  return (
    <div>
      <h1 className={styles.title}>职位轮播列表</h1>
      <JobListContainer
        scrollDuration={1000}
        list={mockList}
      ></JobListContainer>
    </div>
  );
}
