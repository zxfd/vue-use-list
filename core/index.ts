export default () => {
  console.log('this is the core');
};

export const parseList = <TRes extends object, TItem extends object>(
  res: TRes,
  attrChain: string
): TItem[] => {
  const errorMessage = 'invalid attr key';
  if (attrChain.length === 0) {
    throw new Error(errorMessage);
  }
  let obj: any = res;
  attrChain.split('.').forEach((el) => {
    if (!obj[el]) {
      throw new Error(errorMessage);
    }
    obj = obj[el];
  });
  if (!(obj instanceof Array)) {
    throw new Error(errorMessage);
  }
  return obj as TItem[];
};
