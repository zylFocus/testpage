import styles from './index.less';
import OneJobItem from '../oneJobItem';
import { MutableRefObject, UIEvent, useEffect, useRef, useState } from 'react';
export default function (props: IScrollListConfig) {
  const ONE_SCROLL_DISTANCE = props.oneStepDistance || 100;
  const scrollDuration = props.scrollDuration || 2000;
  let currScrollTop = useRef(0);
  const [jobList, setJobList] = useState(new Array<IJobItem>());
  let timer: any = useRef();
  const [scrollFlag, setScrollFlag] = useState(true);

  const containerEle: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const itemWrapperEle: MutableRefObject<HTMLDivElement | null> = useRef(null);
  // 初始化
  useEffect(() => {
    // 初始化数据
    setJobList([...props.list]);
  }, []);

  function scrollListAction() {
    timer.current = setInterval(() => {
      const scrollTop = (containerEle.current as HTMLDivElement).scrollTop;
      const containerHeight = (containerEle.current as HTMLDivElement)
        .clientHeight;
      const wrapperHeight = (itemWrapperEle.current as HTMLDivElement)
        .clientHeight;
      if (scrollTop + containerHeight > wrapperHeight) {
        currScrollTop.current = 0;
        (containerEle.current as HTMLElement).scrollTo({
          top: currScrollTop.current,
        });
      } else {
        (containerEle.current as HTMLElement).scrollTo({
          top: currScrollTop.current,
          behavior: 'smooth',
        });
      }
      currScrollTop.current += ONE_SCROLL_DISTANCE;
    }, scrollDuration);
  }

  useEffect(() => {
    console.log('effect:', scrollFlag, timer.current);
    clearInterval(timer.current);
    if (scrollFlag) {
      setCurrScrollTop();
      scrollListAction();
    } else {
    }
  }, [scrollFlag]);

  function mouseHoverFn(flag: boolean) {
    setScrollFlag(flag);
    console.log(scrollFlag);
  }

  // 如果用户有滚动时，更新currScrollTop
  function setCurrScrollTop() {
    currScrollTop.current = (containerEle.current as HTMLDivElement).scrollTop;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>最新职位</div>
        <div className={styles.more}>更多</div>
      </div>
      <div
        className={styles.body}
        ref={containerEle}
        onMouseEnter={() => mouseHoverFn(false)}
        onTouchStart={() => mouseHoverFn(false)}
        onMouseLeave={() => mouseHoverFn(true)}
        onTouchEnd={() => mouseHoverFn(true)}
      >
        <div ref={itemWrapperEle}>
          {jobList.map((item, index) => (
            <OneJobItem info={item} key={index}></OneJobItem>
          ))}
        </div>
        <div style={{ height: '1px' }}></div>
      </div>
    </div>
  );
}
