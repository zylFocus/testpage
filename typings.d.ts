declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

interface IJobItem {
  jobName: string;
  position: string;
  beforeTime: string;
  time: number; // 时间戳
}
interface IScrollListConfig {
  scrollDuration?: number;
  oneStepDistance?: number;
  list: Array<IJobItem>;
}
