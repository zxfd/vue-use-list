import type { Ref, ComputedRef } from 'vue';

export type ReqFun = (...args: any[]) => Promise<any>;

export interface CommonConfig {
  pageSize?: number; // 默认10
  init?: boolean; // 是否需要初始化,默认true
  delay?: number; // 延迟多久初始化
  params?: Ref | ComputedRef; // 筛选参数，需要支持双向绑定，在发起请求的时候会携带上
}
