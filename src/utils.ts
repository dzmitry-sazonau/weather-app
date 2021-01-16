export const setItem = (key: string, item: any): void => {
  localStorage.setItem(key, JSON.stringify(item))
};

export const getItem = (key: string): any => {
  return JSON.parse(<string>localStorage.getItem(key))
}
