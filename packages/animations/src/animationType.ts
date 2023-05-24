export interface Animation {
  (params: {
    aboutToEnter: HTMLDivElement[]
    aboutToLeave: HTMLDivElement[]
    aboutToActive: HTMLDivElement[]
    aboutToInActive: HTMLDivElement[]
    stepDoms: Record<string, HTMLDivElement>
  }): Promise<void> | void
}