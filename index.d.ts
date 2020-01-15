import * as React from 'react';

type Function = () => void;
type UpdateFunction = (newEnd?: number) => void;

interface CallbackProps {
  onEnd?: (providedFn: {
    pauseResume: Function;
    reset: Function;
    start: Function;
    update: UpdateFunction;
  }) => void;
  onStart?: (providedFn: {
    pauseResume: Function;
    reset: Function;
    update: UpdateFunction;
  }) => void;
  onPauseResume?: (providedFn: {
    reset: Function;
    start: Function;
    update: UpdateFunction;
  }) => void;
  onReset?: (providedFn: {
    pauseResume: Function;
    start: Function;
    update: UpdateFunction;
  }) => void;
  onUpdate?: (providedFn: {
    pauseResume: Function;
    reset: Function;
    start: Function;
  }) => void;
}

export interface RenderCounterProps {
  countUpRef: React.RefObject<any>;
  start?: Function;
  pauseResume?: Function;
  reset?: Function;
  update?: UpdateFunction;
}

type EasingFn = (t: number, b: number, c: number, d: number) => number;

export interface CountUpProps extends CallbackProps {
  className?: string;
  decimal?: string;
  decimals?: number;
  delay?: number;
  duration?: number;
  end: number;
  prefix?: string;
  redraw?: boolean;
  preserveValue?: boolean;
  separator?: string;
  start?: number;
  suffix?: string;
  useEasing?: boolean;
  easingFn?: EasingFn;
  formattingFn?: (n: number) => string;
  children?: (props: RenderCounterProps) => JSX.Element;
  style?: React.CSSProperties;
}

declare class CountUp extends React.Component<CountUpProps> {}

export interface useCountUpProps extends CallbackProps {
  startOnMount?: boolean;
  start?: number;
  end: number;
  delay?: number;
  duration?: number;
  easingFn?: EasingFn;
  separator?: string;
}

type countUpHook = (
  arg: useCountUpProps,
) => {
  countUp: number | string;
  start: Function;
  pauseResume: Function;
  reset: Function;
  update: (newEnd?: number) => void;
};

export const useCountUp: countUpHook;

export default CountUp;
